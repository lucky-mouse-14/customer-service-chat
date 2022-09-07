import { generateUUID } from '@/utils'
import avatar from '@/assets/images/logo.png'

export const mock__messageList = [
  {
    fromUserId: 'robot-1',
    msgType: 'text',
    text: {
      content: '你好，彦祖！',
    },
    createTime: 1661389533030,
    msgId: generateUUID(),
  },
  {
    fromUserId: 'robot-1',
    msgType: 'text',
    text: {
      content: '你好，彦祖！',
    },
    createTime: 1662015939564,
    msgId: generateUUID(),
  },
  {
    fromUserId: 'kf-1',
    msgType: 'text',
    text: {
      content: '你好，彦祖！',
    },
    createTime: 1662015980436,
    msgId: generateUUID(),
  },
  {
    fromUserId: 'kf-1',
    msgType: 'text',
    text: {
      content:
        '你好，彦祖！，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖，彦祖',
    },
    createTime: 1662015989780,
    msgId: generateUUID(),
  },
  {
    fromUserId: 'robot-1',
    msgType: 'text',
    text: {
      content: '你好，彦祖！',
    },
    createTime: 1662015989780,
    msgId: generateUUID(),
  },
  {
    fromUserId: 'kf-1',
    msgType: 'text',
    text: {
      content: '你好，彦祖！',
    },
    createTime: 1662016055315,
    msgId: generateUUID(),
  },
]
