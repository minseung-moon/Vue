import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'

export default createRouter({
  // Hash history
  // https://goggle.com/#/search
  // hash 모드를 사용하면 새로고침했을 때 페이지를 찾을 수 없다는 문제를 방지할 수 있다
  history : createWebHashHistory(),
  // pages
  routes : [
    {
      path : '/', // main page
      component : Home
    },
    {
      path : '/movie',
      component : Movie
    },
    {
      path : '/about',
      component : About
    },
  ]
})