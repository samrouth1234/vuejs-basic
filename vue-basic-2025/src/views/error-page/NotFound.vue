<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <div class="bg-blue-50 px-4 py-10 min-h-screen">
      <div class="text-center">
        <h2 class="text-4xl font-semibold text-gray-900 pb-5">
          404 - Page Not Found
        </h2>
        <p class="text-lg text-gray-700">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <section class="flex justify-center pt-5">
        <RouterLink
          class="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-400 hover:text-gray-900"
          to="/"
        >
          Go to Home
        </RouterLink>
      </section>
    </div>
  </section>
</template>
