import { getStorage, removeStorage, setStorage } from '@/utils/cache'
import constantKey from './constantKey'

export function getToken() {
  return getStorage({
    name: constantKey.token,
    type: 'session',
  })
}

export function setToken(token) {
  return setStorage({
    name: constantKey.token,
    content: token,
    type: 'session',
  })
}

export function removeToken() {
  return removeStorage({
    name: constantKey.token,
    type: 'session',
  })
}
