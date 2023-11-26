<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center">JobSatisfactionAnalysis</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item" style="padding-right: 10px;">
                    <a class="nav-link" href="#">Acerca del proyecto</a>
                </li>
                <li class="nav-item">
                    <button @click="logout" class="btn btn-outline-danger">Cerrar Sesión</button>
                </li>
            </ul>
            </div>
        </div>
        </nav>
</template>

<script setup lang="ts">
    import { useStore } from 'vuex';
    import { useRouter, useRoute } from 'vue-router';

    import authService from '@/services/authService';

    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const isLoggedIn = store.getters.isAuthenticated; 
    console.log(isLoggedIn)

    const logout = async () => {
        await authService.logout();
        if (route.path !== '/') {
            router.push('/');
        }
    };
</script>


<style scoped>
</style>