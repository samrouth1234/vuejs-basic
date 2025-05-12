<script setup>
import { computed, ref } from "vue";
import JobData from "@/lib/jobs.json";
import JobListing from "./JobListing.vue";
import { defineProps } from "vue";

const jobs = ref(JobData.jobs);

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

</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div>
      <h2 class="text-4xl font-semibold text-center text-gray-900 pb-5">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <JobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
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
