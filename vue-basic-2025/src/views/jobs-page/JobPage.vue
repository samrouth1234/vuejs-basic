<script setup>
import { onMounted, reactive } from "vue";

import JobListing from "@/components/JobListing.vue";

const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const respone = await fetch("http://localhost:3000/jobs");
    if (!respone.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    state.jobs = await respone.json();
  } catch (erorr) {
    console.error("Error fetching data:", erorr);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10 min-h-screen">
    <div>
      <h2 class="text-4xl font-semibold text-center text-gray-900 pb-5">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <JobListing v-for="job in state.jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
</template>
