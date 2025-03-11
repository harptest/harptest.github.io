<template>
  <button class="get-started-btn" @click="redirectToLogin">Get Started</button>
</template>

<script>
export default {
  name: "GetStarted",
  methods: {
    redirectToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@import "./getstarted.css";
</style>
