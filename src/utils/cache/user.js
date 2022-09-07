import { getStorage, removeStorage, setStorage } from '@/utils/cache'
import constantKey from './constantKey'

export function getUserInfo() {
  return getStorage({
    name: constantKey.userInfo,
  })
}

export function setUserInfo(userInfo) {
  return setStorage({
    name: constantKey.userInfo,
    content: userInfo,
  })
}

export function removeUserInfo() {
  return removeStorage({
    name: constantKey.userInfo,
  })
}
