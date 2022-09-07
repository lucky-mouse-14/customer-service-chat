<script setup>
import { onKeyStroke, useFocus } from '@vueuse/core'

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['update:value', 'send'])

function handleInput(e) {
  e.preventDefault()
  emits('update:value', e.target.value)
}

const isTextAreaFocus = ref(false)
const refTextArea = ref(null)
const { focused } = useFocus(refTextArea)

// 监听文本框是否获取焦点
watch(focused, (focused) => {
  isTextAreaFocus.value = focused
})

// 监听是否按下回车键
onKeyStroke('Enter', (e) => {
  e.preventDefault()
  if (!isTextAreaFocus.value) return
  emits('send')
})
</script>

<template>
  <textarea
    ref="refTextArea"
    class="scrollbar-hover neumorphism--input"
    font-sans
    w-full
    h-80px
    p-10px
    name="inputTextArea"
    placeholder="请输入内容..."
    :value="value"
    @input="handleInput"
  />
</template>
