<template>
  <div class="d-flex align-items-center justify-content-center" style="height: 100vh;">
    <div class="card" style="width: 30rem; background-color: #ffffff; padding: 20px;">
      <h2 class="card-title mb-4 text-center">¡Bienvenido a JobSatisfactionAnalysis!</h2>
      <form @submit.prevent="login">
        <div class="input-group mb-3">
          <v-icon name="gi-pad-lock" />
          <span for="email" class="input-group-text" id="basic-addon1">
            <font-awesome-icon icon="fa-user" style="color: #000000;"/>
          </span>
          <input type="text" v-model="email" class="form-control" placeholder="Correo Electrónico" aria-label="email" aria-describedby="basic-addon1" required/>
        </div>
        <div class="input-group mb-3">
          <span for="password" class="input-group-text" id="basic-addon1">
            <font-awesome-icon icon="fa-lock" style="color: #000000;" />
          </span>
          <input type="password" v-model="password" class="form-control" placeholder="Contraseña" aria-label="email" aria-describedby="basic-addon1" required/>
        </div>
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-primary ">Iniciar Sesión</button>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <p class="m-0 text" style="font-size: 15px;">Si no tienes cuenta regístrate</p>
          <button type="button" class="btn btn-link text " style="font-size: 15px; margin-left: -8px;" @click="redirectRegister"> aquí</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'; // Importa ref y onMounted desde Vue
    import authService from '@/services/authService';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const redirectRegister = () => {
        router.push({ path: '/signup' });
    };

    const store = useStore();  // Obtiene la instancia del store

    const email = ref('');
    const password = ref('');
    let isLoggedIn = ref('');
  
  const getUsername = () => email.value;
  
  onMounted(async () => {
    checkAuthentication();
  });
  
  const checkAuthentication = async () => {
    try {
      isLoggedIn.value = store.getters.isAuthenticated; 
    } catch (error) {
      isLoggedIn.value = false;
    }
  };
  
  const login = async () => {
    try {
      const credentials = {
        email: email.value,
        password: password.value,
      };
      await authService.login(credentials);
      isLoggedIn.value = true;
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };
  
  const logout = async () => {
    try {
      await authService.logout();
      isLoggedIn.value = false;
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };
  </script>
  
