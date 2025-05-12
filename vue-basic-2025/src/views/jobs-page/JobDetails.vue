<script setup>
import { onMounted, reactive, defineProps } from "vue";
import { RouterLink } from "vue-router";

const state = reactive({
  isLoading: true,
  error: null,
});

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

// Log the id to debug
// console.log("Received id:", props.id);

onMounted(async () => {
  if (!props.id) {
    state.error = "No job ID provided";
    state.isLoading = false;
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/jobs/${props.id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    state.jobs = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    state.error = error.message;
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-green-50 min-h-screen">
    <div class="container m-auto py-10 px-6">
      <div v-if="state.isLoading" class="text-center">Loading...</div>
      <div v-else-if="state.error" class="text-center text-red-500">
        {{ state.error }}
      </div>
      <div
        v-else-if="state.jobs"
        class="grid grid-cols-1 md:grid-cols-[80%_20%] w-full gap-6"
      >
        <section>
          <section
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">{{ state.jobs.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.jobs.title }}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i class="pi pi-map-marker text-xl text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.jobs.location }}</p>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-md mt-5">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Job Description
            </h3>
            <p class="mb-4">{{ state.jobs.description }}</p>
            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ state.jobs.salary }}/ Year</p>
          </section>
        </section>

        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>
            <h2 class="text-2xl">{{ state.jobs.company.name }}</h2>
            <p class="my-2 text-justify">
              {{ state.jobs.company.description }}
            </p>
            <hr class="my-4" />
            <h3 class="text-xl">Contact Email:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ state.jobs.company.contactEmail }}
            </p>
            <h3 class="text-xl">Contact Phone:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ state.jobs.company.contactPhone }}
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/edit-job/${props.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Edit Job
            </RouterLink>
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
      <div v-else class="text-center text-red-500">Error loading job data</div>
    </div>
  </section>
</template>
