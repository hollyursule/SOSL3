<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-gray-100 min-h-screen py-20 px-6">

    <!-- Main Container -->
    <div class="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

      <!-- Hero Image -->
      <div>
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
          alt="Rwanda Tourism"
          class="w-full h-[450px] object-cover"
        />
      </div>

      <!-- About Content -->
      <div class="p-10 md:p-16 text-center">

        <h1 class="text-5xl md:text-6xl font-extrabold text-green-700 mb-8">
          About Tembera U Rwanda
        </h1>

        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          Tembera U Rwanda is a tourism company dedicated to helping people
          discover the beauty, culture, wildlife, and adventure of Rwanda
          through unforgettable travel experiences.
        </p>

        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          We provide safari tours, gorilla trekking, hotel booking, transport,
          tour guidance, and destination recommendations across Rwanda.
        </p>

        <p class="text-gray-700 text-lg leading-relaxed mb-10">
          Our mission is to promote tourism while giving visitors safe,
          enjoyable, professional, and memorable adventures throughout the
          Land of a Thousand Hills.
        </p>

        <!-- Buttons -->
        <div class="flex justify-center gap-4 flex-wrap">

          <RouterLink
            to="/photos"
            class="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            Explore Rwanda
          </RouterLink>

          <RouterLink
            to="/contact"
            class="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            Contact Us
          </RouterLink>

        </div>
      </div>
    </div>

    <!-- Why Choose Us -->
    <div class="max-w-6xl mx-auto mt-24">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-14">
        Why Choose Us?
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <!-- Card 1 -->
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">

          <div class="text-6xl mb-4">🌍</div>

          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Beautiful Destinations
          </h3>

          <p class="text-gray-700 leading-7">
            Discover mountains, lakes, wildlife parks, and breathtaking
            scenery all across Rwanda.
          </p>

        </div>

        <!-- Card 2 -->
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">

          <div class="text-6xl mb-4">🦍</div>

          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Gorilla Trekking
          </h3>

          <p class="text-gray-700 leading-7">
            Experience Rwanda’s world-famous mountain gorillas in Volcanoes
            National Park.
          </p>

        </div>

        <!-- Card 3 -->
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">

          <div class="text-6xl mb-4">🚐</div>

          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Professional Tours
          </h3>

          <p class="text-gray-700 leading-7">
            Enjoy safe transport, experienced guides, and personalized travel
            experiences.
          </p>

        </div>

      </div>
    </div>

    <!-- Statistics Section -->
    <div class="max-w-6xl mx-auto mt-24 bg-green-700 rounded-3xl text-white py-16 px-10 shadow-2xl">

      <div class="grid md:grid-cols-4 gap-10 text-center">

        <div>
          <h2 class="text-5xl font-extrabold mb-3">100+</h2>
          <p class="text-lg">Tour Destinations</p>
        </div>

        <div>
          <h2 class="text-5xl font-extrabold mb-3">500+</h2>
          <p class="text-lg">Happy Visitors</p>
        </div>

        <div>
          <h2 class="text-5xl font-extrabold mb-3">20+</h2>
          <p class="text-lg">Professional Guides</p>
        </div>

        <div>
          <h2 class="text-5xl font-extrabold mb-3">5★</h2>
          <p class="text-lg">Top Rated Experience</p>
        </div>

      </div>
    </div>

    <!-- Vision Section -->
    <div class="max-w-5xl mx-auto mt-24 text-center">

      <h2 class="text-4xl font-bold text-green-700 mb-8">
        Our Vision
      </h2>

      <p class="text-gray-700 text-lg leading-9">
        We aim to become Rwanda’s leading tourism platform by connecting
        travelers with the country’s most beautiful experiences, cultural
        heritage, and natural wonders while promoting sustainable tourism
        and local communities.
      </p>

    </div>

    <!-- Call To Action -->
    <div class="max-w-5xl mx-auto mt-24 text-center">

      <h2 class="text-4xl font-bold text-green-700 mb-6">
        Start Your Adventure Today
      </h2>

      <p class="text-gray-700 text-lg mb-10">
        Explore Rwanda and create unforgettable memories with Tembera U Rwanda.
      </p>

      <RouterLink
        to="/contact"
        class="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg transition duration-300"
      >
        Book a Tour
      </RouterLink>

    </div>

  </section>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
