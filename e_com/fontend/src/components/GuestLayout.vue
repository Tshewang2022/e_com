<template>
    <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
                class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
                {{ title }}
            </h2>
        </div>
        <!-- prevent is for testing only where it will prevent the page from reloading -->
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
const { title } = defineProps({
    title: String,
});

// for the login function
// function login() {
//     console.log("this will the the form login");
// }
// emit function makes the communication of data between the child and the parent components
// will allow it communicate between the login and guestlayout component
// const emit = defineEmits(["login"]);
</script>
<style></style>
