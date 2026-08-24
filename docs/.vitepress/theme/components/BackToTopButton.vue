<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const visible = ref(false);

const updateVisibility = () => {
  visible.value = window.scrollY > 280;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateVisibility);
});
</script>

<template>
  <span class="ml-back-to-top-shell">
    <button
      v-show="visible"
      class="ml-back-to-top"
      type="button"
      title="返回顶部"
      aria-label="返回顶部"
      @click="scrollToTop"
    >
      <span class="vp-icon vpi-arrow-up" aria-hidden="true"></span>
    </button>
  </span>
</template>
