<script setup>
import emojiList from './emoji.json'

const emits = defineEmits(['pick'])

function handlePick(emoji) {
  emits('pick', emoji)
}
</script>
<template>
  <n-popover placement="top" trigger="click" :raw="true" style="padding: 0">
    <template #trigger>
      <slot></slot>
    </template>
    <ul grid grid-cols-8 gap-10 p-15px bg-light-200 rounded-5px overflow-hidden>
      <li
        v-for="(item, index) in emojiList"
        :key="index"
        text-22px
        w-35px
        h-35px
        flex
        justify-center
        items-center
        cursor-pointer
        rounded-4px
        hover:bg-gray-200
        hover:text-
        @click="handlePick(item)"
      >
        {{ item }}
      </li>
    </ul>
  </n-popover>
</template>
