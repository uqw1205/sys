import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import {
  Form,
  Table,
  Pagination,
  Dropdown,
  Button,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  FormItem,
  Input,
  Select,
  Option
} from 'element-ui'

Vue.component(Form.name, Form);
Vue.component(Table.name, Table);
Vue.component(Pagination.name, Pagination);
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(TableColumn)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')