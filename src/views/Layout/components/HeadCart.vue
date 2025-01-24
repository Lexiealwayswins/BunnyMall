<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div class="cart-container">
    <a class="cart" href="">
      <i class="iconfont icon-cart"></i>
      <em>{{ cartStore.cartList.length }}</em>
    </a>
    <div class="layer">
      <div class="list">
        <div class="item" v-for="item in cartStore.cartList" :key="item.id">
          <RouterLink to="/">
            <img v-img-lazy="item.picture" alt="">
            <div class="center">
              <p class="name ellipsis-2" >{{ item.name }}</p>
              <p class="attr ellipsis">{{ item.attrsText }}</p>
            </div>
            <div class="right">
              <p class="price">$ {{ item.price }}</p>
              <p class="count">x {{ item.count }}</p>
            </div>
          </RouterLink>
          <i @click="cartStore.delCart(item.skuId)" class="iconfont icon-cancel-1-copy"></i>
        </div>
      </div>
      <div class="footer">
        <div class="total">
          <p class="total-count">Total {{ cartStore.allCount }} items</p>
          <p class="total-price">$ {{ cartStore.allPrice }}</p>
        </div>
        <el-button size="large" type="primary" @click="$router.push('/cartList')">Go to Cart</el-button>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.cart-container {
  margin-left: 5px;
  .cart {
    display: block;
    position: relative;
    height: 32px;
    line-height: 32px;
    text-align: center;

    .icon-cart {
      font-size: 30px;
    }
    em {
      position: absolute;
      top: 3px;  
      right: -10px;
      width: 20px;
      height: 15px;
      line-height: 15px;
      padding: 1px 2px;
      border-radius: 10px;
      background-color: $helpColor;
      color: #fff;
      font-size: 12px;
      font-style: normal;
      font-family: Arial;
      text-align: center;
      align-items: center;
    }
  }
  &:hover {
    .layer {
      opacity: 1;
      transform: none
    }
  }
  .layer {
    opacity: 0;
    transition: all 0.4s 0.2s;
    transform: translateY(-200px) scale(1, 0);
    position: absolute;
    top: 100px;
    right: 0;
    z-index: 999;
    padding: 10px;
    width: 400px;
    height: 400px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
    border-radius: 4px;

    &::before {
      content: "";
      transform: scale(0.6, 1) rotate(45deg);
      position: absolute;
      right: 14px;
      top: -10px;
      width: 20px;
      height: 20px;
      background-color: #fff;
      box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
    }

    .list {
      height: 310px;
      overflow: auto;
      .item {
        position: relative;
        a {
          display: flex;
          align-items: center;
          padding: 10px 0px;
          border-bottom: solid 1px #f5f5f5;
          img {
            width: 80px;
            height: 80px;
          }
          .center {
            padding: 0 10px;
            width: 200px;
            .name {
              font-size: 16px;
            }
            .attr {
              color: #999;
              padding-top: 5px;
            }
          }
          .right{
            width: 100px;
            text-align: center;
            font-size: 16px;
            .price {
              color: $priceColor;
            }
            .count {
              margin-top: 5px;
              color: #999;
            }

          }
        }
        i {
          opacity: 0;
          transition: all 0.5s;
          position: absolute;
          right: 0;
          bottom: 38px;
          font-size: 12px;
          color: #666;
          &:hover {
            opacity: 1;
            cursor: pointer;
          }
        }
      }
    }

    .footer {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      height: 70px;
      width: 100%;
      background-color: #f8f8f8;
      .total-count {
        color: #999;
      }
      .total-price {
        font-size: 18px;
        color: $priceColor;
      }
    }
  }
}
</style>