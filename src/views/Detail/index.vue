<script setup>
import { getDetailAPI } from '@/api/detail'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DetailHot from './components/DetailHot.vue'
import { useCartStore } from '@/stores/cartStore'
import { ElMessage } from 'element-plus'

const goodsDetail = ref({})
const route = useRoute()
const getDetail = async () => {
  try {
    const res = await getDetailAPI(route.params.id)
    goodsDetail.value = res.result
  } catch (err) {
    console.log('Show errors: ' + err)
  }

  // console.log(res.result)
  // console.log(goodsDetail.value)
  // console.log(goodsDetail.value.categories[0].name)
}
onMounted(() => getDetail())

const count = ref()
const changeCount = (num) => {
  count.value = num
  console.log('count: '+ count.value)
}

let skuObj = {}
const skuChange = (sku) => {
  skuObj = sku
  console.log(sku)
}

const cartStore = useCartStore()
const addCart = () => {
  if (skuObj.skuId) {
    cartStore.addCart({
      id: goodsDetail.value.id,
      name: goodsDetail.value.name,
      picture: goodsDetail.value.mainPictures[0],
      price: goodsDetail.value.price,
      count: count.value,
      skuId: skuObj.skuId,
      attrsText: skuObj.specsText,
      selected: true
    })
    ElMessage.success('Successfully added to cart')
  } else {
    ElMessage.warning('Please choose the size and color')
  }
}
</script>

<template>
  <div class="container" v-if="goodsDetail.details">
    <div class="bread-container">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${goodsDetail.categories[1].id} `}">{{ goodsDetail.categories[1].name }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/sub/${goodsDetail.categories[0].id} `}">{{ goodsDetail.categories[0].name }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ goodsDetail.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="info-container">
      <div class="goods-info">
        <div class="left-pic">
          <ImageView :imageList="goodsDetail.mainPictures" />
          <div class="sales-detail">
            <ul>
              <li>
                <p>Sales Num</p>
                <p>{{ goodsDetail.salesCount }}</p>
                <p><i class="iconfont icon-flag-fill"></i>See Sales</p>
              </li>
              <li>
                <p>Comments Num</p>
                <p>{{ goodsDetail.commentCount }}</p>
                <p><i class="iconfont icon-message-comments"></i>See Comments</p>
              </li>
              <li>
                <p>Collect Num</p>
                <p>{{ goodsDetail.collectCount }}</p>
                <p><i class="iconfont icon-Star"></i>Collect This</p>
              </li>
              <li>
                <p>Brand Info</p>
                <p>{{ goodsDetail.brand.name }}</p>
                <p><i class="iconfont icon-gdsbrand"></i>Brand Home</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-spec">
          <h3>{{ goodsDetail.name }}</h3>
          <p class="desc">{{ goodsDetail.desc }}</p>
          <p class="price">${{ goodsDetail.price }} <span>${{ goodsDetail.oldPrice }}</span></p>
          <div class="discount">
            <dl>
              <dt>On Sale</dt>
              <dd>December good deal, 120 dollers of coupon on App</dd>
            </dl>
            <dl>
              <dt>Service</dt>
              <dd><i class="iconfont icon-dot"></i>Free Return</dd>
              <dd><i class="iconfont icon-dot"></i>Fast Refund</dd>
              <dd><i class="iconfont icon-dot"></i>Free Deiliver</dd>
              <dd class="more">More</dd>
            </dl>
          </div>
          <XtxSku :goods="goodsDetail" @change="skuChange" />
          <!-- <div class="color">
            <span>Color</span>
            <ul>
              <li v-for="c in goodsDetail.specs[0].values">
                <img :src="c.picture" alt="">
              </li>
            </ul>
          </div>
          <div class="size">
            <span>Size</span>
            <ul>
              <li v-for="s in goodsDetail.specs[1].values">
                <p>{{ s.name }}</p>
              </li>
            </ul>
          </div> -->
          <div class="count">
            <span>Count</span>
            <el-input-number class="input" v-model="count" @change="changeCount" />
          </div>
          <div class="cart">
            <el-button size="large" class="btn" @click="addCart">Add to cart</el-button>
          </div>
        </div>
      </div>
      <div class="goods-footer">
        <div class="goods-article">
          <h3>Product Details</h3>
          <ul>
            <li v-for="item in goodsDetail.details.properties" :key="item.name">
              <span class="dt">{{ item.name }} </span>
              <span class="dd">{{ item.value }}</span>
            </li>
          </ul>
          <div class="goods-detail">
            <img v-for="img in goodsDetail.details.pictures" :key="img" v-img-lazy="img" alt="">
          </div>
        </div>
        <!-- 24热榜，专题推荐 -->
        <div class="goods-aside">
          <!-- 24小时 -->
          <DetailHot class="one" :hotType="1" />
          <!-- 周 -->
          <DetailHot :hotType="2" />
        </div>
      </div>
    </div> 
  </div>
