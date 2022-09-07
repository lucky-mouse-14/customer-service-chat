<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="neumorphism--card" h50px px-20px flex justify-between items-center>{{ title }}</div>
</template>
