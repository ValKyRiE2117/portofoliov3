<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
const { primaryColor } = useTheme();

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} `
      : "Aritza Ganendra Kusuma - Portfolio";
  },
  ogTitle: "Aritza Ganendra Kusuma - Portfolio",
  description:
    "Hi, Welcome to my personal website, showcasing my projects and skills.",
  ogDescription:
    "Hi, Welcome to my personal website, showcasing my projects and skills.",
});
</script>

<template>
  <NuxtLayout>
    <Analytics />
    <UApp :color="primaryColor">
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
