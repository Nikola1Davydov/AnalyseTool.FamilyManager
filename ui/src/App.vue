<script setup lang="ts">
// PrimeVue components are declared EXPLICITLY: this extension relies on no global
// registrations from the host. Its frontend knows only window.AT.
import Toast from "primevue/toast";
import FamiliesView from "@/view/FamiliesView.vue";
</script>

<template>
  <FamiliesView />
  <Toast position="top-right" />
</template>
