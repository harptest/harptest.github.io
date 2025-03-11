<script>
import GetStarted from "./GetStarted.vue";

export default {
  components: { GetStarted },
  data() {
    return {
      showProductsDropdown: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleProductsDropdown() {
      this.showProductsDropdown = !this.showProductsDropdown;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 100;
    },
  },
  mounted() {
    // Add scroll event listener when component is mounted
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Clean up the event listener when component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <div>
    <nav :class="{ scrolled: isScrolled }">
      <div class="nav-left">
        <router-link class="navLink" to="/">
          <img
            src="../../assets/HARPResearchLockUps/LogoLockups/HARPLogoShirtRes.svg"
            alt="HARP Logo"
            class="logo"
          />
        </router-link>
        <router-link class="navLink" to="/about">About</router-link>
        <div class="navLink products" @click="toggleProductsDropdown">
          Products
          <div v-if="showProductsDropdown" class="dropdown">
            <router-link class="dropdown-link" to="/viewpoint"
              >ViewPoint</router-link
            >
          </div>
        </div>
        <!-- <router-link class="navLink" to="/projects">Projects</router-link>
        <router-link class="navLink" to="/articles">Articles</router-link> -->
      </div>
      <div class="nav-right">
        <router-link class="navLink" to="/contact">Contact Us</router-link>
        <router-link class="navLink" to="/login">
          <get-started></get-started>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="css" scoped>
@import "./nav.css";
</style>
