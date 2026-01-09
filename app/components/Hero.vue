<template>
  <section
    class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-900/5 to-cyan-900/10"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"
    ></div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center">
        <div class="mb-8">
          <img
            src="/assets/my_pp_2.jpg"
            alt="Profile"
            class="w-48 rounded-xl mx-auto mb-6 border-2"
            style="border-color: var(--color-primary)"
          />
        </div>
        <h1 class="text-2xl md:text-4xl font-extrabold mb-4">
          <span class="gradient-text">Aritza Ganendra Kusuma, A.Md.Kom</span>
        </h1>
        <p class="text-gray-200 text-lg mb-2 font-semibold">
          Web Developer & UI/UX Designer
        </p>
        <p class="text-gray-400 max-w-3xl mx-auto mb-8 text-sm md:text-base">
          Lulusan Teknik Informatika dengan keahlian dalam pengembangan website
          menggunakan framework modern seperti Laravel dan Next.js. Fokus pada
          menciptakan solusi digital yang user-friendly dan estetis.
        </p>
        <div class="flex justify-center space-x-4">
          <a
            href="/assets/CV-Main.pdf"
            target="_blank"
            class="px-4 py-2 md:px-6 md:py-3 bg-(--color-primary) text-gray-900 rounded-lg font-semibold hover:bg-(--color-primary)/80 transition text-sm md:text-base"
          >
            <i class="fas fa-download mr-2"></i>Download CV
          </a>
          <a
            href="#contact"
            class="px-4 py-2 md:px-6 md:py-3 border border-(--color-primary) text-(--color-primary) rounded-lg font-semibold hover:bg-(--color-primary)/10 transition text-sm md:text-base"
          >
            Hubungi Saya
          </a>
        </div>
        <div class="mt-12 text-xs text-gray-400">
          Put me to <span class="text-(--color-primary) font-extrabold">work</span> ✨
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-950"
    ></div>
  </section>
</template>

<script setup lang="ts"></script>
