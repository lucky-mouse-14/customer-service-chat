<script setup>
import ChatList from './components/ChatList.vue'
import WaitList from './components/WaitList.vue'
import TabsMenu from '@/components/TabMenu/index.vue'

const currentTabMenu = ref('chatList')
const tabMenus = [
  { value: 'chatList', label: '会话列表(14)' },
  { value: 'waitList', label: '待接入(14)' },
]
</script>

<template>
  <div class="neumorphism--bg" w-320px flex flex-col justify-start items-start>
    <TabsMenu v-model:value="currentTabMenu" :tabs="tabMenus" flex-none w-full p-10px />
    <div class="scrollbar-hover" overflow-y-scroll flex-1 w-full px-10px>
      <transition name="fade-slide" mode="out-in">
        <ChatList v-if="currentTabMenu === 'chatList'" key="chatList" />
        <WaitList v-else-if="currentTabMenu === 'waitList'" key="waitList" />
      </transition>
    </div>
  </div>
</template>
