<script setup>
    import Question from '../components/Questions.vue'
    import {ref} from 'vue';
    import { useRoute } from 'vue-router';
    import quizes from '../data/quizes.json';
    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(q=>q.id ===quizId);
    const currentQuestion = ref(0);
</script>

<template>
    <div>
            <Question
              
                :question="quiz.questions[currentQuestion]"
               
            />
      
    </div>
</template>