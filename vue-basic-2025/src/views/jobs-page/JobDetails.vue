<script setup></script>

<template>
  <section class="bg-green-50 min-h-screen">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-[80%_20%] w-full gap-6">
        <section>
          <section
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">Full Stack</div>
            <h1 class="text-3xl font-bold mb-4">Java Developer</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i class="pi pi-map-marker text-xl text-orange-700 mr-2"></i>
              <p class="text-orange-700">SDF</p>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-md mt-5">
            <h3 class="text-green-800 text-lg font-bold mb-6">  
              Job Description
            </h3>
            <p class="mb-4">DSFSD</p>
            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">SDF/ Year</p>
          </section>
        </section>

        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">SDFSE</h2>

            <p class="my-2">SGEWTE</p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">Emial</p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">Contact Phone</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</RouterLink
            >
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
