import { generateUUID } from '../utils'
import avatar from '@/assets/images/logo.png'

// 聊天室列表
export const mock__chatRoomList = []

// 聊天列表
export const mockChatList = [
  {
    id: '1',
    userInfo: {
      userId: '',
      username: '机器人 001',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '大叔大叔大叔大叔大叔大叔大叔大大大大阿迪达斯大大大厦的',
    updateTime: '15:00',
    hasNewMessage: true,
  },
  {
    id: '2',
    userInfo: {
      userId: '',
      username: '机器人 002',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '[动画表情]',
    updateTime: '15:00',
    hasNewMessage: true,
  },
  {
    id: '3',
    userInfo: {
      userId: '',
      username: '机器人 003',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '[图片]',
    updateTime: '15:00',
    hasNewMessage: true,
  },
  {
    id: '4',
    userInfo: {
      userId: '',
      username: '机器人 004',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '[文件]',
    updateTime: '15:00',
    hasNewMessage: true,
  },
  {
    id: '5',
    userInfo: {
      userId: '',
      username: '机器人 005',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '',
    updateTime: '15:00',
  },
  {
    id: '6',
    userInfo: {
      userId: '',
      username: '机器人 006',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '',
    updateTime: '15:00',
  },
  {
    id: '7',
    userInfo: {
      userId: '',
      username: '机器人 007',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '',
    updateTime: '15:00',
  },
  {
    id: '8',
    userInfo: {
      userId: '',
      username: '机器人 008',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '',
    updateTime: '昨天',
  },
  {
    id: '9',
    userInfo: {
      userId: '',
      username: '机器人 009',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '',
    updateTime: '星期三',
  },
  {
    id: '10',
    userInfo: {
      userId: '',
      username: '机器人 010',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '',
    timestamp: '111',
    updateTime: '星期四',
  },
  {
    id: '11',
    userInfo: {
      userId: '',
      username: '机器人 011',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '',
    updateTime: '21/10/3',
  },
  {
    id: '12',
    userInfo: {
      userId: '',
      username: '机器人 012',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '',
    updateTime: '21/10/11',
  },
  {
    id: '13',
    userInfo: {
      userId: '',
      username: '机器人 013',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },

    message: '',
    updateTime: '21/10/12',
  },
]

// 消息列表
export const mockMessages = [
  {
    tousername: 'U-001',
    fromusername: 'U-002',
    msgtype: 'text',
    text: {
      content: '你好，彦祖！',
    },
    createtime: 1661389533030,
    msgid: 1,
  },
  {
    tousername: 'U-002',
    fromusername: 'U-001',
    msgtype: 'text',
    text: {
      content: '你好，德华！',
    },
    createtime: 1661390504361,
    msgid: 2,
  },
  {
    tousername: 'U-002',
    fromusername: 'U-001',
    msgtype: 'text',
    text: {
      content: '给你看张图片',
    },
    createtime: 1661390723052,
    msgid: 3,
  },
  {
    tousername: 'U-002',
    fromusername: 'U-001',
    msgtype: 'image',
    image: {
      picurl: 'https://www.xiushuiyy.com/static/images/logo.svg?v=202103191647',
    },
    createtime: 1661390926413,
    msgid: 4,
  },
  {
    tousername: 'U-001',
    fromusername: 'U-002',
    msgtype: 'text',
    text: {
      content: '啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈，有趣，真有趣！',
    },
    createtime: 1661391080724,
    msgid: 5,
  },
]

// 联系人列表
export const mockContactList = [
  {
    id: '1',
    userInfo: {
      userId: '',
      username: '机器人 001',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '2',
    userInfo: {
      userId: '',
      username: '机器人 002',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '3',
    userInfo: {
      userId: '',
      username: '机器人 003',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '4',
    userInfo: {
      userId: '',
      username: '机器人 004',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '5',
    userInfo: {
      userId: '',
      username: '机器人 005',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '6',
    userInfo: {
      userId: '',
      username: '机器人 006',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '7',
    userInfo: {
      userId: '',
      username: '机器人 007',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '8',
    userInfo: {
      userId: '',
      username: '机器人 008',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '9',
    userInfo: {
      userId: '',
      username: '机器人 009',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '10',
    userInfo: {
      userId: '',
      username: '机器人 010',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '11',
    userInfo: {
      userId: '',
      username: '机器人 011',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '12',
    userInfo: {
      userId: '',
      username: '机器人 012',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
  {
    id: '13',
    userInfo: {
      userId: '',
      username: '机器人 013',
      location: '浙江 嘉兴',
      phone: '13888888888',
      avatar,
    },
  },
]

// 随机生成一条新消息
export function generateNewMsg() {
  return {
    tousername: 'U-001',
    fromusername: 'U-002',
    msgtype: 'text',
    text: {
      content: '我是生成的测试消息',
    },
    createtime: new Date().getTime(),
    msgid: generateUUID(),
  }
}
