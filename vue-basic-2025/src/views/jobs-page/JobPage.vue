<script setup>
import { ref } from "vue";

import JobData from "@/lib/jobs.json";
import JobListing from "@/components/JobListing.vue";

const jobs = ref(JobData.jobs);
</script>

<template>
  <section class="bg-blue-50 px-4 py-10 min-h-screen">
    <div>
      <h2 class="text-4xl font-semibold text-center text-gray-900 pb-5">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <JobListing v-for="job in jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
</template>
