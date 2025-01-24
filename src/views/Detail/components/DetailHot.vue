<script setup>
import { getHotGoodsAPI } from '@/api/detail'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  hotType: {
    type: Number
  }
})

const TYPEMAP = {
  1: '24 Hours Hot Board',
  2: 'Weekly Hot Board'
}
const title = computed(() => TYPEMAP[props.hotType])

const route = useRoute()
const hotList = ref([])
const getHotGoods = async () => {
  const res = await getHotGoodsAPI({
    id: route.params.id,
    title: props.hotType
  })
  hotList.value = res.result
}
onMounted(() => getHotGoods())
</script>

<template>
  <div class="container">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content" v-for="item in hotList" :key="item.id">
      <GoodsItem :goods="item"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  width: 240px;
  .title {
    margin-bottom: 10px;
    padding-left: 20px;
    height: 70px;
    line-height: 70px;
    background-color: $helpColor;
    color: white;
  }

  .content {
    padding: 0 10px;
  }
}
</style>