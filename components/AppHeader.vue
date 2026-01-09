<template>
  <nav class="fixed top-0 left-0 right-0 z-50 glass-card">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="text-xl font-bold text-primary lg:hidden"></div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 mx-auto">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="hover:text-primary transition text-sm"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Mobile Burger Button -->
        <button
          @click="toggleMenu"
          class="md:hidden relative w-6 h-6 focus:outline-none"
          :class="{ 'burger-open': isMenuOpen }"
        >
          <div
            class="absolute h-0.5 w-6 bg-white top-0 transition-all duration-300"
            :class="{ 'rotate-45 translate-y-2.5': isMenuOpen }"
          ></div>
          <div
            class="absolute h-0.5 w-6 bg-white top-2.5 transition-all duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          ></div>
          <div
            class="absolute h-0.5 w-6 bg-white top-5 transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-2.5': isMenuOpen }"
          ></div>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-show="isMenuOpen" class="md:hidden mt-4 pb-4">
          <div class="flex flex-col space-y-4 pt-4">
            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              @click="closeMenu"
              class="hover:text-primary transition text-sm"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const navItems = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#organization", label: "Aktivitas" },
  { href: "#certificates", label: "Sertifikat" },
  { href: "#contact", label: "Kontak" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
