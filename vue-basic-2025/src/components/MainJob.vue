<script setup>
import { onMounted, reactive } from "vue";
import JobListing from "./JobListing.vue";
import { defineProps } from "vue";

defineProps({
  limit: {
    type: Number,
    default: 0,
  },
  viewAllCards: {
    type: Boolean,
    default: false,
  },
});

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
  <section class="bg-blue-50 px-4 py-10">
    <div>
      <h2 class="text-4xl font-semibold text-center text-gray-900 pb-5">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>

    <section v-if="viewAllCards" class="flex justify-center pt-5">
      <RouterLink
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        to="/jobs"
      >
        View All Jobs
      </RouterLink>
    </section>
  </section>
</template>
