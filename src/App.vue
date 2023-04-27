<template>
  <myappbar></myappbar>
  <main-input></main-input>
  <router-view></router-view>
  <myFooter></myFooter>
</template>

<script setup>
import myappbar from "./components/my-appbar.vue";
import mainInput from "./components/main-input.vue";
import myFooter from "./components/my-footer.vue";
</script>
