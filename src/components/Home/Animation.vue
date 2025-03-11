<script>
import { initHeader, addListeners, initAnimation } from "./animation.js";
import GetStarted from "../General/GetStarted.vue";

export default {
  components: { GetStarted },
  mounted() {
    initHeader();
    addListeners();
    initAnimation();
  },
};
</script>

<template>
  <div class="canvas-container">
    <div id="opening-line">
      <h1>
        Effortless Task<br />
        Management with <br />
        <span class="gradient-text">Polymorphic AI</span>
      </h1>
      <h3 id="second-line">
        Pioneering Hybrid Symbolic-Synthetic AI for Next-Gen Task Planning
      </h3>
      <div class="action-items">
        <get-started></get-started>
      </div>
    </div>

    <canvas id="demo-canvas"></canvas>
  </div>
</template>

<style>
@import "./animation.css";
</style>
