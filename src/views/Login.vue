<template>
  <div class="page-container">
    <div class="login-container">
      <h1 class="login-title">Login</h1>
      <div class="social-buttons">
        <button class="social-btn apple"></button>
        <button class="social-btn microsoft"></button>
        <button class="social-btn google"></button>
      </div>
      <p class="or-text">or</p>
      <form class="login-form">
        <input type="email" placeholder="Email Address" class="input-field" />
        <input type="password" placeholder="Password" class="input-field" />
        <a href="#" class="forgot-password">Forgot password?</a>
        <button type="submit" class="sign-in-btn">Sign In</button>
      </form>
      <p class="signup-text">
        Don't have an account yet? <a href="#" class="signup-link">Sign Up.</a>
      </p>
      <button class="join-btn" @click="redirectToAAS">
        <img
          src="../assets/HARPResearchLockUps/AAS/AAS Logo.svg"
          alt="AAS Logo"
          class="aas-logo"
        />
        Join AAS
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    redirectToAAS() {
      this.$router.push("/AASReroute");
    },
  },
};
</script>

<style lang="css" scoped>
@import "../components/Login/login.css";
</style>
