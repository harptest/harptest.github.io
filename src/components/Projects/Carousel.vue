<template>
  <div class="carousel-container">
    <div class="header-row">
      <h2 class="carousel-header">{{ title }}</h2>
      <div class="scroll-buttons">
        <button class="scroll-button" @click="scrollCarousel(-1)">❮</button>
        <button class="scroll-button" @click="scrollCarousel(1)">❯</button>
      </div>
    </div>
    <div
      class="carousel"
      :style="{
        transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
      }"
    >
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <ProjectCard :project="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "@/components/Projects/ProjectCard.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const currentIndex = ref(0);
const itemsToShow = 5; // Number of items to display at a time

function scrollCarousel(direction) {
  const totalItems = props.items.length;
  const maxIndex = totalItems - itemsToShow;
  if (direction === 1) {
    currentIndex.value =
      currentIndex.value < maxIndex ? currentIndex.value + 1 : 0;
  } else {
    currentIndex.value =
      currentIndex.value > 0 ? currentIndex.value - 1 : maxIndex;
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 85%;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 6rem;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: calc(100% / 5); /* Show 5 items at a time */
  box-sizing: border-box;
  padding: 10px;
}

.scroll-buttons {
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  z-index: 10;
  transform: translateY(-50%);
}
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
}
.carousel-item {
  min-width: calc(100% / 5);
  box-sizing: border-box;
  padding: 10px;
}
.carousel-header {
  color: white;
  font-weight: bold;
  margin: 0;
}

.scroll-button {
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
}
</style>
