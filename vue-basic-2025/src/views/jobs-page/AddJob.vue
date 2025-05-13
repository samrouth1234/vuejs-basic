<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const route = useRoute();
const router = useRouter();

const Jobs = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
});


const handleSubmit = async () => {
  const newJob = {
    title: Jobs.title,
    type: Jobs.type,
    location: Jobs.location,
    description: Jobs.description,
    salary: Jobs.salary,
    company: {
      name: Jobs.company.name,
      description: Jobs.company.description,
      contactEmail: Jobs.company.contactEmail,
      contactPhone: Jobs.company.contactPhone,
    },
  };

  try {
    const response = await axios.post('/api/jobs', newJob);
    toast.success('Job Added Successfully');
    router.push(`/jobs/${response.data.id}`);
  } catch (error) {
    console.error('Error fetching job', error);
    toast.error('Job Was Not Added');
  }
};
</script>

<template>
    <section class="bg-green-50">
    <div class="container m-auto max-w-7xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>

          <section class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2"
              >Job Type</label
            >
            <select
              v-model="Jobs.type"
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </section>

          <section class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"
              >Job Listing Name</label
            >
            <input
              type="text"
              v-model="Jobs.title"
              id="title"
              name="title"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="e.g. Senior Software Engineer"
              required
            />
          </section>

          <section class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              v-model="Jobs.description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add job duties, expectations, requirements, etc."
            ></textarea>
          </section>

          <section class="mb-4">
            <label for="salary" class="block text-gray-700 font-bold mb-2"
              >Salary</label
            >
            <select
              id="salary"
              v-model="Jobs.salary"
              name="salary"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="Under $50K">Under $50K</option>
              <option value="$50K - $60K">$50K - $60K</option>
              <option value="$60K - $70K">$60K - $70K</option>
              <option value="$70K - $80K">$70K - $80K</option>
              <option value="$80K - $90K">$80K - $90K</option>
              <option value="$90K - $100K">$90K - $100K</option>
              <option value="$100K - $125K">$100K - $125K</option>
              <option value="$125K - $150K">$125K - $150K</option>
              <option value="$150K - $175K">$150K - $175K</option>
              <option value="$175K - $200K">$175K - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </section>

          <section class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Location</label>
            <input
              type="text"
              v-model="Jobs.location"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Company Location"
              required
            />
          </section>

          <h3 class="text-2xl mb-5">Company Info</h3>

          <section class="mb-4">
            <label for="company" class="block text-gray-700 font-bold mb-2"
              >Company Name</label
            >
            <input
              type="text"
              v-model="Jobs.company.name"
              id="company"
              name="company"
              class="border rounded w-full py-2 px-3"
              placeholder="Company Name"
              required
            />
          </section>

          <section class="mb-4">
            <label
              for="company_description"
              class="block text-gray-700 font-bold mb-2"
              >Company Description</label
            >
            <textarea
              id="company_description"
              v-model="Jobs.company.description"
              name="company_description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="What does your company do?"
            ></textarea>
          </section>

          <section class="mb-4">
            <label
              for="contact_email"
              class="block text-gray-700 font-bold mb-2"
              >Contact Email</label
            >
            <input
              type="email"
              v-model="Jobs.company.contactEmail"
              id="contact_email"
              name="contact_email"
              class="border rounded w-full py-2 px-3"
              placeholder="Email address for applicants"
              required
            />
          </section>

          <section class="mb-4">
            <label
              for="contact_phone"
              class="block text-gray-700 font-bold mb-2"
              >Contact Phone</label
            >
            <input
              type="tel"
              v-model="Jobs.company.contactPhone"
              id="contact_phone"
              name="contact_phone"
              class="border rounded w-full py-2 px-3"
              placeholder="Optional phone for applicants"
            />
          </section>

          <section>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Job
            </button>
          </section>
        </form>
      </div>
    </div>
  </section>
</template>