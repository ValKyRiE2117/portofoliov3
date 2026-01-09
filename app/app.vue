<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
const { primaryColor } = useTheme();
</script>

<template>
  <NuxtLayout>
    <Analytics />
    <UApp :color="primaryColor">
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
