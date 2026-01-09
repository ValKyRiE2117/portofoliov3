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
            <i :class="`fas ${info.icon} text-primary mr-3`"></i>
            <div>
              <p class="text-gray-400 text-sm">{{ info.label }}</p>
              <p class="font-semibold">{{ info.value }}</p>
            </div>
          </div>
        </div>
        <div class="glass-card rounded-xl p-6">
          <h3 class="text-xl font-bold mb-4 text-primary">
            Pengalaman Professional
          </h3>
          <div class="space-y-3">
            <div v-for="exp in experiences" :key="exp.title">
              <p class="font-semibold">{{ exp.title }}</p>
              <p class="text-gray-400 text-sm">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const personalInfo = [
  {
    icon: "fa-map-marker-alt",
    label: "Alamat",
    value: "Semarang, Jawa Tengah",
  },
  {
    icon: "fa-graduation-cap",
    label: "Penghargaan",
    value: "A.Md.Kom, (D3 - Lulusan Terbaik, Cumlaude)",
  },
  {
    icon: "fa-briefcase",
    label: "Pendidikan",
    value: "D3 Teknik Informatika - UDINUS (2022-2025)",
  },
];

const experiences = [
  {
    title: "FullStack Developer - Intern",
    description: "Paperless Hospital - Sekarang",
  },
  {
    title: "Freelance Developer & Designer",
    description: "3 proyek klien website diselesaikan",
  },
  {
    title: "Lab Assistant & Programmer",
    description: "UDINUS - 10 bulan",
  },
  {
    title: "Data Management - Intern",
    description: "Telkom - 4 bulan",
  },
];
</script>
