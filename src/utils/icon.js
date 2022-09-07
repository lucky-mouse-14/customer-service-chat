import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'

export function renderIcon(icon, props = { size: 14 }) {
  return () => h(NIcon, props, { default: () => h(Icon, { icon }) })
}

export function renderCustomIcon(icon, props = { size: 14 }) {
  return () => h(NIcon, props, { default: () => h(icon) })
}
