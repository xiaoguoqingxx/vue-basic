
import 'ant-design-vue/dist/antd.css'
import { Drawer, Collapse, Menu, Dropdown,Modal,Button,message} from 'ant-design-vue'
export default {
  install (app) {
    [
      Drawer,
      Collapse,
      Dropdown,
      Menu, 
      Modal,
      Button
    ].forEach(c => app.component(c.displayName || c.name, c))
    //使用message需要配置这一步
    app.prototype.$message = message;
  }
}