<template>
  <section class="top-stories">
    <div class="carousel">
      <div class="story">
        <div class="story-info">
          <p class="story-date">
            {{ stories[currentStoryIndex].date }} •
            {{ stories[currentStoryIndex].readTime }} read
          </p>
          <h2 class="story-title">{{ stories[currentStoryIndex].title }}</h2>
          <p class="story-intro">{{ stories[currentStoryIndex].intro }}</p>
        </div>
        <img
          :src="stories[currentStoryIndex].imageUrl"
          alt="Story image"
          class="story-image"
        />
      </div>
    </div>
    <div class="dots">
      <span
        v-for="(story, index) in stories"
        :key="index"
        :class="{ active: index === currentStoryIndex }"
        @click="currentStoryIndex = index"
        >•</span
      >
    </div>
  </section>
</template>

<script>
import image from "../../assets/HARPResearchLockUps/Photos/vision.webp";

export default {
  data() {
    return {
      currentStoryIndex: 0,
      stories: [
        {
          imageUrl: image,
          date: "July 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "July 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "July 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
        {
          imageUrl: image,
          date: "July 11, 2023",
          readTime: "3 min",
          title: "The Future of AI Isn't Large: It's Polymorphic",
          intro:
            "As our digital world continues to grow exponentially, Artificial Intelligence (AI) has been at the forefront, with the maxim: bigger is better. Enormous computational power and massive datasets have driven many AI breakthroughs...",
        },
      ],
    };
  },
};
</script>

<style scoped>
.top-stories {
  position: relative;
  text-align: center;
  top: 10em;
  display: flex;
  flex-direction: column;
}

.carousel {
  display: flex;
  overflow: hidden;
}

.story {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  transition: opacity 0.5s ease;
  padding: 2em;
  border-radius: 2em;
  justify-content: space-evenly;
}

.story.active {
  display: flex;
}

.story-image {
  width: 500px;
  height: 200px;
  object-fit: cover;
  margin-right: 1em;
  border-radius: 5px;
}

.story-info {
  color: white;
  text-align: left;
  max-width: 600px; /* Limits the width of the text */
  padding: 2em;
}

.story-date {
  font-size: 0.9em;
  color: #a0a8b8;
}

.story-title {
  font-size: 1.8em;
  font-weight: bold;
  margin: 0.2em 0;
}

.story-intro {
  font-size: 1em;
  color: #c4c7d1;
}

/* .dots {
  margin-top: 1rem;
} */

.dots span {
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  color: #ccc;
}

.dots span.active {
  color: #343333;
}
</style>
