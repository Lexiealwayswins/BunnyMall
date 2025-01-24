<script setup>
  import { useScroll } from '@vueuse/core'
  import LayoutHeaderLeft from './LayoutHeaderLeft.vue'
  const { y } = useScroll(window)
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <h1 class="logo">
        <a href="" @click="$router.push('/login')">Bunny Mall</a>
      </h1>
      <LayoutHeaderLeft />
      <div class="right">
        <a href="">Brand</a>
        <a href="">Special</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: 1px solid #e4e4e4;
  background-color: #fff;

  transform: translateY(-100%);
  opacity: 0;

  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

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
      width: 820px;

      li {
        margin-right: 25px;
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

    .right {
      display: flex;
      padding-left: 40px;
      width: 220px;
      text-align: center;
      border-left: 2px solid $xtxColor;

      a {
        width: 38px;
        margin-right: 40px;
        font-size: 16px;
        line-height: 1;
      }

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

</style>