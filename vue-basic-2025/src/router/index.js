import NotFound from "@/views/error-page/NotFound.vue";
import AddJob from "@/views/jobs-page/AddJob.vue";
import EditJob from "@/views/jobs-page/EditJob.vue";
import JobDetails from "@/views/jobs-page/JobDetails.vue";
import JobView from "@/views/jobs-page/JobPage.vue";
import LeardingView from "@/views/learding-page/LeardingPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASH_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LeardingView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobView,
    },
    {
      path: "/jobs/:id",
      name: "job-details",
      component: JobDetails,
      props: true,
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: EditJob,
      props: true,
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJob,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
