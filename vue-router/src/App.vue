<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";

// ref will update the state
const randomState = ref("");
</script>
<template>
  <div>
    <Nav />
    <RouterView />
  </div>
</template>
