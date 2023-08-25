import { createRouter, createWebHistory  } from 'vue-router'
import Login from '../components/Login/LoginComponent.vue';
import HomeComponent from '../components/Home/HomeComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    { path: '/Login',
      name: 'Login',
      component: Login,
      meta: { title: 'Login' }
    },
    { path: '/',
      name: 'Home',
      component: HomeComponent,
      meta: { title: 'Home' },
      children:[
        
      ]
    },
   
  ]

})


export default router

