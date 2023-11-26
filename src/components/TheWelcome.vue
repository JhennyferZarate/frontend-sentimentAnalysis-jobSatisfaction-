<script setup lang="ts">
</script>

<template>
  <div class="welcome-container">
    <h1>Bienvenido al Proyecto de Análisis de Sentimiento</h1>
    <p>
      En este proyecto, exploraremos la satisfacción laboral de las personas dentro de nuestra empresa mediante el análisis de sentimientos.
      Descubre cómo las opiniones y comentarios pueden proporcionar valiosa información para mejorar el ambiente laboral.
    </p>
    <p>
      ¡Comienza explorando las diferentes secciones y descubre insights valiosos sobre la experiencia de los empleados!
    </p>
    <router-link to="/login">
      <button class="start-button">Iniciar Sesión</button>
    </router-link>
  </div>
</template>

<style scoped>
.welcome-container {
  text-align: center;
  margin: 50px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.start-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #45a049;
}
</style>
