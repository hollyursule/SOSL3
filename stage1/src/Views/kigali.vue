<template>
  <div class="bg-gray-50">

    <!-- HERO -->
    <section class="relative h-screen overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
        alt="Kigali City Skyline"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">

        <span class="bg-green-600 px-5 py-2 rounded-full font-semibold mb-6">
          Clean • Safe • Modern Africa
        </span>

        <h1 class="text-6xl md:text-8xl font-extrabold mb-6">
          Kigali City
        </h1>

        <p class="max-w-3xl text-xl text-gray-200">
          Rwanda’s capital city — known for cleanliness, safety, modern architecture,
          cultural heritage, and vibrant urban life.
        </p>

        <button class="mt-10 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold text-lg transition">
          Explore Kigali
        </button>

      </div>
    </section>

    <!-- STATS -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6">

        <div class="grid md:grid-cols-4 gap-8 text-center">

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">1</h2>
            <p class="text-gray-600 mt-2">Capital City</p>
          </div>

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">24/7</h2>
            <p class="text-gray-600 mt-2">Safe Environment</p>
          </div>

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">100+</h2>
            <p class="text-gray-600 mt-2">Restaurants & Cafes</p>
          </div>

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">365</h2>
            <p class="text-gray-600 mt-2">Days of Activity</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-16">

          <h2 class="text-5xl font-bold text-green-700 mb-6">
            Why Visit Kigali City?
          </h2>

          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            Kigali is one of Africa’s cleanest and fastest-growing cities.
            It combines modern architecture, rich culture, historical sites,
            and peaceful urban life.
          </p>

        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300">
            <div class="text-5xl mb-4">🏙️</div>
            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Modern City
            </h3>
            <p class="text-gray-600">
              Beautiful skyline, clean streets, and modern infrastructure.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300">
            <div class="text-5xl mb-4">🕊️</div>
            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Peaceful Environment
            </h3>
            <p class="text-gray-600">
              One of the safest and cleanest cities in Africa.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300">
            <div class="text-5xl mb-4">🎭</div>
            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Culture & Arts
            </h3>
            <p class="text-gray-600">
              Museums, cultural centers and traditional experiences.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- TOP DESTINATIONS -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-16">
          Top Attractions in Kigali
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
            <img
              src='../Assets/MEMORIAL.jfif'
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-700 mb-3">
                Kigali Genocide Memorial
              </h3>
              <p class="text-gray-600">
                A powerful historical and educational site.
              </p>
            </div>
          </div>

          <div class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-700 mb-3">
                Kigali City Center
              </h3>
              <p class="text-gray-600">
                Modern buildings, nightlife, and business hub.
              </p>
            </div>
          </div>

          <div class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
            <img
              src='../Assets/Kigali Rwanda.jfif'
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-700 mb-3">
                Kigali Convention Centre
              </h3>
              <p class="text-gray-600">
                Iconic landmark of modern Rwanda.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ACTIVITIES -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-16">
          Things To Do in Kigali
        </h2>

        <div class="grid md:grid-cols-4 gap-8 text-center">

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🏙️
            <h3 class="font-bold mt-4 text-xl">City Tours</h3>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🍽️
            <h3 class="font-bold mt-4 text-xl">Restaurants</h3>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🛍️
            <h3 class="font-bold mt-4 text-xl">Shopping</h3>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🎨
            <h3 class="font-bold mt-4 text-xl">Cultural Tours</h3>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-green-800 to-green-600 py-24 text-white">

      <div class="max-w-4xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6">
          Discover Kigali City
        </h2>

        <p class="text-xl text-green-100 mb-10">
          Experience Africa’s cleanest and most modern capital city.
        </p>

        <button class="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition">
          Visit Kigali
        </button>

      </div>

    </section>

  </div>
</template>

<script setup lang="ts"></script>