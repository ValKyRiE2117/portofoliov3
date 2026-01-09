<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Theme Button -->
    <button
      @click="togglePanel"
      class="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white hover:scale-110 hover:cursor-pointer"
    >
      <i class="fa-solid fa-swatchbook text-xl p-3 bg-gray-800 rounded-lg"></i>
    </button>

    <!-- Theme Panel -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div
        v-show="isPanelOpen"
        class="absolute bottom-20 right-0 w-[280px] md:w-[420px] glass-card rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50"
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between p-4 border-b border-gray-700/50"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 rounded-lg bg-[var(--color-primary)/20] flex items-center justify-center"
            >
              <i class="fas fa-palette text-gray-200"></i>
            </div>
            <div>
              <h3 class="text-base font-semibold text-white">Theme Selector</h3>
            </div>
          </div>
        </div>

        <div class="max-h-[300px] overflow-y-auto custom-scrollbar">
          <!-- Primary Colors -->
          <div class="p-3">
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="color in primaryColors"
                :key="color.name"
                @click="setColor(color.value)"
                :class="[
                  'flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-200',
                  primaryColor === color.value
                    ? 'bg-gray-700/50 ring-2 ring-primary'
                    : 'hover:bg-gray-700/30',
                ]"
              >
                <div
                  class="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  :style="{ backgroundColor: color.hex }"
                ></div>
                <span class="text-xs text-white">{{ color.name }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { primaryColor, theme, radius, setColor, setTheme, setRadius } =
  useTheme();
const isPanelOpen = ref(false);

const primaryColors = [
  { name: "Red", value: "red", hex: "#ef4444" },
  { name: "Orange", value: "orange", hex: "#f97316" },
  { name: "Amber", value: "amber", hex: "#f59e0b" },
  { name: "Yellow", value: "yellow", hex: "#eab308" },
  { name: "Lime", value: "lime", hex: "#84cc16" },
  { name: "Green", value: "green", hex: "#22c55e" },
  { name: "Emerald", value: "emerald", hex: "#10b981" },
  { name: "Teal", value: "teal", hex: "#14b8a6" },
  { name: "Cyan", value: "cyan", hex: "#06b6d4" },
  { name: "Sky", value: "sky", hex: "#0ea5e9" },
  { name: "Blue", value: "blue", hex: "#3b82f6" },
  { name: "Indigo", value: "indigo", hex: "#6366f1" },
  { name: "Violet", value: "violet", hex: "#8b5cf6" },
  { name: "Purple", value: "purple", hex: "#a855f7" },
  { name: "Fuchsia", value: "fuchsia", hex: "#d946ef" },
  { name: "Pink", value: "pink", hex: "#ec4899" },
  { name: "Rose", value: "rose", hex: "#f43f5e" },
];

const togglePanel = () => {
  isPanelOpen.value = !isPanelOpen.value;
};

// Close panel when clicking outside
onMounted(() => {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".fixed.bottom-6.right-6")) {
      isPanelOpen.value = false;
    }
  });
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(107, 114, 128, 0.5);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(107, 114, 128, 0.7);
}
</style>
