<template>
  <router-link to="/projects" class="blue-button">
    Projects
    <ClipBoardIcon />
  </router-link>
</template>

<script>
import ClipBoardIcon from "../About/ClipBoardIcon.vue";

export default {
  components: {
    ClipBoardIcon,
  },
};
</script>

<style scoped>
.blue-button {
  background-color: #124188;
  color: white;
  border: none;
  padding: 0.75em 1em;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  border-radius: 2em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  width: 8em;
}

.blue-button:hover {
  background-color: #0056b3;
}

.blue-button svg {
  margin-left: 8px;
}
</style>
