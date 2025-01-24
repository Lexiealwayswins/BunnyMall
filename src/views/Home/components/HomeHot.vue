<script setup>
import { onMounted, ref } from 'vue'
import { getHotAPI} from '@/api/home'
import HomePannel from './HomePanel.vue'

const hotList = ref([])
const getHot = async () => {
  const res = await getHotAPI()
  hotList.value = res.result
}

onMounted(() => getHot())
</script>

<template>
  <HomePannel title="人气推荐" subtitle="人气爆款 不容错过">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in hotList" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <img v-img-lazy="item.picture" alt="">
            <p class="title">{{ item.title }}</p>
            <p class="alt">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePannel>
</template>

<style lang="scss" scoped>
  .goods-list {
    display: flex;
    justify-content: space-between;

    li {
      margin-right: 5px;
      width: 306px;
      height: 406px;
      transition: all .5s;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

      &:last-child {
        margin-right: none;
      }

      img {
        width: 306px;
        height: 306px;
      }

      p {
        padding-top: 12px;
        text-align: center;
        font-size: 22px;
      }

      .alt {
        color: #999;
        font-size: 18px;
      }
    }
  }
</style>

