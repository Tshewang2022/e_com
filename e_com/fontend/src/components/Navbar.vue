<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-center">
    <router-link
      :to="{ name: 'Home' }"
      class="inline-flex items-center h-full px-5"
    >
      Home
    </router-link>

    <!-- creating the navigation -->
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-200"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-200"
        >Meals By letter</router-link
      >
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-200"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>

<script></script>
