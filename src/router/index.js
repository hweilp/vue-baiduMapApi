import Vue from 'vue'
import Router from 'vue-router'
import LeftMenuRoutes from './LeftMenuRoutes'
import CustRoutes from './routes'

Vue.use(Router)

let Routes = LeftMenuRoutes.concat(CustRoutes);

export default new Router({
  routes: Routes
})
