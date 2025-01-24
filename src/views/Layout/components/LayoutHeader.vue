<script setup>
import HeadCart from './HeadCart.vue'
import LayoutHeaderLeft from './LayoutHeaderLeft.vue'

</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <a href="" @click="$router.push('/login')">Bunny Mall</a>
      </h1>
      <LayoutHeaderLeft />
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="Search">
      </div>
      <HeadCart />
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background-color: #fff;

  .container {
    display: flex;
    align-items: center;

    .logo {
      width: 200px;

      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
      }
    }

    .app-header-nav {
      display: flex;
      padding-left: 40px;
      // width: 820px;

      li {
        margin-right: 25px;
        // width: 38px;
        text-align: center;

        a {
          display: inline-block;
          
          line-height: 32px;
          height: 32px;
          font-size: 16px;

          &:hover {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
          }
        }

        .active {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        } 

      }
    }

    .search {
      width: 170px;
      height: 32px;
      line-height: 32px;
      position: relative;
      background-color: #fff;
      border-bottom: 1px solid #e7e7e7;

      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }

      input {
        width: 140px;
        padding-left: 5px;
        color: #666;
      }
    }
  }
}
</style>