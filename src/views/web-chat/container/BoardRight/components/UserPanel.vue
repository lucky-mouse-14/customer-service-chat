<script setup>
import { useChatStore } from '@/store/modules/chat'

const chatStore = useChatStore()
</script>

<template>
  <div>用户：{{ chatStore.userName }}</div>
</template>
