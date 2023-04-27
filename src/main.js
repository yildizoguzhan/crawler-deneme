import { createApp } from "vue";
import App from "./App.vue";
import YartuUIKit from "@yartu/ui-kit";
import router from "./router";
import { ref } from "vue";
import "../src/assets/css/input.css";
import "../src/assets/yartu-icons/yartu-icons.css";
import InstantSearch from "vue-instantsearch/vue3/es";
import algoliasearch from "algoliasearch";
import Vue from "vue";

createApp(App).use(router).use(YartuUIKit).use(InstantSearch).mount("#app");
