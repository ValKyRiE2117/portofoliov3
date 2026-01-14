<template>
  <section id="about" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12 gradient-text">
        Tentang Saya
      </h2>
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
        <div class="px-6">
          <div
            v-for="info in personalInfo"
            :key="info.label"
            class="flex items-center mb-4"
          >
            <UIcon :name="info.icon" class="size-6 bg-primary mr-3" />
            <div>
              <p class="text-gray-400 text-sm">{{ info.label }}</p>
              <p class="font-semibold">{{ info.value }}</p>
            </div>
          </div>
        </div>
        <div class="glass-card rounded-xl pt-6 ps-6 pe-6">
          <h3 class="text-xl font-bold mb-4 text-primary">
            Pengalaman Professional
          </h3>
          <div class="">
            <UTimeline
              :items="items"
              :default-value="0"
              :ui="{
                title: 'font-medium text-lg',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";
const personalInfo = [
  {
    icon: "i-lucide-map-pin",
    label: "Alamat",
    value: "Semarang, Jawa Tengah",
  },
  {
    icon: "i-lucide-graduation-cap",
    label: "Penghargaan",
    value: "A.Md.Kom, (D3 - Lulusan Terbaik, Cumlaude)",
  },
  {
    icon: "i-lucide-briefcase",
    label: "Pendidikan",
    value: "D3 Teknik Informatika - UDINUS (2022-2025)",
  },
];

const items = ref<TimelineItem[]>([
  {
    date: "November 2025 - Sekarang",
    title: "Junior Developer",
    description: "Paperless Hospital",
    icon: "i-lucide-rocket",
  },
  {
    date: "Agustus 2025 - November 2025",
    title: "Freelance Developer & Designer",
    description: "3 proyek klien website diselesaikan",
    icon: "i-lucide-check-circle",
  },
  {
    date: "Oktober 2024 - Agustus 2025",
    title: "Lab Assistant & Programmer",
    description: "UDINUS",
    icon: "i-lucide-check-circle",
  },
  {
    date: "Januari 2021 - April 2024",
    title: "Data Management - Intern",
    description: "Telkom",
    icon: "i-lucide-check-circle",
  },
]);
</script>
