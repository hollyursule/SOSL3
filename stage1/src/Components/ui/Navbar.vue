<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-green-700 text-white p-4 flex justify-between items-center">

    <div class="flex items-center gap-2">
      <img 
        src="../../Assets/logo.png" 
        alt="logo" 
        class="h-8 w-8"
      />

      <h1 class="text-2xl font-bold">
        Travel Tour
      </h1>
    </div>

    <div class="flex gap-6 items-center text-lg ml-auto">
      <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink>
      <RouterLink to="/about" class="hover:text-yellow-300">About Us</RouterLink>
      <RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink>

      <div class="relative group">
        <button class="hover:text-yellow-300">
          Gallery
        </button>
        <div class="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-40">
          <a href="#" class="block px-4 py-2 hover:bg-green-200">Photos</a>
          <a href="#" class="block px-4 py-2 hover:bg-green-200">Videos</a>
        </div>
      </div>

      <div class="relative group">
        <button class="hover:text-yellow-300">
          Destinations
        </button>
        <div class="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-56">
          <a href="#" class="block px-4 py-2 hover:bg-green-200">Kigali City</a>
          <a href="#" class="block px-4 py-2 hover:bg-green-200">Northern Province</a>
          <a href="#" class="block px-4 py-2 hover:bg-green-200">Southern Province</a>
          <a href="#" class="block px-4 py-2 hover:bg-green-200">Eastern Province</a>
          <a href="#" class="block px-4 py-2 hover:bg-green-200">Western Province</a>
        </div>
      </div>

      <RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
</style>