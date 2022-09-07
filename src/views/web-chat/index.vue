<script setup>
import BoardHeader from './container/BoardHeader/index.vue'
import BoardLeft from './container/BoardLeft/index.vue'
import BoardCenter from './container/BoardCenter/index.vue'
import BoardRight from './container/BoardRight/index.vue'

import avatar from '@/assets/images/logo.png'

import { useChatStore } from '@/store/modules/chat'

// TODO: 客服账号信息
const kfInfo = ref({
  id: 'kf-1',
  username: 'kf-1',
  avatar,
  status: 1, // 状态: 0 - 离线, 1 - 在线
})

const chatStore = useChatStore()

onMounted(() => {
  chatStore.setKfInfo(kfInfo.value)
})
</script>

<template>
  <div flex justify-center items-center h-full>
    <div class="neumorphism--bg" w-full h-full relative overflow-hidden flex flex-col>
      <BoardHeader flex-none z-2 />
      <div flex-1 z-1 min-h-0 flex flex-nowrap justify-start items-start h-full>
        <BoardLeft flex-none h-full />
        <BoardCenter flex-1 min-w-0 h-full />
        <BoardRight flex-none h-full />
      </div>
    </div>
  </div>
</template>
