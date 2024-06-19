<template>
  <div class="flex p-8 justify-center items-center">
    <input
      type="text"
      name=""
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
      id=""
    />
  </div>
</template>
<script>
import axiosClient from "../axiosClient";

const keyword = ref("");

// will create the function that will search the meals
function searchMeals() {
  axiosClient.get(`search.php?s=${keyword.value}`);
}
</script>
