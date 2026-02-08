<script setup lang="ts">
const { primaryColorHex } = useTheme();
</script>

<template>
  <div class="page-wrapper">
    <div class="aurora-background">
      <ClientOnly>
        <Aurora
          :color-stops="[primaryColorHex, '#171D22', primaryColorHex]"
          :amplitude="0.6"
          :blend="0.6"
          :speed="1.2"
          :intensity="0.8"
          class="w-full h-full"
        />
      </ClientOnly>
    </div>

    <div class="content-layer">
      <AppHeader />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Organization />
      <Certificates />
      <Contact />
      <AppFooter />
      <ThemeSelector />
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
}

.aurora-background {
  width: 100%;
  height: 500px;
  position: absolute;
  overflow: hidden;
  z-index: 0;
}

.content-layer {
  position: relative;
  z-index: 10;
  pointer-events: auto;
}
</style>
