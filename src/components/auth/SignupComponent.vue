<template>
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;">
        <div class="card" style="width: 30rem; background-color: #ffffff; padding: 20px;">
            <h2 class="card-title mb-4 text-center">Regístrate en JobSatisfactionAnalysis</h2>
            <form @submit.prevent="signup">
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
                <button type="button" class="btn btn-primary">Crear cuenta</button>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <p class="m-0 text" style="font-size: 15px;">Si tienes cuenta inicia sesión</p>
                <button type="button" class="btn btn-link text " style="font-size: 15px; margin-left: -8px;" @click="redirectLogin"> aquí</button>
            </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const redirectLogin = () => {
        router.push({ path: '/login' });
    };
</script>

