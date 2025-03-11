<template>
  <div class="openSource">
    <div class="openSource-header">
      <h1>Open Source Project</h1>
      <h3>
        Insert descriptionof product. Explore the full range of our innovative
        work and see how we're shaping the future of technolohe future of
        technolohe future of technolo
      </h3>
      <GradientButton label="Try Now" class="small-button" />
    </div>
    <OpenSourceBlockRightImage />
    <OpenSourceBlockLeftImage />
    <OpenSourceBlockRightImage />
    <Footer />
  </div>
</template>

<script setup>
import GradientButton from "@/components/Buttons/GradientButton.vue";
import OpenSourceBlockLeftImage from "@/components/Projects/OpenSourceProject/OpenSourceBlockLeftImage.vue";
import OpenSourceBlockRightImage from "@/components/Projects/OpenSourceProject/OpenSourceBlockRightImage.vue";
import Footer from "@/components/General/Footer.vue";
</script>

<style lang="css" scoped>
.openSource {
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: white;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}

.openSource-header {
  max-width: 100vw;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
}

.openSource-header h1,
.openSource-header h3 {
  color: white;
  margin: 0.5rem 0;
  max-width: 50vw;
}

.openSource-header h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.openSource-header h3 {
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 3rem;
}

.small-button {
  width: 10rem;
}
</style>
