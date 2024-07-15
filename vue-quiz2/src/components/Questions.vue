<script setup>
import { defineProps } from 'vue';
const {question} = defineProps(['question']);
</script>
<template>
    <div>
      <!-- questions containers -->
      <div class="question-container mt-[20px] ">
        <h1 class="text-[40px] mb-[20px]">
             {{ question.text }} 
        </h1>
      </div>

      <!-- answers containers -->
       <div class="option-container ">
        <div class="option flex mb-[20px] cursor-pointer ">
          <p class="option-label w-[60px] h-[60px] text-[30px] flex items-center justify-center">A</p>
          <div class="option-value bg-rgb(244, 239, 0) text-[30px] w-100% p-0">
            <p>NaCl</p>
          </div>
        </div>
       </div>
    </div>
</template>