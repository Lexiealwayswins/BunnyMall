<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { getCategoryFilterAPI, postSubCategoryAPI } from '@/api/category'
import GoodsItem from '../Home/components/GoodsItem.vue'

const categoryData = ref([])
const route = useRoute()
const getCategoryData = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  categoryData.value = res.result
  // console.log('看看filter的')
  // console.log(res)
}
onMounted(() => getCategoryData())
 
const goodsList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodsList = async () => {
  const res = await postSubCategoryAPI(reqData.value)
  // console.log('看看goodsList的')
  // console.log(res)
  goodsList.value = res.result.items
}
onMounted(() => getGoodsList())

const changeTab = () => {
  console.log('tab切换了', reqData.value.sortField)
  reqData.value.page = 1
  getGoodsList()
}

const disabled = ref(false)
const load = async () => {
  // Get next page
  reqData.value.page++
  const res = await postSubCategoryAPI(reqData.value)
  goodsList.value = [...goodsList.value, ...res.result.items]
  if (res.result.items.length === 0) {
    disabled.value = true
  }
}

</script>

<template>
  <div class="container">
    <div class="bread-container">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.parentName }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="sub-container">
      <el-tabs
        v-model="reqData.sortField"
        type="card"
        class="demo-tabs"
        @tab-change="changeTab"
      >
        <el-tab-pane label="Latest" name="publishTime"></el-tab-pane>
        <el-tab-pane label="Hotest" name="orderNum"></el-tab-pane>
        <el-tab-pane label="mostComments" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <GoodsItem :goods="goods" v-for="goods in goodsList" :key="goods.id" />
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
  .container{
    .bread-container {
      padding: 25px 0;
      color: #666;
    }

    .sub-container {
      padding: 20px 10px;
      background-color: #fff;

      .demo-tabs {
        // ::v-deep .el-tabs__item.is-top.is-active,
        // ::v-deep .el-tabs__item.is-top:hover
        :deep(.el-tabs__item.is-top.is-active),
        :deep(.el-tabs__item.is-top:hover)
        {
          color: $xtxColor;
        }
      }

      .body {
        display: flex;
        flex-wrap: wrap;
        padding: 20px 50px;
      }
    }

  }
</style>