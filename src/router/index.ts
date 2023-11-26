import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


