<script setup>
const props = defineProps({
  avatar: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  num: {
    type: Number,
    default: 0,
  },
  tag: {
    type: String,
    default: '',
  },
  current: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div
    class="chat-box neumorphism--card neumorphism--card-active neumorphism--card-current"
    :class="{ current: current }"
    flex
    flex-nowrap
    justify-between
    items-start
    h-65px
    p-13px
    cursor-pointer
    transition-all
  >
    <!-- 头像 -->
    <n-badge :value="num" :max="props.num" flex-none>
      <n-avatar :src="props.avatar" :size="40" :lazy="true" />
    </n-badge>

    <!-- 内容 -->
    <div h-full flex-1 min-w-0 pl-12px>
      <div flex justify-start items-center>
        <span flex-1 min-w-0 truncate text-15px leading-20px>{{ title }}</span>
        <span flex-none bg-purple-100 color-purple-400 py-2px px-6px text-12px border-1px border-purple-200 rounded-3px>
          {{ props.tag }}
        </span>
      </div>
      <div truncate max-w-full text-12px color-gray-400 mt-5px leading-12px>{{ desc }}</div>
    </div>

    <!-- 提示 -->
    <div flex-none color-gray-400 text-12px self-start pl-10px leading-20px>
      <span>{{ props.label }}</span>
    </div>
  </div>
</template>
