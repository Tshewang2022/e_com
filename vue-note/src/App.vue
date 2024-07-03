<script setup>
import { ref } from "vue";
// boolean value
const showModal = ref(false);

// this is for the error message
const errorMessages = ref("");

// this is the state where it will store the note in the form of an array
const notes = ref([]);

//state to store the newnote
const newNote = ref("");

// will start with the most import functionality
const addNote = () => {
  // if (newNote.value.length < 9) {
  //   return (errorMessages.value = "Note must be longer than 9 character");
  // }
  notes.value.push({
    id: Math.floor(Math.random() * 1000),
    text: newNote.value,
    date: new Date(),
  });
  showModal.value = false;
  newNote.value = "";
  errorMessages.value = "";
};
</script>

<template>
  <!-- card overlay -->
  <main v-if="showModal" class="">
    <div
      class="absolute flex justify-center items-center border-2 border-black z-10 w-[100%] h-[100%]"
    >
      <div
        class="w-[1050px] border-2 rounded-[10px] p-[30px] relative flex flex-col"
      >
        <textarea
          class="resize-none border-2 border-gray-600"
          name="note"
          id="notes"
          rows="10"
          v-model="newNote"
        ></textarea>
        <p v-if="errorMessages">{{ errorMessages }}</p>
        <button
          @click="addNote"
          class="pt-[10px] pb-[20px] text-[20px] w-[100%] cursor-pointer mt-[15px] bg-violet-300"
        >
          Add Note
        </button>
        <button
          @click="showModal = false"
          class="pt-[10px] pb-[20px] text-[20px] w-[100%] cursor-pointer mt-[7px] bg-red-300"
        >
          Close
        </button>
      </div>
    </div>
  </main>
  <div class="container">
    <header class="flex justify-between items-center container">
      <h1 class="font-bold mb-[25px] text-[40px]">Notes</h1>
      <button
        @click="showModal = true"
        class="p-[10px] w-[50px] h-[50px] cursor-pointer rounded-full bg-black text-white text-[22px]"
      >
        +
      </button>
    </header>
    <div id="card-container flex ">
      <div
        v-for="note in notes"
        :key="note.id"
        class="w-[250px] rounded-md p-[10px] h-[250px] bg-gray-400 rounder-[15px] mr-[20px] ml-[20px]"
      >
        <p>{{ note.id }}</p>
        <p class="text-black">
          {{ note.text }}
        </p>
        <p class="text-[12px] text-black font-bold">{{ note.date }}</p>
      </div>
    </div>
  </div>
</template>
