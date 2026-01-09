<template>
  <section id="organization" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-10 pb-1 gradient-text">
        Pengalaman Organisasi & Kegiatan
      </h2>

      <div class="max-w-4xl mx-auto">
        <!-- Organization Header -->
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-white mb-2">
            Himpunan Mahasiswa D3 Teknik Informatika – UDINUS
          </h3>
          <div
            class="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          >
            <span class="flex items-center">
              <i class="fas fa-user-tie mr-2"></i>Koordinator Divisi Humas
            </span>
            <span class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2"></i>Semarang, Jawa Tengah
            </span>
            <span class="flex items-center">
              <i class="fas fa-calendar-alt mr-2"></i>Agustus 2023 – Agustus
              2024
            </span>
          </div>
        </div>

        <!-- Activity Cards -->
        <div class="space-y-4">
          <div
            v-for="activity in activities"
            :key="activity.icon"
            class="glass-card rounded-xl p-6 hover:scale-[1.02] transition-transform"
          >
            <div class="flex">
              <div class="flex-shrink-0 mr-4">
                <div
                  class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                >
                  <i :class="`fa-solid ${activity.icon} text-primary`"></i>
                </div>
              </div>
              <div class="flex-grow">
                <p
                  class="text-gray-200 text-sm md:text-base"
                  v-html="activity.description"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activities = [
  {
    icon: "fa-user-group",
    description: `Anggota Panitia Sie Acara <span class="text-primary font-semibold">Dinus Inside 2023</span> yang merancang kegiatan Orientasi Studi dan Pengenalan Kampus Udinus`,
  },
  {
    icon: "fa-user-tie",
    description: `Ketua Pelaksana <span class="text-primary font-semibold">Workshop Laravel Programming 2023</span> yang sukses mendatangkan <span class="text-primary font-bold">120+ peserta</span> dan 3 pemateri profesional`,
  },
  {
    icon: "fa-chalkboard-user",
    description: `Pemateri sekaligus Koordinator Sie Acara <span class="text-primary font-semibold">FIK FAIR 2024 Goes to Campus</span> yang mengkoordinasi acara dan memberikan materi Figma basic kepada <span class="text-primary font-bold">80 Peserta</span> SMA & SMK`,
  },
  {
    icon: "fa-users",
    description: `Koordinator Sie Acara <span class="text-primary font-semibold">Mobile UI/UX Competition 2024</span> yang sukses menghadirkan <span class="text-primary font-bold">50 Tim</span> dari Universitas dan Sekolah di luar Kota Semarang`,
  },
];
</script>
