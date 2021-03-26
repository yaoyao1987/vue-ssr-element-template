import Vue from 'vue'
import {
  Input,
  Select,
  Option,
  Button,
  Notification,
  Message,
} from 'element-ui'

Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
