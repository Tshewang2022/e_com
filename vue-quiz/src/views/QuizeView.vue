<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const currentQuestionIndex = ref(0);
const quiz = quizes.find((q) => q.id == quizId);
// const questionStatus = ref(
//   `${currentQuestionIndex.value}/${quiz.questions.length}`
// );

// this will update the question status
// watch(
//   () => currentQuestionIndex.value,
//   () => {
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
//   }
// ); we can write the better code using the computed()
const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quiz.questions.length}`;
});

const barPercentage = computed(() => {
  `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`;
});
</script>
<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">Click me</button>
  </div>
</template>
