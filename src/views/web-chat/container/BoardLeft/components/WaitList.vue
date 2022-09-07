<script setup>
import ContactBox from '@/components/ContactBox/index.vue'
import { formatTimestamp } from '@/utils'
import { useChatStore } from '@/store/modules/chat'

const chatStore = useChatStore()

onMounted(async () => {
  await chatStore.getWaitList()
})
</script>
<template>
  <div>
    <div
      v-for="(item, index) in chatStore.waitList"
      :key="item.id"
      class="animation-slide-right"
      :style="`animation-delay: ${index * 0.08}s`"
      flex
      my-10px
      flex-nowrap
    >
      <ContactBox
        :avatar="item.user.avatar"
        :title="item.user.username"
        :tag="item.terminal"
        :label="formatTimestamp(item.updateTime)"
        flex-1
        min-w-0
      />
      <div
        class="neumorphism--card neumorphism--card-active neumorphism--card-hover"
        flex-none
        h-65px
        leading-65px
        px-10px
        cursor-pointer
        color-gray-400
        ml-10px
      >
        接入
      </div>
    </div>
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
