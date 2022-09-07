<script setup>
import TabsMenu from '@/components/TabMenu/index.vue'
import UserPanel from './components/UserPanel.vue'
import GoodsPanel from './components/GoodsPanel.vue'
import OrderPanel from './components/OrderPanel.vue'

import { useChatStore } from '@/store/modules/chat'

const chatStore = useChatStore()

watch(
  () => chatStore.currentChatId,
  () => {
    currentTabMenu.value = 'user'
  },
  { deep: false, immediate: false }
)

const currentTabMenu = ref('user')
const tabMenus = [
  { value: 'user', label: '用户' },
  { value: 'goods', label: '商品' },
  { value: 'order', label: '订单' },
]
</script>

<template>
  <div class="board-right" w-300px>
    <TabsMenu v-model:value="currentTabMenu" :tabs="tabMenus" flex-none w-full p-10px />
    <div class="scrollbar-hover" overflow-y-scroll flex-1 w-full px-10px>
      <transition name="fade-slide" mode="out-in">
        <UserPanel v-if="currentTabMenu === 'user'" />
        <GoodsPanel v-else-if="currentTabMenu === 'goods'" />
        <OrderPanel v-else-if="currentTabMenu === 'order'" />
      </transition>
    </div>
  </div>
</template>
