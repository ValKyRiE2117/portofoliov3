export const useTheme = () => {
  const primaryColor = useState("primaryColor", () => "cyan");
  const isDark = useState("isDark", () => true);

  const colors = {
    red: "#ef4444",
    orange: "#f97316",
    amber: "#f59e0b",
    yellow: "#eab308",
    lime: "#84cc16",
    green: "#22c55e",
    emerald: "#10b981",
    teal: "#14b8a6",
    cyan: "#06b6d4",
    sky: "#0ea5e9",
    blue: "#3b82f6",
    indigo: "#6366f1",
    violet: "#8b5cf6",
    purple: "#a855f7",
    fuchsia: "#d946ef",
    pink: "#ec4899",
    rose: "#f43f5e",
  };

  // Helper to get lighter version of color
  const getLighterColor = (hex: string) => {
    // Simple brightening - convert to RGB and increase values
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const newR = Math.min(255, r + 60);
    const newG = Math.min(255, g + 60);
    const newB = Math.min(255, b + 60);

    return `#${newR.toString(16).padStart(2, "0")}${newG
      .toString(16)
      .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
  };

  const setColor = (color: string) => {
    primaryColor.value = color;
    updateCSSVariables();
  };

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateCSSVariables();
  };

  const updateCSSVariables = () => {
    if (process.client) {
      const root = document.documentElement;
      const colorHex =
        colors[primaryColor.value as keyof typeof colors] || colors.cyan;

      // Update primary color
      root.style.setProperty("--color-primary", colorHex);
      root.style.setProperty(
        "--color-primary-light",
        getLighterColor(colorHex)
      );
    }
  };

  // Initialize on mount
  if (process.client) {
    updateCSSVariables();
  }

  return {
    primaryColor,
    isDark,
    setColor,
    toggleTheme,
  };
};
