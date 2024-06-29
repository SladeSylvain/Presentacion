<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Archivo from '../src/components/Archivo.vue'
</script>

<template>
  <header>
    <Archivo />
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
