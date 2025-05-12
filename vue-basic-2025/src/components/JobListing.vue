<script setup>
import { computed, defineProps, ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const showDescription = ref(false);

const truncateDescription = computed(() => {
  const description = props.job.description;
  if (!showDescription.value) {
    return description.substring(0, 100) + "...";
  }
  return description;
});

const toggleDescription = () => {
  showDescription.value = !showDescription.value;
};

</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl text-gray-800 font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div class="text-gray-800 mb-2">
          {{ truncateDescription }}
        </div>
        <button
          @click="toggleDescription"
          class="text-green-500 hover:text-green-600 mb-5"
        >
          {{ showDescription ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>
      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between pt-3">
        <p class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ job.location }}
        </p>
        <RouterLink
          :to="'/Jobs/' + job.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
