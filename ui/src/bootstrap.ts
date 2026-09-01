// Точка входа фронтенда расширения.
//
// НИЧЕГО не берётся у хоста, кроме window.AT. Расширение — отдельное приложение в отдельном
// WebView: свои зависимости, своя тема, свой набор компонентов. Компоненты PrimeVue объявлены
// ЯВНО в тех вьюхах, где используются, а не зарегистрированы глобально — вьюха, которую можно
// прочитать и понять целиком, не ломается от того, что кто-то поменял общий список.
//
// Ровно на этом обожглись при первом запуске: настройка была скопирована из главного
// приложения, и половина интерфейса не нарисовалась, потому что компоненты приходили оттуда.
// Незарегистрированный компонент не падает — он молча ничего не рисует.
import "./style.css";

import { createApp } from "vue";
import type { Component } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";
import ToastService from "primevue/toastservice";

// Тема — СОБСТВЕННЫЙ выбор расширения. Синий акцент выбран потому, что он уместен рядом с
// продуктом, а не потому, что где-то прочитан: связи с настройками хоста здесь нет.
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
        // Своя страница — свой документ. Класс тёмной темы ставит эта страница и никто больше,
        // поэтому и селектор здесь собственный, а не тот, что у хоста.
        options: { darkModeSelector: ".family-manager-dark" },
      },
    })
    .use(ToastService)
    .mount("#app");
}
