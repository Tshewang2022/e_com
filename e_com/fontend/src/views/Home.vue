<template>
  <div class="flex p-8 justify-center">
    <input
      type="text"
      name=""
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      id=""
    />
  </div>
  <div class="flex gap-1">
    <router-link to="/" v-for="letter of letters">
      {{ letter }}
    </router-link>
  </div>

  <pre>{{ meals }}</pre>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

// will loop over this one and display on the page
const letters = "qwehroweoruowuebfbkhf";
const meals = computed(() => store.state.meals);
</script>
