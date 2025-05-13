<script setup>
import axios from "axios";
import { onMounted, reactive, defineProps } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const route = useRoute();
const router = useRouter();
const jobId = route.params.id;

const state = reactive({
  isLoading: true,
  jobs: [],
  error: false,
});

// Log the id to debug
// console.log("Received id:", props.id);
// using async/await wiht fetch
// const deletedJob = async () => {
//   try {
//     const deletdJob = await fetch(`http://localhost:3000/jobs/${jobId}`, {
//       method: "DELETE",
//     });
//     if (deletdJob.ok) {
//       toast.success("Job deleted successfully");
//       router.push("/jobs");
//     } else {
//       toast.error("Failed to delete job");
//     }
//   } catch (error) {
//     console.error("Error deleting job", error);
//     toast.error("Job Not Deleted");
//   }
// };

const deletedJob = async () => {
  try {
    const deletedJob = await axios.delete(
      `http://localhost:3000/jobs/${jobId}`
    );
    if (!deletedJob) {
      toast.error("Failed to delete job");
      return;
    }
    toast.success("Job deleted successfully");
    router.push("/jobs");
  } catch (error) {
    console.error("Error deleting job", error);
    toast.error("Job Not Deleted");
  }
};

// get the job by id using async/await with fetch
// onMounted(async () => {
//   if (!jobId) {
//     state.error = "No job ID provided";
//     state.isLoading = false;
//     return;
//   }

//   try {
//     const response = await fetch(`http://localhost:3000/jobs/${jobId}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     state.jobs = await response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     state.error = error.message;
//   } finally {
//     state.isLoading = false;
//   }
// });

onMounted(async () => {
  if (!jobId) {
    state.error = "No job ID provided";
    state.isLoading = false;
    return;
  }
  try {
    const response = await axios.get(`http://localhost:3000/jobs/${jobId}`);
    if (response.status === 200) {
      state.jobs = response.data;
    } else {
      toast.error("Failed to fetch job data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
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
        class="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6"
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
            <p class="mb-4 text-justify">{{ state.jobs.description }}</p>
            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ state.jobs.salary }}/ Year</p>
          </section>
        </section>

        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>
            <h2 class="text-2xl">{{ state.jobs.company[0].name }}</h2>
            <p class="my-2 text-justify">
              {{ state.jobs.company[0].description }}
            </p>
            <hr class="my-4" />
            <h3 class="text-xl">Contact Email:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ state.jobs.company[0].contactEmail }}
            </p>
            <h3 class="text-xl">Contact Phone:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ state.jobs.company[0].contactPhone }}
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.jobs.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Edit Job
            </RouterLink>
            <button
              @click="deletedJob"
              type="button"
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
