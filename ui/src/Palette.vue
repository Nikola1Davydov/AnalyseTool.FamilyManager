<script setup lang="ts">
// PrimeVue components are declared EXPLICITLY: this extension relies on no global
// registrations from the host. Its frontend knows only window.AT.
import Toast from "primevue/toast";
import FamilyPaletteView from "@/view/Families/FamilyPaletteView.vue";
</script>

<template>
  <FamilyPaletteView />
  <Toast position="top-right" />
</template>
