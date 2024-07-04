<script setup>
import { ref } from "vue";
const showQuestion = ref(false);
</script>
<template>
  <div v-if="showQuestion" class="container relative">
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
    <header class="flex justify-start gap-[32px] mb-8">
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
      <div @click="showQuestion = true">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-cQjiF7rHZpXl5Nps_LCEmp2Z8k_gQHVgQ&s"
          alt="math"
        />
        <h2>Math</h2>
        <p>3 Questions</p>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-cQjiF7rHZpXl5Nps_LCEmp2Z8k_gQHVgQ&s"
          alt="math"
        />
        <h2>Math</h2>
        <p>3 Questions</p>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-cQjiF7rHZpXl5Nps_LCEmp2Z8k_gQHVgQ&s"
          alt="math"
        />
        <h2>Math</h2>
        <p>3 Questions</p>
      </div>
    </div>
  </div>
</template>
