<template>
  <div>
    <div class="mission">
      <div class="mission-text">
        <h5>Our Story and Mission</h5>
        <h2>
          Accessible automation tools creating value for
          <span class="everyone">everyone</span>
        </h2>
        <h6 id="valuetext">
          After years of developing our virtual lithography technology, we
          refocused our efforts on AI. After testing our framework developing
          software tools for the FDA's Summer Food Service Program, we began
          developing the Simplified Semantic System Synthesis Framework, or S4,
          our proprietary polymorphic AI language, built from the ground up for
          planning. From here, HARP research hopes to expand its capabilities,
          allowing anyone to create anything.
        </h6>
      </div>

      <div class="mission-img">
        <img
          src="../../../assets/HARPResearchLockUps/Graphs/nodeGraph.png"
          alt="node graph"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.mission {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 8rem;
  flex-wrap: wrap;
  margin-bottom: 8rem;
}
.everyone {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(88, 0, 251, 1) 90%
  );
  background-clip: text;
  color: transparent;
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}

.mission-text {
  flex: 1;
  margin-right: 10rem;
  text-align: left;
}
.mission-text h2 {
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2rem;
}
.mission-text h6 {
  font-size: 0.9rem;
}

.mission-img {
  flex: 1;
}
img {
  border-radius: 10%;
}
</style>
