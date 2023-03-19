/**
 * getters 多种取值方式
 * 不处理参数直接取值
 * getOneData 取单个值 传值字符串 模块名称加字段名称按照顺序以.分割 例如 'book.fileName'
 * getMoreData 取多个值 传值对象 { module:[模块名称]（以数组形式）, keys: [字段值] （以数组形式） } 例如 {module: [book], keys:[fileName]}
 */
const getters = {
  getOneData: state => payload => {
    const keyArray = payload.split('.')
    if (keyArray.length === 1) {
      return state[keyArray[0]]
    } else {
      return keyArray.reduce((prev, cur) => state[prev][cur])
    }
  },
  getMoreData: state => payload => {
    let finalState; const final = {}
    const { module, keys } = payload
    if (module.length === 0) {
      finalState = state
    } else if (module.length === 1) {
      finalState = state[module[0]]
    } else {
      finalState = module.reduce((prev, cur) => state[prev][cur])
    }
    if (Object.prototype.toString.call(finalState) !== '[object Object]') {
      return ''
    }
    const stateArray = Object.keys(finalState)
    keys.forEach(key => {
      if (stateArray.includes(key)) {
        final[key] = finalState[key]
      }
    })
    return final
  }
}
export default getters
