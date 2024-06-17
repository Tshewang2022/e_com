<template>
  <div class="flex justify-center gap-4 mt-2">
    <router-link
      :to="{ name: 'byLetters', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>

  <pre>{{ meals }}</pre>
  <div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

// will loop over this one and display on the page
const letters = "qwehroweoruowuebfbkhf".split("");
const meals = computed(() => store.state.meals);
const ingredients = ref([""]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
<!--  -->
