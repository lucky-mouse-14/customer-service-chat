<script setup>
const props = defineProps({
  value: {
    type: [String, Number],
    default: null,
  },
  tabs: {
    type: Array,
    default: () => [],
  },
  tabStyle: {
    type: Object,
    default: () => {},
  },
})
const emits = defineEmits(['update:value'])

const controllLeft = computed(() => {
  const tabIndex = props.tabs.findIndex((v) => v.value === props.value)
  return `${tabIndex * 100}%`
})
const controlWidth = computed(() => {
  return `${100 / props.tabs.length}%`
})

function changeValue(val) {
  emits('update:value', val)
}
</script>

<template>
  <div class="neumorphism--tabs">
    <div class="neumorphism--tabs-content">
      <div
        v-for="item in props.tabs"
        :key="item.value"
        class="neumorphism--tabs-item"
        :class="{ current: item.value === props.value }"
        :style="tabStyle"
        @click="changeValue(item.value)"
      >
        {{ item.label }}
      </div>
      <span class="neumorphism--tabs-control" :style="`transform:translateX(${controllLeft});width:${controlWidth};`" />
    </div>
  </div>
</template>
