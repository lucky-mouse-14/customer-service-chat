<script setup>
import EmojiPocker from '../EmojiPicker/index.vue'

const emits = defineEmits(['pick-emoji'])

function handlePickEmoji(emoji) {
  emits('pick-emoji', emoji)
}
</script>

<template>
  <div flex flex-nowrap justify-start items-center>
    <!-- <icon-icon-park-outline:emotion-happy class="tool-btn" /> -->
    <EmojiPocker @pick="handlePickEmoji">
      <icon-icon-park-outline:emotion-happy
        title="表情"
        class="neumorphism--card neumorphism--color neumorphism--card-active"
        w-30px
        h-30px
        p-5px
        rounded-full
        cursor-pointer
        outline-none
      />
    </EmojiPocker>

    <icon-icon-park-outline:screenshot
      title="截图"
      class="neumorphism--card neumorphism--color neumorphism--card-active"
      w-30px
      h-30px
      ml-10px
      p-5px
      rounded-full
      cursor-pointer
      outline-none
    />

    <icon-icon-park-outline:pic
      title="图片"
      class="neumorphism--card neumorphism--color neumorphism--card-active"
      w-30px
      h-30px
      ml-10px
      p-5px
      rounded-full
      cursor-pointer
      outline-none
    />

    <icon-icon-park-outline:folder-close
      title="文件"
      class="neumorphism--card neumorphism--color neumorphism--card-active"
      w-30px
      h-30px
      ml-10px
      p-5px
      rounded-full
      cursor-pointer
      outline-none
    />

    <icon-icon-park-outline:history
      title="聊天记录"
      class="neumorphism--card neumorphism--color neumorphism--card-active"
      w-30px
      h-30px
      ml-10px
      p-5px
      rounded-full
      cursor-pointer
      outline-none
    />
  </div>
</template>
