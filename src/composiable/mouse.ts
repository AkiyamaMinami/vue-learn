import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'
interface MousePoint {
  x: Ref<number>
  y: Ref<number>
}
export default function useMouse(): MousePoint {
  // ref会自动类型推导
  const x = ref(0)
  const y = ref(0)
  function updatePoint(e: MouseEvent) {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    window.addEventListener('mousemove', updatePoint)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updatePoint)
  })
  return {
    x,
    y,
  }
}
