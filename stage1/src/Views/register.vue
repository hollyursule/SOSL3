<template>
<div class="flex items-center justify-center bg-green-100 min-h-screen">
<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
<div class="text-center mb-6">
  <h2 class="text-2xl font-bold text-green-700">Register</h2>

  <form class="flex flex-col gap-4">

    <input
      v-model="username"
      type="text"
      placeholder="Enter your username"
      required
      class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
    >

    <input
      v-model="email"
      type="email"
      placeholder="Enter your email"
      required
      class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
    >

    <input
      v-model="phone"
      type="number"
      placeholder="Enter your phone number"
      required
      class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
    >

    <input
      v-model="age"
      type="number"
      placeholder="Enter your age"
      min="1"
      required
      class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
    >

    <select
      v-model="gender"
      required
      placeholder="Enter your phone number"
      class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
    >
      <option value="" disabled>Select your gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>

    <input
      v-model="password"
      type="password"
      placeholder="Enter your password"
      required
      class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
    >

    <button
      type="submit"
      class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
    >
      Sign Up
    </button>

  </form>

<p class="text-center text-sm mt-4 text-gray-600">
    Already have an account?
    <RouterLink to="/login" class="text-green-500 hover:underline">
      Sign In
    </RouterLink>
</p>
</div>
</div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const phone = ref('')
const age = ref('')
const gender = ref('')
const password = ref('')
</script>
