<script setup>
import { ref, watch } from "vue";
// this is just the raw data
import q from "./data/quizes.json";
import Card from './components/Card.vue';

// we need to store inside something called state, where we need to store so that we can shared inside it
const quizes = ref(q);

// anything that we need to deal with the textarea and input, we need two way binding
const search = ref("");

watch(search, ()=>{

quizes.value = q.filter((quiz)=>{return quiz.name.toLowerCase().includes(search.value.toLowerCase())})
  // very excellent way of handeling the errros
  // console.log('hello from  watch');
})


</script>
<template>
  <div class="container relative"> 
    <header class="flex justify-start gap-[32px] mt-[30px] mb-[10px]">
      <h1>Quizes</h1>
      <input v-model.trim="search"
        type="text"
        placeholder="Search..."
        class="border-2 border-gray-400 pl-[10px]"
      />
    </header>

    <!-- questions card -->
    <div
      class="cards flex justify-center items-center gap-[32px] max-w-[1050px] sm:w-flex-col"
    >
    <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
      <!-- <div v-for="quiz in quizes" :key="quiz.id">
        <img :src="quiz.img" alt="math" />
        <div>
          <h2>{{ quiz.name }}</h2>
          <p>3 Questions</p>
        </div>
      </div> -->
    </div>
  </div>
</template>
