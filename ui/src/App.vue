<script setup lang="ts">
// Компоненты PrimeVue объявлены ЯВНО: расширение не полагается на глобальные
// регистрации хоста — его фронтенд знает только window.AT.
import Toast from "primevue/toast";
import FamiliesView from "@/view/FamiliesView.vue";
</script>

<template>
  <FamiliesView />
  <Toast position="top-right" />
</template>
