import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Jobs from "../views/Jobs/Jobs.vue";
import JobDetails from "../views/Jobs/JobDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    name: 'about',
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    // route parameter
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetails,
    // accepting props
    props: true
  },
  // redirect from a old path
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catch all 404 - /:catchAll(regex)
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
