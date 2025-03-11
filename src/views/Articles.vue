<template>
  <div>
    <TopStories></TopStories>
    <Explore />
    <StayInTheLoop />
    <Footer />
  </div>
</template>

<script>
import Explore from "../components/Articles/Explore.vue";
import StayInTheLoop from "../components/General/StayInTheLoop.vue";
import TopStories from "@/components/Articles/TopStories.vue";
import Footer from "@/components/General/Footer.vue";

export default {
  components: { Explore, StayInTheLoop, TopStories, Footer },
};
</script>

<style scoped></style>
