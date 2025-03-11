<template>
  <div class="stay-in-the-loop">
    <div class="image-section">
      <img
        src="../../assets/HARPResearchLockUps/Photos/team.webp"
        alt="team image"
        class="image-placeholder"
      />
    </div>
    <div class="content-section" ref="contentSection">
      <h1 id="FirstText" :class="firstTextVisible ? 'slide-in-right' : ''">
        Stay in the Loop.
      </h1>
      <span
        id="SecondaryText"
        :class="secondaryTextVisible ? 'slide-in-left' : ''"
      >
        Join our community of 1000+
      </span>
      <div class="subscribe-form">
        <input type="email" placeholder="Enter your email..." />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StayInTheLoop",
  data() {
    return {
      firstTextVisible: false,
      secondaryTextVisible: false,
    };
  },
  mounted() {
    this.initObserver();
  },
  methods: {
    initObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // When element is in view, add classes for animation
              this.firstTextVisible = true;
              this.secondaryTextVisible = true;
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the element is in view
        }
      );

      observer.observe(this.$refs.contentSection);
    },
  },
};
</script>
<style scoped>
@import "./stayintheloop.css";
</style>
