import { getStorage, removeStorage, setStorage } from '@/utils/cache'
import constantKey from './constantKey'

export function getLoginInfo() {
  return getStorage({
    name: constantKey.loginInfo,
  })
}

export function setLoginInfo(loginInfo) {
  return setStorage({
    name: constantKey.loginInfo,
    content: loginInfo,
  })
}

export function removeLoginInfo() {
  return removeStorage({
    name: constantKey.loginInfo,
  })
}
