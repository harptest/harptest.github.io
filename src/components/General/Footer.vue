<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-logo">
        <router-link class="navLink" to="/"
          ><img
            src="../../assets/HARPResearchLockUps/LogoLockups/HARPLogoShirtRes.svg"
            alt="HARP Logo"
            class="logo"
        /></router-link>
        <p>
          HARP Research accelerates innovation by delivering cutting-edge
          solutions that drive progress and create real-world impact. Driving
          Innovation, Delivering Impact.
        </p>
      </div>
      <div class="vertical-line"></div>
      <div class="footer-links">
        <div class="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <router-link class="navLink" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="navLink" to="/viewpoint"
                >Products</router-link
              >
            </li>
            <li>
              <router-link class="navLink" to="/">Articles</router-link>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms & Services</a></li>
            <li><a href="#">Privacy Policies</a></li>
            <li><a href="#">Cookie Policies</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Contact</h3>
          <p>
            <a id="mail" href="mailto:info@harpresearch.ai"
              >info@harpresearch.ai</a
            >
          </p>
          <p><a id="mail" href="tel:+18024400618">+1 (802)-440-0618</a></p>
          <div class="social-links">
            <div id="socials">
              <h1 id="followtext">Follow us here:</h1>
              <a href="#"><GithubIcon /></a>
              <a href="#"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import GithubIcon from "../../assets/SocialMediaIcons/GithubIcon.vue";
import LinkedInIcon from "../../assets/SocialMediaIcons/LinkedInIcon.vue";

export default {
  name: "Footer",
  components: {
    GithubIcon,
    LinkedInIcon,
  },
};
</script>
<style scoped>
@import "./footer.css";
</style>
