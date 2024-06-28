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
    <div v-if="meals.length > 0">
      <!-- this is not getting read, i dont know why -->
      <div v-for="meal of meals" :key="meal.idMeal">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="h-full w-full"
          />
        </router-link>
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
import { computed, onMounted, ref } from "vue";

import store from "../store";
import { useRoute } from "vue-router";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

// adding the functionality by routes
const route = useRoute();

// will create the function that will search the meals
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

// this function will be called, when the route is being mounted
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
