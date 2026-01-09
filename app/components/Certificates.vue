<template>
  <section id="certificates" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12 gradient-text">
        Sertifikat & Penghargaan
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div
          v-for="cert in certificates"
          :key="cert.title"
          class="glass-card rounded-xl p-6 hover:scale-105 transition-transform"
        >
          <div class="text-primary mb-3">
            <i :class="`fas ${cert.icon} text-3xl`"></i>
          </div>
          <span class="text-gray-400 text-xs">{{ cert.year }}</span>
          <h3 class="font-bold mt-1 mb-2">{{ cert.title }}</h3>
          <p class="text-gray-400 text-sm">{{ cert.issuer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const certificates = [
  {
    icon: "fa-award",
    year: "2022",
    title: "MTCNA (MikroTik Certified Network Associate)",
    issuer: "MikroTik",
  },
  {
    icon: "fa-certificate",
    year: "2023",
    title: "Sertifikat Latihan Keterampilan Manajemen Mahasiswa",
    issuer: "Universitas Dian Nuswantoro",
  },
  {
    icon: "fa-code",
    year: "2024",
    title: "Sertifikasi Junior Web Developer",
    issuer: "Lembaga Sertifikasi Profesi Universitas Dian Nuswantoro",
  },
  {
    icon: "fa-users",
    year: "2024",
    title: "Sertifikat Pembekalan Calon Pengurus Organisasi",
    issuer: "Universitas Dian Nuswantoro",
  },
  {
    icon: "fa-mobile-alt",
    year: "2024",
    title: "Sertifikasi Junior Mobile Programmer",
    issuer: "Lembaga Sertifikasi Profesi Universitas Dian Nuswantoro",
  },
  {
    icon: "fa-language",
    year: "2025",
    title: "Sertifikat TOEFL, Skor : 607",
    issuer: "Brighten English Pare Kediri",
  },
];
</script>
