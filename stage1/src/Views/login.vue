<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const place = ref('overview')

function onSubmit(e: Event) {
  e.preventDefault()
  // here you would normally validate credentials; for now we redirect
  router.push({ name: 'dashboard', query: { place: place.value } })
}

</script>
<template>
<div class="flex items-center justify-center bg-green-100 min-h-screen">
<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
<div class="text-center mb-6">
  <h2 class="text-2xl font-bold text-green-700">Login</h2>

  <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
    
    <input
      v-model="email"
      type="email"
      placeholder="Enter your email"
      required
      class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
    >

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
      Sign In
    </button>
  </form>

<p class="text-center text-sm mt-4 text-gray-600">
    Don't have an account? <a href="/register" class="text-green-500 hover:text-green-700 font-bold"> Register here</a>
</p>
</div>
</div>
</div>
</template>


