import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"
import Personal from "@/views/Personal.vue"
import Booking from "@/views/Booking.vue"
import BookingControll from "@/views/BookingControll.vue"
import Search from "@/views/Search.vue"
import Seat from "@/views/Seat.vue"
import createAirport from "@/views/createAirport.vue"
import createFlight from "@/views/createFlight.vue"
import singleFlight from "@/views/singleFlight.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
    },
    {
      path: '/bookingControll',
      name: 'bookingControll',
      component: BookingControll
    },
    {
      path: '/seat',
      name: 'seat',
      component: Seat
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/create/airport',
      name: 'create-airport',
      component: createAirport
    },
    {
      path: '/create/flight',
      name: 'create-flight',
      component: createFlight
    },
    {
      path: '/flight/:id/',
      name: 'single-flight',
      component: singleFlight
    },
  ]
})

export default router
