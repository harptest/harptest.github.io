<template>
  <div>
    <router-link v-if="to" :to="to" class="blue-button">
      {{ label }}
    </router-link>
    <button v-else class="blue-button" @click="handleClick">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Default Text",
    },
    to: {
      type: String,
      default: null,
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 320px) {
  .blue-button {
    padding: 0.5em;
    font-size: 0.75em;
  }
}
@media (min-width: 768px) {
  .blue-button {
    padding: 0.5em;
    font-size: 1.2em;
  }
}
.blue-button {
  background: rgb(18, 65, 136);
  background: linear-gradient(
    90deg,
    rgba(18, 65, 136, 1) 0%,
    rgba(34, 97, 166, 1) 49%,
    rgba(67, 164, 229, 1) 100%
  );
  color: white;
  border: none;
  /* padding: 0.75em 1rem; */
  /* font-size: 1rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  width: 100%;
}

.blue-button:hover {
  background-color: #0056b3;
}

.blue-button svg {
  margin-left: 8px;
}
</style>
