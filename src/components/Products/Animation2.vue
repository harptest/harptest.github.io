<script>
import { initHeader, addListeners, initAnimation } from "./animation2.js";
import GetStarted from "../General/GetStarted.vue";
import Trynow from "./TryNow.vue";

export default {
  components: { Trynow, GetStarted },
  mounted() {
    initHeader();
    addListeners();
    initAnimation();
  },
};
</script>

<template>
  <div class="canvas-container">
    <div id="heh">
      <h1>
        <span class="gradient-text">ViewPoint</span>
      </h1>
      <h3 id="heheh">
        Pioneering Hybrid Symbolic-Synthetic AI for Next-Gen Task Planning
      </h3>
      <div class="action-items">
        <get-started></get-started>
        <Trynow></Trynow>
      </div>
    </div>

    <canvas id="demo-canva"></canvas>
  </div>
</template>

<style>
.canvas-container {
  position: relative;
}
.action-items {
  margin-top: 1em;
  display: flex;
  align-items: center;
  gap: 0.5em;
}
#Careers {
  margin-left: 1em;
  font-size: 0.75em;
  text-decoration: none;
  color: white;
}
#heh {
  position: absolute;
  top: 8em; /* Adjust the position of the heading */
  left: 31%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.8rem;
  z-index: 10; /* Ensures the heading is on top of the canvas */
  text-align: left;
  width: 50%;
  line-height: 2.5em;
}
#heheh {
  margin-top: 1em;
  font-size: 1.5rem;
  line-height: 1.5em;
  width: 75%;
}
.gradient-text {
  background: linear-gradient(
    270deg,
    rgba(174, 125, 232, 1) 0%,
    rgba(0, 191, 255, 1) 98%
  );

  background-clip: text;
  color: transparent;
  font-weight: 500;
}

#demo-canva {
  background: #161616;
  width: 100%;
  clip-path: inset(0 0 25% 0);
}
</style>
