<script setup>
import ChatHead from './components/ChatHead.vue'
import ChatContent from './components/ChatContent.vue'
import ChatInput from './components/ChatInput.vue'

import { useChatStore } from '@/store/modules/chat'

const chatStore = useChatStore()
</script>
<template>
  <div :key="chatStore.currentChatId" flex flex-col p-10px>
    <ChatHead :title="chatStore.userName" flex-none />
    <ChatContent :message-list="chatStore.messageList" flex-1 min-h-0 />
    <ChatInput flex-none />
  </div>
</template>
