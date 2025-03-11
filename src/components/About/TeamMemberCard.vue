<template>
  <div class="member">
    <div class="member-card">
      <div class="card front">
        <img
          :src="`${member.image}`"
          :alt="`${member.name}'s profile image`"
          id=""
        />

        <div class="member-box"></div>
      </div>
      <div class="card back">
        <div class="member-box"></div>
        <a
          class="logo"
          :href="member.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../assets/SocialMediaIcons/github.png"
            alt="GitHub Logo"
          />
        </a>
        <a
          class="logo"
          :href="member.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../assets/SocialMediaIcons/linkedin.png"
            alt="LinkedIn Logo"
          />
        </a>
      </div>
    </div>
    <h4 class="member-name">{{ member.name }}</h4>
    <h5 class="member-role">{{ member.role }}</h5>
  </div>
</template>

<script setup>
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="css" scoped>
.member {
  margin-bottom: 3%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
}

.member-card {
  width: 15rem;
  height: 15rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  margin-bottom: 1rem;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  padding: 1rem;
  color: white;
}

.front {
  background: linear-gradient(to bottom, #54204d 0%, #7db9e8 100%);
}
.front img {
  width: 15rem;
  border-radius: 10%;
}

.back {
  background: #7db9e8;
  display: flex;
  flex-direction: row;
  transform: rotateY(-180deg);
  color: black;
}
.back img {
  height: 3rem;
  width: 3rem;
  margin: 1rem;
}
.member-card:hover {
  transform: rotateY(-180deg);
}
.member-name {
  font-weight: bold;
  font-size: 1.1rem;
}

@media (min-width: 320px) {
  .member-card {
    width: 2em;
    height: 2em;
  }
  .front img {
    width: 2rem;
  }
  .member-name {
    font-weight: bold;
    font-size: 0.25rem;
  }
  .member-role {
    font-size: 0.2rem;
  }
  .back img {
    height: 1em;
    width: 1em;
    margin: 0.1rem;
  }
}
@media (min-width: 768px) {
  .member-card {
    width: 10em;
    height: 10em;
  }
  .front img {
    width: 9rem;
  }
  .member-name {
    font-weight: bold;
    font-size: 1em;
  }
  .member-role {
    font-size: 0.75rem;
  }
  .back img {
    height: 3em;
    width: 3em;
    margin: 1em;
  }
}
@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}
@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
