<script setup>
import Nav from "./components/General/Nav.vue";
</script>

<template>
  <header>
    <Nav />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="css" scoped></style>
