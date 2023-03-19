import { Button } from 'vant';
export default {
  install (app) {
    [
      Button
    ].forEach(c => app.component(c.displayName || c.name, c))
  }
}