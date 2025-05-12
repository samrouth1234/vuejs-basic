import NotFound from "@/views/error-page/NotFound.vue";
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
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
