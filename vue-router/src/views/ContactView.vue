<script setup>
import { useRoute } from "vue-router";
import cars from "../data/cars.json";
import NotFoundView from "./NotFoundView.vue";

const route = useRoute();
const car = cars.find((c) => c.id === parseInt(route.params.id));
</script>
<template>
  <div v-if="car">
    <h1>This will be the contact file</h1>
    <p>{{ car.contact.dealer }}</p>
    <p>{{ car.contact.number }}</p>
  </div>
  <div if-else>
    <NotFoundView />
  </div>
</template>
