<template>
  <input v-model="inputVal">
  <button @click="handleAddItem">
    Add Item
  </button>
  <ul>
    <li v-for="(item, itemIndex) in valList" :key="itemIndex">
      {{ item.text }}
      <button @click="handleRemoveItem(itemIndex)">
        ×
      </button>
    </li>
  </ul>
  <n-button>Default</n-button>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
interface ListItem {
  text: string
}
// ref定义的响应式数据修改都需要.value 去修改调用 => 好麻烦
const refVal: Ref = ref('')
const inputVal = ref()
const valList = ref<ListItem[]>([])

function handleAddItem() {
  if (!inputVal.value) return
  valList.value.push({
    text: inputVal.value,
  })
  inputVal.value = ''
}

function handleRemoveItem(itemIndex) {
  valList.value.splice(itemIndex, 1)
}
</script>
