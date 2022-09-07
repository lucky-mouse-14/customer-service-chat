<script setup>
import MessageBox from '@/components/MessageBox/index.vue'
import { formatTimestamp, isSameMinute } from '@/utils'
import avatar from '@/assets/images/logo.png'

const props = defineProps({
  messageList: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="scrollbar-hover neumorphism--input" my-20px p-20px overflow-y-auto>
    <ul class="message-list" m-5px>
      <li
        v-for="(item, index) in messageList"
        :key="item.msgId"
        class="message-item"
        :class="{ right: item.fromUserId === 'kf-1' }"
      >
        <span
          v-show="
            messageList[index - 1] && !isSameMinute(messageList[index].createTime, messageList[index - 1].createTime)
          "
          class="message-item--time"
        >
          {{ formatTimestamp(item.createTime, false) }}
        </span>

        <MessageBox
          :right="item.fromUserId === 'kf-1'"
          :avatar="avatar"
          :type="item.msgType"
          :message="item[item.msgType].content"
          mb-16px
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.message-list {
  overflow: hidden;
}
.message-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.message-item--time {
  align-self: center;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  color: #efefef;
  padding: 3px 6px;
  border-radius: 5px;
  margin: 8px 0;
}
</style>
