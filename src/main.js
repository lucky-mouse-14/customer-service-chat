import '@/styles/index.scss'
import 'uno.css'

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'

function setupApp() {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  // 全局异常
  app.config.errorHandler = (err, vm, info) => {
    console.log('[全局异常]', err, vm, info)
  }

  app.mount('#app')
}

setupApp()
