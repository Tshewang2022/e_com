<script setup>
import {defineProps} from 'vue';

// useRouter is used to mutate the routes
// useRoute is to call the routes
import {useRouter} from 'vue-router';

// lets see where it has been used
const router = useRouter();
// console.log(router);
const navigateToQuiz = ()=>{
  router.push(`/quiz/${quiz.id}`)
}
const {quiz} = defineProps(['quiz']);
// console.log(quiz); console is playing very important role in the web development, all most 90% error handling can be done using it

</script>
<template>
    <!-- how are we going to pass the data from the parent component to the child component -->
    <div @click="navigateToQuiz">
        <img :src="quiz.img" alt="" />
        <div>
          <h2>{{ quiz.name }}</h2>       
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div>
</template>
