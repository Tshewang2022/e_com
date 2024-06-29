<template>
  <div>
    <pre>{{ meal }}</pre>
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div>
      <div>category: {{ meal.strCategory }}</div>
    </div>
    <div>
      <div>Area: {{ strArea }}</div>
    </div>
    <div>
      <div>Tags :{{ strTags }}</div>
    </div>
  </div>
  <div>
    <h1>Ingredients</h1>
    <ul>
      <template v-for="(ei, ind) of new Array(20)"> </template>
      <li v-if="meal[`strIngredient${ind + 1}`]">
        {{ ind + 1 }}.
        {{ meal[`strIngredient${ind + 1}`] }}
      </li>
    </ul>
  </div>
  <div>
    <h2>Measures</h2>
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
