<script setup>
import { useBanner } from '@/views/Category/composables/useBanner'
const { bannerList } = useBanner('1')
</script>

<template>
  <div class="home-banner">
    <el-carousel arrow="never" height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.home-banner {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  width: 100%;
  height: 500px;

  img {
    height: 500px;
    width: 100%;
  }
}
</style>