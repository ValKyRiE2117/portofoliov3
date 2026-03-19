<template>
  <section id="skills" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12 gradient-text">
        Keahlian & Teknologi
      </h2>
      <div
        class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
      >
        <UPageCard
          v-for="skill in skills"
          :key="skill.name"
          class="text-center bg-white/5 backdrop-blur-lg"
          variant="soft"
          spotlight
          spotlight-color="primary"
          :ui="{
            root: 'bg-white/5 backdrop-blur-lg border border-white/10',
          }"
        >
          <UIcon
            v-if="skill.icon"
            :name="skill.icon"
            class="text-4xl mb-3 mx-auto block"
            :class="skill.color"
          />
          <img
            v-else-if="skill.image"
            :src="skill.image"
            :alt="`${skill.name} Logo`"
            class="w-10 h-10 mx-auto mb-3"
          />
          <h3 class="font-semibold text-xs md:text-sm lg:text-base">
            {{ skill.name }}
          </h3>
        </UPageCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: skillsData } = await useAsyncData("skills", () => {
  return queryCollection("skills").order("order", "ASC").all();
});

const skills = computed(() => skillsData.value ?? []);
</script>
