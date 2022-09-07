import { defineStore } from 'pinia'
import { mock__chatList } from './mock/chatList'
import { mock__waitList } from './mock/waitList'
import { mock__messageList } from './mock/messageList'

export const useChatStore = defineStore('chat', {
  state() {
    return {
      kfInfo: {},
      userInfo: {},
      chatList: [],
      waitList: [],
      messageList: [],
      currentChatId: null,
    }
  },
  getters: {
    kfAvatar: (state) => {
      return state.kfInfo.avatar || ''
    },
    kfUsername: (state) => {
      return state.kfInfo.username || ''
    },
    kfStatus: (state) => {
      return state.kfInfo.status || null
    },
    userAvatar: (state) => {
      return state.userInfo.avatar || ''
    },
    userName: (state) => {
      return state.userInfo.username || ''
    },
  },
  actions: {
    logout() {
      this.kfInfo = {}
      this.userInfo = {}
      this.chatList = []
      this.waitList = []
      this.messageList = []
      this.currentChatId = null
    },

    setKfInfo(kfInfo = {}) {
      this.kfInfo = { ...kfInfo }
    },

    async getChatList() {
      this.chatList = [...mock__chatList]
    },

    async getWaitList() {
      this.waitList = [...mock__waitList]
    },

    async getMessageList() {
      this.messageList = [...mock__messageList]
    },

    changeCurrentChat(chat) {
      this.currentChatId = chat.id
      this.userInfo = chat.user
    },
  },
})
