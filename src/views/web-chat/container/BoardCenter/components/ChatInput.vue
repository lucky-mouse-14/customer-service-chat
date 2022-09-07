<script setup>
import InputTools from '@/components/InputTools/index.vue'
import InputTextarea from '@/components/InputTextarea/index.vue'

const inputValue = ref('')

function handlePickEmoji(emoji) {
  inputValue.value += emoji
}

function handleSend() {}
</script>

<template>
  <div class="neumorphism--card" h-180px p-10px>
    <!-- 工具栏 -->
    <InputTools @pick-emoji="handlePickEmoji" />

    <!-- 输入框 -->
    <InputTextarea v-model:value="inputValue" my-10px @send="handleSend" />

    <div flex justify-end>
      <span class="neumorphism--button" text-12px h-28px leading-28px text-center px-10px py-0 @click="handleSend">
        发送消息
      </span>
    </div>
  </div>
</template>
