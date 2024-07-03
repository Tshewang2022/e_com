<script setup></script>

<template>
  <!-- card overlay -->
  <main class="">
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
        ></textarea>
        <p>errorMessage</p>
        <button
          class="pt-[10px] pb-[20px] text-[20px] w-[100%] cursor-pointer mt-[15px] bg-violet-300"
        >
          Add Note
        </button>
        <button
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
        class="p-[10px] w-[50px] h-[50px] cursor-pointer rounded-full bg-black text-white text-[22px]"
      >
        +
      </button>
    </header>
    <div id="card-container">
      <div
        class="w-[250px] rounded-md p-[10px] h-[250px] bg-gray-400 rounder-[15px] flex flex-col mr-[20px] ml-[20px] justify-evenly"
      >
        <p class="text-black">
          Welcome to my note. Today i did amazing job, well done. one day you
          will surely shine beyond bhutan
        </p>
        <p class="text-[12px] text-black font-bold">20/07/2024</p>
      </div>
    </div>
  </div>
</template>
