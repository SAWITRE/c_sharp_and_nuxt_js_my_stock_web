export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      // หากไม่มีการตั้งค่าใน Vercel ให้แสดง Error หรือใช้ URL หลัก
      apiBase: process.env.API_BASE
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
});