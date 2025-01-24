<script setup>
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()
</script>

<template>
  <div class="home-category">
    <ul>
      <li v-for="item in categoryStore.categoryList" :key="item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <RouterLink v-for="i in item.children.slice(0, 2)" :key="i" to="/">{{ i.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home-category {
  position: relative;
  z-index: 99;
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;

  ul {
    li {
      padding-left: 30px;
      height: 55px;
      line-height: 55px;

      &:hover {
        background-color: $xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
    }   
  }
}
</style>