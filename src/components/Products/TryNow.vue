<template>
  <button class="get-started-btn">View Enterprise plans</button>
</template>

<script>
export default {
  name: "TryNow",
};
</script>

<style scoped>
.get-started-btn {
  background: rgb(111, 4, 135);
  background: linear-gradient(
    90deg,
    rgba(111, 4, 135, 1) 2%,
    rgba(189, 125, 232, 1) 100%
  );
  border: none;
  padding: 1em 2em;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 2em;
  color: white;
}

.get-started-btn:hover {
  background-color: #add8e6;
}
</style>
