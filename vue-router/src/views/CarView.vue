<script setup>
import { useRoute, RouterView, useRouter } from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const router = useRouter();
const carId = parseInt(route.params.id);
const car = cars.find((c) => c.id === carId);

//console.log(route);
</script>
<template>
  <div v-if="car">
    <h1>Car View</h1>
    <p>{{ car.name }}</p>
    <p>{{ car.year }}</p>
    <p>{{ car.price }}</p>
    <button @click="router.push(`/cars/${carId}/contact`)">
      Click For contact
    </button>
    <RouterView />
  </div>
  <div v-else>
    <!-- this is the error that we are going to get if the given car object is undefined -->
    <h1>Car not found</h1>
  </div>
</template>
