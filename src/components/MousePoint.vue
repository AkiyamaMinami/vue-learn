<template>
  <h1>{{ useMouseX }}: {{ y }}</h1>
</template>

<script setup lang="ts">
import useMouse from '../composiable/mouse'
const { x: useMouseX, y } = useMouse()
</script>
