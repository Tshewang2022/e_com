<script setup>
import { ref } from "vue";

const add = () => {};
</script>
<template>
  <!-- header will contain the seach_bar and the addition button -->
  <header>
    <div class="flex justify-between container">
      <input
        type="text"
        name="search"
        class="border-[2px] border-gray-400 rounded-full text-[24px] pl-[24px]"
        placeholder="Search"
      />
      <div
        class="py-[8px] bg-red-400 px-[16px] font-bold text-[20] rounded-md cursor-pointer"
      >
        Add +
      </div>
    </div>
  </header>
  <div class="flex justify-center">
    <div class="bg-green-400 h-[200px] w-[200px] p-[16px]">
      <p>This will be the note that needs to updated</p>
      <p>20/07/2024</p>
    </div>
  </div>
</template>
