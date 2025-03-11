<template>
  <div>
    <div class="viewpoint-container">
      <div class="viewpoint_background"></div>
      <div class="displaymain">
        <div class="introduction">
          <img
            src="../../assets/HARPResearchLockUps/LogoLockups/viewpoint_logo.svg"
            alt="Logo"
            class="logo"
          />
          <div class="product-name">
            <h1>ViewPoint</h1>
            <h3>for Outlook</h3>
          </div>
        </div>

        <div class="text-block">
          <h1>Smart email management made simple.</h1>
          <button class="blue-button">Try Now</button>
        </div>

        <Cascade />

        <div class="info">
          <div class="description-block">
            <h1>Faster. Smarter.</h1>
            <h1>Tailored to you.</h1>
            <h3>
              With Viewpoint, the Microsoft Outlook Add-In, you can streamline
              your tasks with just a single sentence.
            </h3>
          </div>

          <div class="product-images">
            <div class="product-card">
              <img
                src="../../assets/HARPResearchLockUps/Photos/Example1.webp"
                alt="Automate"
              />
              <h1>Automate From Your Mailbox</h1>
              <p>Streamline tasks right from your inbox with ease.</p>
            </div>
            <div class="product-card">
              <img
                src="../../assets/HARPResearchLockUps/Photos/Example1.webp"
                alt="Settings"
              />
              <h1>Change Account Settings</h1>
              <p>Customize your accounts for a personalized experience.</p>
            </div>
            <div class="product-card">
              <img
                src="../../assets/HARPResearchLockUps/Photos/Example1.webp"
                alt="Rules"
              />
              <h1>Manage Rules and Automations</h1>
              <p>Take control of automations and workflows effortlessly.</p>
            </div>
          </div>
        </div>

        <!-- <div class="automation-title">
          <h2>Start Automating Your Emails Today!</h2>
      </div> -->
      </div>
    </div>
    <StayInTheLoop />
    <Footer />
  </div>
</template>
<script>
import StayInTheLoop from "@/components/General/StayInTheLoop.vue";
import Footer from "../General/Footer.vue";
import Cascade from "./Cascade.vue";

export default {
  components: {
    StayInTheLoop,
    Footer,
    Cascade,
  },
};
</script>
<style scoped>
@import "./viewpoint.css";
</style>
