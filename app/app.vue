<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
</script>

<template>
  <NuxtLayout>
    <Analytics />
    <UApp>
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
