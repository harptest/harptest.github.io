<template>
  <div>
    <div class="AAS">
      <h1>AAS Commercial Account</h1>
      <div class="cards">
        <ContactCard
          :icon="singleIcon"
          header1="New User"
          header2="Sign up and explore our projects"
          buttonLabel="Sign Up"
          gradientStart="#000000"
          gradientEnd="#000000"
        />
        <ContactCard
          :icon="doubleIcon"
          header1="Existing User"
          header2="Continue exploring our products"
          buttonLabel="Login"
          gradientStart="#05245A"
          gradientEnd="#05245A"
        />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import ContactCard from "@/components/Contact/ContactCard.vue";
import singleIcon from "@/assets/HARPResearchLockUps/Icons/SingleIcon.png";
import doubleIcon from "@/assets/HARPResearchLockUps/Icons/doubleIcon.png";
import Footer from "@/components/General/Footer.vue";
</script>

<style lang="css" scoped>
@import "../components/AASReroute/aas.css";
</style>
