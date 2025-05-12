<script setup>
import { RouterLink, useRoute } from "vue-router";

const isActive = (routeRath) => {
  const route = useRoute();
  return route.path === routeRath;
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <section class="mx-auto px-4">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <!-- <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" /> -->
            <p class="text-white text-2xl font-bold">Jobs</p>
          </RouterLink>
        </div>
        <div class="md:ml-auto">
          <div class="flex gap-3">
            <RouterLink
              to="/"
              :class="[
                isActive('/')
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 bg-green-700',
                'hover:bg-gray-800',
                ' hover:text-white ',
                'px-3 ',
                'py-2 ',
                'rounded-md ',
                'text-sm ',
                'font-medium',
              ]"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/jobs"
              :class="[
                isActive('/jobs')
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 bg-green-700',
                'hover:bg-gray-800',
                ' hover:text-white ',
                'px-3 ',
                'py-2 ',
                'rounded-md ',
                'text-sm ',
                'font-medium',
              ]"
            >
              Jobs
            </RouterLink>
            <RouterLink
              to="/jobs/add"
              :class="[
                isActive('/jobs/add')
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 bg-green-700',
                'hover:bg-gray-800',
                ' hover:text-white ',
                'px-3 ',
                'py-2 ',
                'rounded-md ',
                'text-sm ',
                'font-medium',
              ]"
            >
              Add Job
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </nav>
</template>
