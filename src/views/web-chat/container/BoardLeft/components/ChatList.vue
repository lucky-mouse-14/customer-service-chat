<script setup>
import ChatBox from '@/components/ChatBox/index.vue'
import { formatTimestamp } from '@/utils'
import { useChatStore } from '@/store/modules/chat'

const chatStore = useChatStore()

onMounted(async () => {
  await chatStore.getChatList()
  chatStore.changeCurrentChat(chatStore.chatList[0])
  await chatStore.getMessageList()
})

function handleChatClick(chat) {
  chatStore.changeCurrentChat(chat)
}
</script>
<template>
  <div>
    <ChatBox
      v-for="(item, index) in chatStore.chatList"
      :key="item.id"
      class="animation-slide-right"
      :style="`animation-delay: ${index * 0.08}s`"
      :avatar="item.user.avatar"
      :title="item.user.username"
      :tag="item.terminal"
      :label="formatTimestamp(item.updateTime)"
      :desc="item.lastMessage"
      :num="item.unread"
      :current="item.id === chatStore.currentChatId"
      mb-10px
      @click="handleChatClick(item)"
    />
  </div>
</template>

<style lang="scss" scoped>
.animation-slide-right {
  opacity: 0;
  animation: slideRight 0.35s ease;
  animation-fill-mode: forwards;
}

@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
