<!--
    组件设计：
        1. 抽离功能模块 => 页面和逻辑拆分成一个模块
        2. 外部接受传入的数据然后渲染 => 接收props
        3. 内部更新 => 通知外部
        4. 支持自定义扩展
 -->
<template>
  <div :style="{ color: color }">
    <slot />
    <div class="rate" @mouseout="mouseOut">
      <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)">☆</span>
      <span class="solid" :style="starWidth">
        <span
          v-for="num in 5"
          :key="num"
          @click="onRate(num)"
          @mouseover="mouseOver(num)"
        >★</span>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
// 泛型
const props = defineProps<{
  //   value: number
  color?: string
  modelValue: number
}>()
const width = ref(props.modelValue)
const starWidth = computed(() => `width:${width.value}em`)
const emits = defineEmits(['update:modelValue'])

function onRate(num: number) {
  emits('update:modelValue', num)
}

function mouseOver(num: number) {
  width.value = num
}
function mouseOut() {
  width.value = props.modelValue
}
</script>

<style scope>
.rate {
    position: relative;
    display: inline-block;
}
.rate > span.solid {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>
