<template>
  <div>
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
  </div>
  <pre>{{ meal }}</pre>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    debugger;
    meal.value = data.meals[0] || {};
  });
});
</script>
