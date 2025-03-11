<template>
  <div class="post-card">
    <img :src="imageUrl" alt="Post image" class="post-image" />
    <div class="post-info">
      <p class="post-date">{{ date }} • {{ readTime }}</p>
      <h3 class="post-title">{{ title }}</h3>
      <p class="post-intro">{{ intro }}</p>
      <button class="linkedin-btn">in</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    date: String,
    readTime: String,
    title: String,
    intro: String,
  },
};
</script>

<style scoped>
.post-card {
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: white;
  padding: 0 4em 1em 4em;
  width: 100%;
  margin: 0 auto;
}

.post-image {
  width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1.5em;
  margin-left: 2em;
}

.post-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.post-date {
  font-size: 0.9em;
  color: #a0a8b8;
  margin-bottom: 0.5em;
}

.post-title {
  font-size: 2em;
  font-weight: bold;
  margin: 0.2em 0;
  line-height: 1.2em;
  color: #ffffff;
  width: 75%;
  padding: 0.25em 0 0.5em 0;
}

.post-intro {
  font-size: 1em;
  color: #c4c7d1;
  margin-bottom: 1em;
  line-height: 1.5em;
}

.linkedin-btn {
  background-color: #0077b5;
  color: white;
  padding: 0.3em 0.8em;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  align-self: start;
  margin-top: auto; /* Aligns button to the bottom of the text */
}
</style>
