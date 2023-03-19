import { SET_ONE, SET_MORE } from './mutations-types.js'
/**
 * mutations 更新state两种
 * 单一更新 需要传入对象 { key: 更新字段名, content: 更新字段值 }
 * 批量更新 需要传入批量更新的所有参数以对象的形式，注意不在state中的数据不予更新
 */
const mutationsSet = {
  [SET_ONE]: (state, payload) => {
    // 有完善的空间（判断方面）
    if (payload.key) {
      state[payload.key] = payload.content
    }
  },
  [SET_MORE]: (state, payload) => {
    if (Object.prototype.toString.call(payload) === '[object Object]') {
      const keys = Object.keys(payload)
      const keyState = Object.keys(state)
      keys.forEach(key => {
        if (keyState.includes(key)) {
          state[key] = payload[key]
        }
      })
    }
  }
}
export default mutationsSet
