<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Welcome to Vue Jobs',
  },
  subtitle: {
    type: String,
    default: 'Find your dream job in the best companies',
  },
});

</script>
<template>
  <div class="bg-gray-100 flex justify-center items-center h-96">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-center text-gray-900">{{ title }}</h1>
      <p class="mt-4 text-lg text-center text-gray-600 py-2">{{ subtitle }}</p>
    </div>
  </div>
</template>