import mp3 from '@/assets/message-audio.mp3'

function initMsgAudio() {
  const audio = new Audio()
  audio.src = mp3
  return audio
}

function doNotify(title, options = {}, events = {}) {
  const notification = new Notification(title, options)
  for (let event in events) {
    notification[event] = events[event]
  }
}

function notify(title, options = {}, events = {}) {
  // 先检查浏览器是否支持
  if (!('Notification' in window)) {
    return console.error('This browser does not support desktop notification')
  }
  // 检查用户是否同意接受通知
  else if (Notification.permission === 'granted') {
    doNotify(title, options, events)
  }
  // 否则我们需要向用户获取权限
  else if (Notification.permission !== 'denied' || Notification.permission === 'default') {
    Notification.requestPermission().then(function (permission) {
      // 如果用户接受权限，我们就可以发起一条消息
      if (permission === 'granted') {
        doNotify(title, options, events)
      }
    })
  }
  // 用户拒绝状态 直接退出
  else {
    return false
  }
}

export function useNotify() {
  const state = reactive({
    isShine: false,
    defaultTitle: document.title,
    timer: null,
    audioer: initMsgAudio(),
  })

  // 系统级通知提示
  function triggerMsgBox() {
    const time = new Date()
    const hh = time.getHours().toString().padStart(2, '0')
    const mm = time.getMinutes().toString().padStart(2, '0')
    notify(
      '保护视力，人人有责',
      {
        dir: 'auto', // 文字方向
        body: `${hh}:${mm} 啦！休息一下，保护双眼~`, // 通知主体
        requireInteraction: true, // 不自动关闭通知
        // 通知图标
        icon: 'https://lh3.googleusercontent.com/a-/AOh14GiuSW8Bd6nrg1yb1Pm-00AX2OBcVT11vPZQYHAj=s96-c',
        tag: 'tips', // 代表通知的一个识别标签，相同tag时只会打开一个通知窗口。
        renotify: true, // 新通知出现的时候是否替换之前的(开启此项，tag必须设置)。
      },
      {
        onclick(ev) {
          console.log(ev)
          ev.target.close()
          // window.focus()
          window.open('https://wjh0104.github.io/resume.io/') // 点击跳转链接页面
        },
      }
    )
  }

  // 页面标题闪烁提示
  function triggerMsgTips() {
    state.isShine = !state.isShine

    if (state.isShine) {
      state.timer = setInterval(function () {
        const title = document.title
        if (/新消息/.test(title) == false) {
          document.title = '【新消息：您有新的聊天消息】'
        } else {
          document.title = '【　　　　　　　　　　　　】'
        }
      }, 400)
    } else {
      state.timer ? clearInterval(state.timer) : null
      state.timer = null
      document.title = state.defaultTitle
    }
  }

  // y音频提示
  function triggerMsgAudio() {
    state.audioer.play()
  }

  onBeforeUnmount(() => {
    state.timer ? clearInterval(state.timer) : null
    state.timer = null
    state.audioer?.pause()
    state.audioer = null
  })

  return {
    triggerMsgBox,
    triggerMsgTips,
    triggerMsgAudio,
  }
}