</template>

<style scoped lang="scss">
.container {
  .bread-container {
      padding: 25px 0;
      color: #666;
  }

  .info-container {
    
    .goods-info {
      display: flex;
      padding: 40px 60px;
      background-color: #fff;
      .left-pic {
        margin-right: 50px;

        .sales-detail {
          width: 400px;
          text-align: center;
          font-size: 10px;
          ul {
            display: flex;
            justify-content: space-around;

            li {
              width: 100px;
              // height: 60px;
              border-right: solid 1px #e4e4e4;
              
              &:last-child {
                border: none;
              }

              p {
                i {
                  vertical-align: middle;
                  font-size: 12px;
                  padding-right: 3px;
                  color: $xtxColor;
                }

                &:first-child {
                  color: #999;
                }
                &:nth-child(2) {
                  color: $priceColor;
                }
                &:last-child {
                  color: #666;
                }
              }
            }
          }
        }
      }
      .right-spec {
        h3 {
          font-size: 22px;
        }
        .desc {
          margin-top: 10px;
          color: #999;
        }
        .price {
          margin-top: 10px;
          font-size: 22px;
          color: $priceColor;
          span {
            text-decoration: line-through;
            font-size: 16px;
            color: #999;
          }
        }
        .discount {
          margin-top: 10px;
          padding: 20px 10px;
          background-color: #f5f5f5;
          dl {
            display: flex;
            align-items: center;
            dt {
              width: 70px;
              color: #999;
            }
            dd {
              .iconfont {
                color: $xtxColor;
              }
              &.more {
                vertical-align: middle;
                margin-left: 20px;
                color: $xtxColor;
              }
            }
            &:last-child {
              margin-top: 15px;
            }
          }
        }
        // .color,
        // .size {
        //   margin-top: 10px;
        //   display: flex;
        //   align-items: center;
        //   span {
        //     padding: 20px 10px;
        //     width: 80px;
        //     color: #999;
        //   }
        //   ul {
        //     display: flex;
        //     flex-wrap: wrap;
        //     li {
        //       border: 1px solid #f3f3f3;
        //       margin-right: 10px;
        //       img {
        //         width: 50px;
        //         height: 50px;
        //       }
        //       p {
        //         padding: 2px 20px;
        //         text-align: center;
        //       }

        //       &:hover {
        //         border: 1px solid $xtxColor;
        //       }
        //       // input {
        //       //   :deep(.el-input__inner), :deep(.el-input-number__inner) { border-color: #ff6347 !important; /* 使用 !important 提高优先级 */ }
        //       // }
        //     }
        //   }
        // }
        .cart {
          margin: 10px 0 0 80px;
        }

        .count {
          margin-top: 10px;
          display: flex;
          align-items: center;
          span {
            padding: 20px 10px;
            width: 80px;
            color: #999;
          }
          .input {
            &::deep:hover {
              border-color: $xtxColor;
            }
          }
        }
      }
    }
    .goods-footer {
      display: flex;
      justify-content: space-between;
      padding-top: 25px;
      .goods-article {
        margin-right: 20px;
        padding: 40px 60px;
        background-color: #fff;
        h3 {
          display: block;
          padding-bottom: 40px;
          font-size: 20px;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 30px;

          li {
            display: flex;
            margin-bottom: 10px;
            width: 50%;

            .dt {
              width: 100px;
              color: #999;
            }

            .dd {
              flex: 1;
              color: #666;
            }
          }
        }

        .goods-detail {
          img {
            width: 100%;
          }
        }
      }
      .goods-aside {
        min-height: 1000px;
        width: 280px;
        .one {
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>