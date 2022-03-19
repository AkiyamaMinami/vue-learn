<template>
  <Todolist />
  <MousePoint />
  <!-- <Rate :value="score" :color="'skyblue'" @change="update" /> -->
  <Rate v-model="score">
    22
  </Rate>{{ score }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Todolist from './components/Todolist.vue'
import Rate from './components/Rate.vue'

const score = ref(2)

// function update(num: number) {
//   score.value = num
// }
</script>
