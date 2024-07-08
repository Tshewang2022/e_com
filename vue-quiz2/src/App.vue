<script setup>
import { ref } from "vue";

// this is just the raw data
import q from "./data/quizes.json";

// we need to store inside something called state, where we need to store so that we can shared inside it
const quizes = ref(q);

const showQuestion = ref(true);
const toggleVisibility = () => {
  showQuestion.value = !showQuestion.value;
};
</script>
<template>
  <div class="container relative">
    <div v-show="showQuestion">
      <div class="question-container">
        <h1>2+2+3840</h1>
      </div>
      <div class="answer-container">
        <div class="flex justify-start items-center gap-[32px]">
          <p>A</p>
          <div>
            <p>16</p>
          </div>
        </div>
        <div class="flex justify-start items-center gap-[32px]">
          <p>B</p>
          <div>
            <p>20</p>
          </div>
        </div>
        <div class="flex justify-start items-center gap-[32px]">
          <p>C</p>
          <div>
            <p>24</p>
          </div>
        </div>
        <div class="flex justify-start items-center gap-[32px]">
          <p>D</p>
          <div>
            <p>30</p>
          </div>
        </div>
      </div>
    </div>
    <header class="flex justify-start gap-[32px] mt-[30px] mb-[10px]">
      <h1>Quizes</h1>
      <input
        type="text"
        placeholder="Search..."
        class="border-2 border-gray-400 pl-[10px]"
      />
    </header>

    <!-- questions card -->
    <div
      class="cards flex justify-center items-center gap-[32px] max-w-[1050px] sm:w-flex-col"
    >
      <div v-for="quiz in quizes" :key="quiz.id">
        <img :src="quiz.img" alt="math" />
        <div>
          <h2>{{ quiz.name }}</h2>
          <p>3 Questions</p>
        </div>
      </div>
    </div>
  </div>
</template>
