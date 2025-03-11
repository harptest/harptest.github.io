<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
});
</script>

<style scoped>
@import "./header.css";
</style>
