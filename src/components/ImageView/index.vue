<script setup>
import { useMouseInElement } from '@vueuse/core'
import { buttonGroupContextKey } from 'element-plus';
import { ref, watch } from 'vue'
defineProps({
  imageList: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(0)
const enterHandler = (i) => {
  activeIndex.value = i
}

// get position of mouse
const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)

const left = ref(0)
const top = ref(0)

const positionX = ref(0)
const positionY = ref(0)

watch([elementX, elementY, isOutside], () => {
  // if (isOutside.value) return
  if (elementX.value > 100 && elementX.value < 300) {
    left.value = elementX.value - 100
  }
  if (elementX.value < 100)  left.value = 0
  if (elementX.value > 300)  left.value = 200
  if (elementY.value > 100 && elementY.value < 300) {
    top.value = elementY.value - 100
  }
  if (elementY.value < 100)  top.value = 0
  if (elementY.value > 300)  top.value = 200

  positionX.value = - left.value * 2
  positionY.value = - top.value * 2
})


</script>

<template>
  <!-- {{ elementX }}, {{ elementY }}, {{ isOutside }} -->
  <div class="pic-detail" v-if="imageList">
    <div class="big-pic" ref="target">
      <img :src="imageList[activeIndex]" alt="">
      <div class="layer" v-show="!isOutside" :style="{ left: `${left}px`, top: `${top}px`}">
      </div>
      <div class="magnify"
        v-show="!isOutside"
        :style="{
          backgroundImage: `url(${imageList[activeIndex]})`,
          backgroundPositionX: `${positionX}px`,
          backgroundPositionY: `${positionY}px`,
        }"
      >
    </div>
    </div>
    <div class="small-pic">
      <ul>
        <li 
          v-for="(pic, i) in imageList" 
          :key="i"
          @mouseenter="enterHandler(i)"
          :class="{ active: i === activeIndex }"
        >
          <img :src="pic" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pic-detail {
  display: flex;
  .big-pic {
    position: relative;
    margin-right: 15px;
    width: 400px;
    height: 400px;
    .layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
    }
    .magnify {
      position: absolute;
      top: 0;
      left: 412px;
      z-index: 500;
      width: 400px;
      height: 400px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-repeat: no-repeat;
      background-size: 800px 800px;
      background-color: #f8f8f8;
    }
  }
  .small-pic {
    // width: 80px;
    // height: 400px;
    ul {
      li {
        margin-bottom: 15px;
        width: 68px;
        height: 68px;

        &.active {
          border: 2px solid $xtxColor;
        }
      }

    }
  }
}
</style>
