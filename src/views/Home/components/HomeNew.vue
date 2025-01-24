<script setup>
import { onMounted, ref } from 'vue'
import { getNewAPI } from '@/api/home'
import HomePannel from './HomePanel.vue'

const newList = ref([])
const getNew = async () => {
  const res = await getNewAPI('4') 
  newList.value = res.result
}
onMounted(() => getNew())
</script>

<template>
  <HomePannel title="新鲜好物" subtitle="新鲜出炉 品质新鲜">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in newList" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <img v-img-lazy="item.picture" alt="">
            <p class="name">{{ item.name }}</p>
            <p class="price">${{ item.price }}</p>
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
      background-color: #f0f9f4;
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
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 22px;
      }

      .price {
        color: $priceColor;
      }
    }
  }
</style>

