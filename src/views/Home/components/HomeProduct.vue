<script setup>
import { ref } from 'vue'
import { getGoodsAPI } from '@/api/home';
import GoodsItem from './GoodsItem.vue'
import HomePanel from './HomePanel.vue'
import { onMounted } from 'vue';

const goodsList = ref([])
const getGoods = async () => {
  const res = await getGoodsAPI()
  goodsList.value = res.result
  // console.log(res.result)
}

onMounted(() => getGoods())
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsList" :key="cate.id">
      <template #main>
        <div class="container">
          <div class="cover">
            <RouterLink to="/">
              <img v-img-lazy="cate.picture" alt="">
              <strong>
                <span>{{ cate.name }}馆</span>
                <span>{{ cate.saleInfo }}</span>
              </strong>
            </RouterLink>
          </div>
          <ul>
            <li v-for="goods in cate.goods" :key="goods.id">
              <GoodsItem :goods="goods" />
            </li>
          </ul>
        </div>
      </template>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home-product {
  .container {
    display: flex;
    background-color: #fff;
    margin-top: 20px;

    .cover {
      position: relative;
      margin-right: 30px;
      width: 240px;
      height: 610px;

      img {
        width: 100%;
        height: 100%;
      }

      strong {
        display: flex;
        position: absolute;
        top: 50%;
        left: 0;
        width: 188px;
        height: 66px;
        line-height: 66px;
        font-size: 18px;
        font-weight: normal;
        color: #fff;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;
          overflow: hidden;

          &:first-child {
            width: 76px;
            background-color: rgb(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            padding: 0 10px;
            background-color: rgb(0, 0, 0, 0.7);
          }
        }
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 990px;

      li {
        width: 240px;
        height: 300px;
      }
    }
  }
}
</style>