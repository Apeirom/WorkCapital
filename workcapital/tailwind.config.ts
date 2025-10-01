import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563EB',
        'brand-gold': '#FBBF24',
        'brand-gray': {
          light: '#F3F4F6',
          medium: '#6B7280',
          dark: '#1F2937',
        }
      },
    },
  },
  plugins: [],
};
export default config;

