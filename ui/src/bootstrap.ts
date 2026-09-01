// Общая настройка для обеих точек входа расширения — окна менеджера и док-палитры.
//
// Зеркалит main.js основного приложения намеренно и подробно: перенесённые вьюхи
// рассчитывают на ГЛОБАЛЬНО зарегистрированные компоненты PrimeVue и на директиву
// v-tooltip. Незарегистрированный компонент не падает, он просто не рисуется — из-за
// этого интерфейс выглядел наполовину обрезанным. Добавляя сюда вьюху, сверяйтесь с
// main.js: расхождение проявляется не ошибкой, а пустым местом.
import "./style.css";

import { createApp } from "vue";
import type { Component } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";

import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Button from "primevue/button";
import Select from "primevue/select";
import TreeTable from "primevue/treetable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import ProgressBar from "primevue/progressbar";
import Slider from "primevue/slider";
import SelectButton from "primevue/selectbutton";
import Drawer from "primevue/drawer";
import Panel from "primevue/panel";
import ContextMenu from "primevue/contextmenu";
import Tag from "primevue/tag";
import Checkbox from "primevue/checkbox";
import AutoComplete from "primevue/autocomplete";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";

// Тот же preset, что у платформы: синий primary. Без него акценты уезжают в цвет Aura
// по умолчанию, и расширение перестаёт выглядеть частью продукта.
const stylePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{blue.50}", 100: "{blue.100}", 200: "{blue.200}", 300: "{blue.300}",
      400: "{blue.400}", 500: "{blue.500}", 600: "{blue.600}", 700: "{blue.700}",
      800: "{blue.800}", 900: "{blue.900}", 950: "{blue.950}",
    },
  },
});

export function mount(root: Component) {
  const app = createApp(root);

  app.use(ToastService);
  app.use(PrimeVue, {
    theme: {
      preset: stylePreset,
      // Тот же селектор, что у платформы. Своё имя класса означало бы, что тёмная тема
      // включается не тогда, когда у всех остальных.
      options: { darkModeSelector: ".my-app-dark" },
    },
  });

  app.component("InputText", InputText);
  app.component("Select", Select);
  app.component("Button", Button);
  app.component("IconField", IconField);
  app.component("InputIcon", InputIcon);
  app.component("TreeTable", TreeTable);
  app.component("Column", Column);
  app.component("ColumnGroup", ColumnGroup);
  app.component("SelectButton", SelectButton);
  app.component("Row", Row);
  app.component("ProgressBar", ProgressBar);
  app.component("Slider", Slider);
  app.component("Drawer", Drawer);
  app.component("Panel", Panel);
  app.component("ContextMenu", ContextMenu);
  app.component("Tag", Tag);
  app.component("Checkbox", Checkbox);
  app.component("AutoComplete", AutoComplete);
  app.component("DataTable", DataTable);
  app.component("Dialog", Dialog);
  app.component("Toast", Toast);
  app.directive("tooltip", Tooltip);

  app.use(createPinia());
  app.mount("#app");
}
