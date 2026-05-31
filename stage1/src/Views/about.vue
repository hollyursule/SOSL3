<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-gray-50 min-h-screen">

    <!-- HERO -->
    <div class="relative h-[500px] md:h-[650px] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
        alt="Rwanda Tourism"
        class="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">

        <span class="bg-green-600/90 backdrop-blur px-5 py-2 rounded-full font-semibold mb-6 shadow-lg">
          🇷🇼 Discover Rwanda With Us
        </span>

        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          About <span class="text-green-400">Tembera U Rwanda</span>
        </h1>

        <p class="max-w-3xl text-lg md:text-xl text-gray-200">
          Your trusted gateway to Rwanda’s breathtaking landscapes, wildlife,
          culture, and unforgettable travel experiences.
        </p>

        <div class="mt-10 flex gap-4 flex-wrap justify-center">
          <RouterLink
            to="/photos"
            class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Explore Rwanda
          </RouterLink>

          <RouterLink
            to="/contact"
            class="border border-white/60 hover:bg-white hover:text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            Contact Us
          </RouterLink>
        </div>

      </div>
    </div>

    <!-- MAIN CONTENT -->
    <div class="max-w-6xl mx-auto px-6 py-20">

      <div class="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center -mt-24 relative z-20">

        <h2 class="text-4xl md:text-5xl font-extrabold text-green-700 mb-8">
          Who We Are
        </h2>

        <p class="text-gray-700 text-lg leading-8 mb-6">
          Tembera U Rwanda is a professional tourism company dedicated to helping
          travelers explore the beauty, culture, wildlife, and adventure of Rwanda
          through carefully designed travel experiences.
        </p>

        <p class="text-gray-700 text-lg leading-8 mb-6">
          We specialize in safari tours, gorilla trekking, hotel bookings,
          transport services, and guided cultural tours across all provinces
          of Rwanda.
        </p>

        <p class="text-gray-700 text-lg leading-8">
          Our mission is to promote sustainable tourism while delivering safe,
          memorable, and high-quality experiences in the Land of a Thousand Hills.
        </p>

      </div>
    </div>

    <!-- FEATURES -->
    <div class="max-w-6xl mx-auto px-6">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-14">
        Why Travel With Us?
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
          <div class="text-5xl mb-4">🌍</div>
          <h3 class="text-2xl font-bold text-green-700 mb-3">Top Destinations</h3>
          <p class="text-gray-600 leading-7">
            Explore volcanoes, lakes, national parks, cities, and hidden gems across Rwanda.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
          <div class="text-5xl mb-4">🦍</div>
          <h3 class="text-2xl font-bold text-green-700 mb-3">Gorilla Trekking</h3>
          <p class="text-gray-600 leading-7">
            Experience Volcanoes National Park and meet mountain gorillas in their natural habitat.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
          <div class="text-5xl mb-4">🚐</div>
          <h3 class="text-2xl font-bold text-green-700 mb-3">Expert Guides</h3>
          <p class="text-gray-600 leading-7">
            Professional, friendly guides ensuring safe and unforgettable journeys.
          </p>
        </div>

      </div>
    </div>

    <!-- STATS -->
    <div class="max-w-6xl mx-auto px-6 mt-24">

      <div class="bg-gradient-to-r from-green-700 to-green-600 rounded-3xl text-white py-16 px-10 shadow-2xl">

        <div class="grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 class="text-5xl font-extrabold mb-3">100+</h2>
            <p class="text-lg">Destinations</p>
          </div>

          <div>
            <h2 class="text-5xl font-extrabold mb-3">500+</h2>
            <p class="text-lg">Happy Travelers</p>
          </div>

          <div>
            <h2 class="text-5xl font-extrabold mb-3">20+</h2>
            <p class="text-lg">Tour Guides</p>
          </div>

          <div>
            <h2 class="text-5xl font-extrabold mb-3">5★</h2>
            <p class="text-lg">Rated Experience</p>
          </div>

        </div>
      </div>
    </div>

    <!-- VISION -->
    <div class="max-w-5xl mx-auto mt-24 text-center px-6">

      <h2 class="text-4xl font-bold text-green-700 mb-8">
        Our Vision
      </h2>

      <p class="text-gray-700 text-lg leading-9">
        To become Rwanda’s leading tourism platform by connecting travelers
        with authentic experiences, cultural heritage, and natural wonders
        while supporting local communities and promoting sustainable tourism.
      </p>

    </div>

    <!-- CTA -->
    <div class="max-w-5xl mx-auto mt-24 mb-20 text-center px-6">

      <h2 class="text-4xl font-bold text-green-700 mb-6">
        Start Your Journey Today
      </h2>

      <p class="text-gray-700 text-lg mb-10">
        Discover Rwanda with us and create unforgettable memories.
      </p>

      <RouterLink
        to="/contact"
        class="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg transition duration-300"
      >
        Book Your Adventure
      </RouterLink>

    </div>

  </section>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>