<script setup>
import Card from "./Card.vue";
</script>

<template>
  <div class="grid md:grid-cols-2 grid-cols-1">
    <Card bg="bg-gray-200" textColor="text-black">
      <div>
        <h2 class="text-5xl font-semibold">For Developer</h2>
        <p class="py-3">Browse our Vue jobs and start your career today</p>
        <RouterLink
          to="/jobs"
          class="bg-black text-white py-2 px-3 rounded hover:bg-gray-700"
          type="button"
        >
          Browse Jobs
        </RouterLink>
      </div>
    </Card>

    <Card bg="bg-green-100" textColor="text-black">
      <div>
        <h2 class="text-5xl font-semibold">For Employer</h2>
        <p class="py-3">
          List your job and find the perfect developer for the role
        </p>
        <RouterLink
          to="/jobs/add"
          class="bg-green-400 text-white py-2 px-3 rounded hover:bg-green-500"
          type="button"
        >
          Add Jobs
        </RouterLink>
      </div>
    </Card>
  </div>
</template>
