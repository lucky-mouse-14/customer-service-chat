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
  tag: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div
    class="chat-box neumorphism--card neumorphism--card-active"
    flex
    flex-nowrap
    justify-between
    items-center
    h-65px
    p-13px
    cursor-pointer
    transition-all
  >
    <!-- 头像 -->
    <n-avatar :src="props.avatar" :size="40" :lazy="true" flex-none />

    <!-- 内容 -->
    <div h-full flex-1 min-w-0 pl-12px>
      <span block truncate text-15px leading-20px>{{ title }}</span>
      <span
        inline-block
        bg-purple-100
        color-purple-400
        py-2px
        px-6px
        text-12px
        border-1px
        border-purple-200
        rounded-3px
        truncate
      >
        {{ props.tag }}
      </span>
    </div>

    <!-- 提示 -->
    <div flex-none color-gray-400 text-12px self-start pl-10px leading-20px>
      <span>{{ props.label }}</span>
    </div>
  </div>
</template>
