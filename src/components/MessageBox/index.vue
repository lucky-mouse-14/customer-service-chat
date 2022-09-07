<script setup>
const props = defineProps({
  avatar: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  message: {
    type: String,
    default: '',
  },
  right: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="message-box" :class="{ right: props.right }">
    <n-avatar :src="avatar" :size="40" class="neumorphism--card" />
    <div :class="[props.right ? 'neumorphism--card-dark' : 'neumorphism--card', 'message-box__content']">
      <div v-if="props.type === 'text'">{{ message }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-box {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  .n-avatar {
    order: 1;
    flex: none;
  }
  .message-box__content {
    order: 2;
    flex: 0 1 auto;
    min-width: 0;
    min-height: 40px;
    padding: 10px 14px;
    font-size: 14px;
    line-height: 1.5em;
    margin: 0 12px;
    max-width: 60%;
  }

  &.right {
    justify-content: flex-end;
    .n-avatar {
      order: 2;
    }
    .message-box__content {
      order: 1;
    }
  }
}
</style>
