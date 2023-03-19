
import antd from './antd'
import element from './element'
import vant from './vant'
export default {
  antd,
  element,
  vant,
  install(app) {
    app.use(antd)
    app.use(element)
    app.use(vant)
  }
}