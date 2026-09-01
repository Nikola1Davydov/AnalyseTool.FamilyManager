// Frontend entry point of the extension.
//
// NOTHING is taken from the host except window.AT. An extension is a separate application in a
// separate WebView: its own dependencies, its own theme, its own set of components. PrimeVue
// components are declared EXPLICITLY in the views that use them rather than registered globally —
// a view you can read and understand on its own does not break because someone edited a shared list.
//
// This is exactly what went wrong on the first run: the setup was copied from the main application,
// and half the interface did not render because the components came from there. An unregistered
// component does not throw; it silently renders nothing.
import "./style.css";

import { createApp } from "vue";
import type { Component } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";
import ToastService from "primevue/toastservice";

// The theme is this extension's OWN choice. Blue was picked because it sits well next to the
// product, not because it was read from anywhere: there is no link to the host's settings here.
const theme = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{blue.50}", 100: "{blue.100}", 200: "{blue.200}", 300: "{blue.300}",
      400: "{blue.400}", 500: "{blue.500}", 600: "{blue.600}", 700: "{blue.700}",
      800: "{blue.800}", 900: "{blue.900}", 950: "{blue.950}",
    },
  },
});

export function mount(root: Component) {
  createApp(root)
    .use(createPinia())
    .use(PrimeVue, {
      theme: {
        preset: theme,
        // Own page, own document. The dark-mode class is set by this page and nobody else, so the
        // selector is ours rather than the host's.
        options: { darkModeSelector: ".family-manager-dark" },
      },
    })
    .use(ToastService)
    .mount("#app");
}
