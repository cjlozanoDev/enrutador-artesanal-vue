import Vue from 'vue'
export default new Vue()

import UserList from './views/UserList'
import Legal from './views/Legal'
import Contact from './views/Contact'
import AppUser from './components/AppUser'


export const routes = [
  {
    path: '/',
    component: UserList
  },
  {
    path: '/legal',
    component: Legal
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/:userid/',
    component: AppUser,
    name: 'users'
  }
]