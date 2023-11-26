import axios from 'axios';
import store from '../store/store';

const BASE_URL = 'http://127.0.0.1:8000';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

let isLoggedIn = false;

const authService = {
  async login(credentials: { email: string, password: string }) {
    try {
      const response = await instance.post('auth/login', credentials);
      const token = response.data.token;

      await store.dispatch('setAuthentication', { isAuthenticated: true });

      console.log(store.getters.isAuthenticated);
      localStorage.setItem('token', token);
      return token;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  },

  async logout() {
    try {
      store.dispatch('setAuthentication', false);
      localStorage.removeItem('token');

      isLoggedIn = false;
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  },

  isLoggedIn() {
    return isLoggedIn;
  },
};

export default authService;
