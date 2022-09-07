<script setup>
import { useChatStore } from '@/store/modules/chat'

const chatStore = useChatStore()
</script>
<template>
  <div class="neumorphism--card" h-55px flex justify-start items-center w-full px-10px>
    <n-avatar :src="chatStore.kfAvatar" :size="40"></n-avatar>
    <div ml-12px>{{ chatStore.kfUsername }}</div>
  </div>
</template>
