<template>
  <div class="flex p-8 justify-center items-center">
    <!-- when the change events happened inside -->
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div>
    <pre>{{ meals }}</pre>
  </div>
  <div class="">
    <!-- <div v-for="meal of meals" :key="meal.idMeal">
      <img :src="meal.strMealThumb" :alt="strMeal" class="h-full w-full" />
      <h3>{{ meal.strMeal }}</h3>
      <div>
        <a :href="meal.strYoutube" target="_bank">Youtube</a>
        <router-link to="/" target="_bank">View</router-link>
      </div>
    </div> -->
    <div>
      <div v-for="meal of meals" :key="meal.idMeal">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="h-full w-full"
        />
        <h3>{{ meal.strMeal }}</h3>
        <p>{{ meal.strInstructions }}</p>
        <div>
          <a :href="meal.strYoutube" target="_blank">Youtube</a>
          <!-- <router-link :to="{ name: 'MealDetail', params: { id: meal.idMeal }}" target="_blank">View</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";

import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

// will create the function that will search the meals
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
