<template>
  <section id="portfolio" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-8 gradient-text pb-1">
        Portofolio Saya
      </h2>

      <!-- Filter Chips -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-4 py-2 md:px-6 md:py-2 rounded-lg text-sm font-semibold transition-all duration-300"
          :class="
            selectedCategory === category
              ? 'bg-primary text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          "
        >
          {{ category }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="projects.length === 0" class="text-center text-gray-400">
        Loading projects...
      </div>

      <!-- Empty State -->
      <div v-else-if="filteredProjects.length === 0" class="text-center text-gray-400">
        No projects found in this category.
      </div>

      <!-- Projects Grid -->
      <div v-else class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
        <div
          v-for="project in paginatedProjects"
          :key="project.id"
          class="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden"
        >
          <NuxtImg
            :src="project.image"
            :alt="project.title"
            class="w-full object-cover aspect-video"
          />
          <div class="p-4 md:p-6">
            <UBadge :label="project.category" variant="subtle" />
            <h3 class="text-xl font-bold mt-2 mb-3">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm mb-4 line-clamp-2">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
              <UBadge v-for="tech in project.technologies" :key="tech" :label="tech" variant="subtle"/>
            </div>
            <UButton :to="project.link" target="_blank" class="w-full" variant="solid" size="lg">View Project &raquo;</UButton>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center items-center gap-2">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-lg bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
        >
          <i class="fas fa-chevron-left"></i>
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          class="px-4 py-2 rounded-lg transition-all duration-300"
          :class="
            currentPage === page
              ? 'bg-primary text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          "
        >
          {{ page }}
        </button>

        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-lg bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { createClient } from '@supabase/supabase-js'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  technologies: string[]; // This will be an array after processing
  aspect_video?: boolean;
  created_at?: string;
}

const config = useRuntimeConfig();
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey);

const projects = ref<Project[]>([]);

async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error("Supabase Error:", error);
  } else {
    projects.value = data?.map(project => ({
      ...project,
      technologies: typeof project.technologies === 'string' 
        ? project.technologies.split(',').map(tech => tech.trim())
        : project.technologies || []
    })) || [];
  }
}

onMounted(() => {
  getProjects();
});

const categories = ["All", "Website", "Mobile", "UI/UX"];
const selectedCategory = ref("All");
const currentPage = ref(1);
const projectsPerPage = 4;

// Filter projects based on selected category
const filteredProjects = computed((): Project[] => {
  if (selectedCategory.value === "All") {
    return projects.value;
  }
  return projects.value.filter(
    (project) => project.category === selectedCategory.value
  );
});

// Calculate total pages
const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / projectsPerPage);
});

// Get projects for current page
const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  return filteredProjects.value.slice(start, end);
});

// Reset to page 1 when category changes
watch(selectedCategory, () => {
  currentPage.value = 1;
});
</script>