<script setup>
import { RouterLink } from 'vue-router'
import heroImage from '../Assets/nature.jfif'
import gorillaImage from '../Assets/gorilla.jfif.jfif'
import kigaliImage from '../Assets/Kigali Rwanda.jfif'
import lakeImage from '../Assets/lakekivu.jfif.jfif'
import hillsImage from '../Assets/hills.jfif'
</script>

<template>

  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Hero Content -->
    <div class="relative z-10 text-center px-6 max-w-5xl">

      <p class="uppercase tracking-[6px] text-green-300 font-semibold mb-4">
        Explore The Land Of A Thousand Hills
      </p>

      <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
        Welcome To
        <span class="text-green-400">Tembera Rwanda</span>
      </h1>

      <p class="text-lg md:text-2xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
        Discover breathtaking landscapes, wildlife,
        culture, luxury travel, and unforgettable adventures.
      </p>

      <div class="flex justify-center gap-5 flex-wrap">

        <RouterLink
          to="/services"
          class="bg-green-700 hover:bg-green-800 transition duration-300 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl"
        >
          Explore Now
        </RouterLink>

        <RouterLink
          to="/about"
          class="border-2 border-white hover:bg-white hover:text-black transition duration-300 px-8 py-4 rounded-xl text-lg font-bold"
        >
          Learn More
        </RouterLink>

      </div>

    </div>

  </section>

  <!-- GALLERY SECTION -->
  <section class="py-24 px-6 bg-white">

    <div class="max-w-7xl mx-auto">

      <div class="text-center mb-16">

        <h2 class="text-5xl font-bold text-green-700 mb-6">
          Discover Rwanda
        </h2>

        <p class="text-gray-600 text-xl max-w-3xl mx-auto">
          Explore Rwanda's most beautiful places, wildlife,
          lakes, mountains, and vibrant city life.
        </p>

      </div>

      <!-- Image Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Card -->
        <div class="group overflow-hidden rounded-3xl shadow-xl relative">

          <img
            :src="gorillaImage"
            alt="Gorilla"
            class="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div class="absolute inset-0 bg-black/40 flex items-end p-6">
            <h3 class="text-white text-2xl font-bold">
              Gorilla Trekking
            </h3>
          </div>

        </div>

        <!-- Card -->
        <div class="group overflow-hidden rounded-3xl shadow-xl relative">

          <img
            :src="kigaliImage"
            alt="Kigali"
            class="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div class="absolute inset-0 bg-black/40 flex items-end p-6">
            <h3 class="text-white text-2xl font-bold">
              Kigali City
            </h3>
          </div>

        </div>

        <!-- Card -->
        <div class="group overflow-hidden rounded-3xl shadow-xl relative">

          <img
            :src="lakeImage"
            alt="Lake Kivu"
            class="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div class="absolute inset-0 bg-black/40 flex items-end p-6">
            <h3 class="text-white text-2xl font-bold">
              Lake Kivu
            </h3>
          </div>

        </div>

        <!-- Card -->
        <div class="group overflow-hidden rounded-3xl shadow-xl relative">

          <img
            :src="hillsImage"
            alt="Mountains"
            class="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div class="absolute inset-0 bg-black/40 flex items-end p-6">
            <h3 class="text-white text-2xl font-bold">
              Mountains
            </h3>
          </div>

        </div>

      </div>

    </div>

  </section>

  <!-- WHY VISIT -->
  <section class="bg-gray-100 py-24 px-6">

    <div class="max-w-7xl mx-auto">

      <div class="text-center mb-16">

        <h2 class="text-5xl font-bold text-green-700 mb-6">
          Why Visit Rwanda?
        </h2>

        <p class="text-gray-600 text-xl max-w-3xl mx-auto">
          Rwanda offers one of the most unique travel experiences in Africa.
        </p>

      </div>

      <div class="grid md:grid-cols-3 gap-10">

        <!-- Card -->
        <div class="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300 text-center">

          <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
            N
          </div>

          <h3 class="text-3xl font-bold text-green-700 mb-4">
            Amazing Nature
          </h3>

          <p class="text-gray-600 leading-8">
            Mountains, forests, waterfalls, lakes,
            and breathtaking landscapes await you.
          </p>

        </div>

        <!-- Card -->
        <div class="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300 text-center">

          <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl font-bold text-yellow-700">
            W
          </div>

          <h3 class="text-3xl font-bold text-green-700 mb-4">
            Wildlife Adventures
          </h3>

          <p class="text-gray-600 leading-8">
            Experience gorilla trekking, safaris,
            bird watching, and national parks.
          </p>

        </div>

        <!-- Card -->
        <div class="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300 text-center">

          <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl font-bold text-red-700">
            C
          </div>

          <h3 class="text-3xl font-bold text-green-700 mb-4">
            Rich Culture
          </h3>

          <p class="text-gray-600 leading-8">
            Discover traditional dance, local food,
            music, and Rwanda's beautiful heritage.
          </p>

        </div>

      </div>

    </div>

  </section>

  <!-- CALL TO ACTION -->
  <section class="bg-green-700 text-white py-24 px-6 text-center">

    <div class="max-w-4xl mx-auto">

      <h2 class="text-5xl font-bold mb-8">
        Start Your Adventure Today
      </h2>

      <p class="text-xl leading-8 mb-10">
        Travel with Tembera Rwanda and create unforgettable memories.
      </p>

      <RouterLink
        to="/contact"
        class="bg-white text-green-700 hover:bg-gray-200 transition duration-300 px-10 py-5 rounded-2xl text-xl font-bold shadow-xl"
      >
        Book Your Tour
      </RouterLink>

    </div>

  </section>

</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
