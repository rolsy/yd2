import Vue from 'vue'
import Router from 'vue-router'
import Center_img from "../components/Center_img";
import Center_Left from "../components/Center_Left";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Center_img
      }
    },
    { path: '/Center_Left',
      name:'cL',
      component: Center_Left,

    },
  ]
})
