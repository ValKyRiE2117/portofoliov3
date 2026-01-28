<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-4 gradient-text">
        Hubungi Saya
      </h2>
      <p class="text-gray-400 text-center mb-12">
        Mari berkolaborasi dan wujudkan proyek teknologi yang luar biasa
        bersama!
      </p>

      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <component
          v-for="contact in contacts"
          :key="contact.title"
          :is="contact.external ? 'a' : 'button'"
          :href="contact.link"
          target="_blank"
          @click="contact.description"
          class="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer"
        >
          <i :class="`${contact.icon} text-3xl text-primary mb-3`"></i>
          <h3 class="font-semibold mb-1">{{ contact.title }}</h3>
          <p class="text-gray-400 text-sm">{{ contact.description }}</p>
        </component>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contacts = [
  {
    icon: "fas fa-envelope",
    title: "Email",
    description: "aritzagk@gmail.com",
    link: "#",
    external: true,
    isEmail: false,
  },
  {
    icon: "fab fa-whatsapp",
    title: "No HP",
    description: "089501868361",
    link: "https://wa.me/6289501868361",
    external: true,
    isEmail: false,
  },
  {
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    description: "Terhubung dengan saya",
    link: "https://www.linkedin.com/in/aritza-ganendra-kusuma-3b0b92225",
    external: true,
    isEmail: false,
  },
  {
    icon: "fab fa-github",
    title: "GitHub",
    description: "Lihat kode saya",
    link: "https://github.com/ValKyRiE2117",
    external: true,
    isEmail: false,
  },
  {
    icon: "fab fa-instagram",
    title: "Instagram",
    description: "Ikuti saya",
    link: "https://www.instagram.com/_ritzaa_/",
    external: true,
    isEmail: false,
  },
];
</script>
