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
          :is="contact.isEmail ? 'button' : 'a'"
          v-for="contact in contacts"
          :key="contact.title"
          :href="contact.isEmail ? undefined : contact.link"
          :target="contact.external ? '_blank' : undefined"
          @click="contact.isEmail ? copyEmail(contact.description) : null"
          class="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer"
        >
          <i :class="`${contact.icon} text-3xl text-primary mb-3`"></i>
          <h3 class="font-semibold mb-1">{{ contact.title }}</h3>
          <p class="text-gray-400 text-sm">{{ contact.description }}</p>
        </component>
      </div>
    </div>

    <!-- Toast Notification (LinkedIn style) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="showToast"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 rounded-lg shadow-2xl overflow-hidden max-w-md w-full mx-4"
      >
        <!-- Progress bar -->

        <div class="p-4">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-start gap-3 flex-1">
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-white text-base mb-1">
                  Email copied successfully!
                </h4>
                <p class="text-sm text-gray-400">
                  {{ copiedEmail }} has been copied to clipboard
                </p>
              </div>
            </div>
            <button
              @click="closeToast"
              class="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
            >
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>
        </div>
        <div class="h-1 bg-gray-700 relative overflow-hidden">
          <div
            class="h-full bg-primary/80 absolute left-0 top-0"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
const showToast = ref(false);
const copiedEmail = ref("");
const progress = ref(100);
let progressInterval: ReturnType<typeof setInterval> | null = null;

const contacts = [
  {
    icon: "fas fa-envelope",
    title: "Email",
    description: "aritzagk@gmail.com",
    link: "#",
    external: false,
    isEmail: true,
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

const closeToast = () => {
  showToast.value = false;
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  progress.value = 100;
};

const copyEmail = async (email: string) => {
  try {
    await navigator.clipboard.writeText(email);
    copiedEmail.value = email;
    showToast.value = true;
    progress.value = 100;

    // Animate progress bar
    const duration = 4000; // 4 seconds
    const intervalTime = 50; // Update every 50ms
    const decrement = (100 / duration) * intervalTime;

    if (progressInterval) {
      clearInterval(progressInterval);
    }

    progressInterval = setInterval(() => {
      progress.value -= decrement;
      if (progress.value <= 0) {
        closeToast();
      }
    }, intervalTime);
  } catch (err) {
    console.error("Failed to copy email:", err);
  }
};

// Cleanup on unmount
onUnmounted(() => {
  if (progressInterval) {
    clearInterval(progressInterval);
  }
});
</script>
