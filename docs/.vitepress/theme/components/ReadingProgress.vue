<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "bar",
  },
});

const progress = ref(0);

const updateProgress = () => {
  const doc = document.documentElement;
  const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
  const value = (window.scrollY / maxScroll) * 100;
  progress.value = Math.min(100, Math.max(0, value));
};

onMounted(() => {
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateProgress);
  window.removeEventListener("resize", updateProgress);
});

const percent = computed(() => Math.round(progress.value));
</script>

<template>
  <div v-if="props.variant === 'bar'" class="ml-reading-progress ml-reading-progress-bar" aria-hidden="true">
    <span class="ml-reading-progress-fill" :style="{ width: `${progress}%` }"></span>
  </div>

  <section v-else class="ml-reading-progress ml-reading-progress-card" aria-label="阅读进度">
    <div class="ml-reading-progress-label">阅读进度</div>
    <div class="ml-reading-progress-value">{{ percent }}%</div>
    <div class="ml-reading-progress-track" aria-hidden="true">
      <span class="ml-reading-progress-fill" :style="{ width: `${progress}%` }"></span>
    </div>
    <p>沿着右侧目录继续阅读，当前进度会跟随滚动变化。</p>
  </section>
</template>
