<script setup>
  defineProps({
    goods: {
      type: Object,
      default: () => {}
    }
  })
</script>

<template>
  <RouterLink :to="`/detail/${goods.id}`" class="goods-item">
    <img v-img-lazy="goods.picture" alt="">
    <p class="name">{{ goods.name }}</p>
    <p class="desc">{{ goods.desc }}</p>
    <p class="price">${{ goods.price }}</p>
  </RouterLink>
</template>

<style lang="scss" scoped>
  .goods-item {
    display: block;
    padding: 20px 30px;
    width: 220px;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      display: block;
      width: 160px;
      padding-top: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: center;
      font-size: 16px;
    }

    .desc {
        height: 29px;
        font-size: 14px;
        color: #999;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
</style>