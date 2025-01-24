<script setup>

import { ArrowRight } from '@element-plus/icons-vue'
import { useCategory } from './composables/useCategory'
import { useBanner } from './composables/useBanner'
import GoodsItem from '../Home/components/GoodsItem.vue'
const { categoryData } = useCategory()
const { bannerList } = useBanner('2')
</script>

<template>
  <div class="top-category">
    <div class="container">
      <div class="bread-container">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="home-banner">
        <el-carousel arrow="never" height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sub-list">
        <h3>All Categories</h3>
        <ul>
          <li v-for="sub in categoryData.children" :key="sub.id">
            <RouterLink :to="`/category/sub/${sub.id}`">
              <img v-img-lazy="sub.picture" alt="">
              <p>{{ sub.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="i in categoryData.children">
        <div class="head">
          <h3>- {{ i.name }} -</h3>
          <p>See All<i class="iconfont icon-Right"></i></p>
        </div>
        <div class="body">
          <GoodsItem :goods="good" v-for="good in i.goods" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .top-category {
    .container {
      .bread-container {
        padding: 20px 0;
      }

      .sub-list {
        margin-top: 20px;
        padding: 30px 0;
        text-align: center;
        background-color: #fff;

        h3 {
          font-size: 32px;
          font-weight: normal;
        }

        ul {
          display: flex;
          padding: 32px;
          flex-wrap: wrap;

          li {
            width: 168px;
            height: 160px;

            img {
              width: 100px;
              height: 100px;
            }

            p {
              line-height: 40px;
            }

            &:hover {
              color: $xtxColor;
            }
          }
        }
      }

      .ref-goods {
        position: relative;
        margin-top: 20px;
        padding: 30px;
        text-align: center;
        background-color: #fff;

        .head {
          h3 {
            font-size: 32px;
            font-weight: normal;
          }

          p {
            position: absolute;
            top: 30px;
            right: 30px;
            color: #999;

            .iconfont {
              margin-left: 5px;
              font-size: 13px;
            }
          }
        }

        .body {
          display: flex;
          justify-content: space-around;
          padding: 30px 40px;
        }
      }
    }
  }
</style>