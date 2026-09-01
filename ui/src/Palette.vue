<script setup lang="ts">
// Компоненты PrimeVue объявлены ЯВНО: расширение не полагается на глобальные
// регистрации хоста — его фронтенд знает только window.AT.
import Toast from "primevue/toast";
import FamilyPaletteView from "@/view/Families/FamilyPaletteView.vue";
</script>

<template>
  <FamilyPaletteView />
  <Toast position="top-right" />
</template>
