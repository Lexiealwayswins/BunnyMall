<script setup>
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()
onMounted(() => { categoryStore.getCategory() })
</script>

<template>
  <ul class="app-header-nav">
    <li v-for="item in categoryStore.categoryList" :key="item.id">
      <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.app-header-nav {
  display: flex;
  padding-left: 40px;
  width: 820px;

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
</style>