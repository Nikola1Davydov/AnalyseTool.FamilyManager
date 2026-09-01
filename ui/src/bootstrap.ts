import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import Toast from "primevue/toast";

import "primeicons/primeicons.css";
import "./style.css";

import type { Component } from "vue";

/** Общая настройка для обеих точек входа: окна менеджера и док-палитры. */
export function mount(root: Component) {
  createApp(root)
  .use(createPinia())
  .use(PrimeVue, { theme: { preset: Aura, options: { darkModeSelector: ".dark" } } })
  .use(ToastService)
  .use(ConfirmationService)
  .component("Toast", Toast)
  .mount("#app");
}
