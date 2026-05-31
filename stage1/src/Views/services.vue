<template>
  <div class="bg-gray-50">

    <!-- HERO -->
    <section class="relative h-[80vh] flex items-center justify-center">
      <img
        src="../Assets/center.jfif"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Services"
      />

      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-6xl md:text-8xl font-extrabold mb-6">
          Our Services
        </h1>

        <p class="text-xl max-w-3xl mx-auto text-gray-200">
          Explore Rwanda with trusted travel experts. From safaris and gorilla
          trekking to transport and hotel bookings, we handle everything.
        </p>

        <button
          class="mt-8 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold text-lg transition"
        >
          Book Your Trip
        </button>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-16">
          What We Offer
        </h2>

        <div class="grid md:grid-cols-3 gap-10">

          <div class="bg-white p-8 rounded-3xl shadow-xl text-center hover:-translate-y-3 transition">
            <div class="text-6xl mb-4">🦁</div>
            <h3 class="text-2xl font-bold mb-4">Safari Tours</h3>
            <p class="text-gray-600">
              Discover Rwanda's wildlife and national parks.
            </p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-xl text-center hover:-translate-y-3 transition">
            <div class="text-6xl mb-4">🦍</div>
            <h3 class="text-2xl font-bold mb-4">Gorilla Trekking</h3>
            <p class="text-gray-600">
              Meet mountain gorillas in Volcanoes National Park.
            </p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-xl text-center hover:-translate-y-3 transition">
            <div class="text-6xl mb-4">🏨</div>
            <h3 class="text-2xl font-bold mb-4">Hotel Booking</h3>
            <p class="text-gray-600">
              Premium and budget accommodation options.
            </p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-xl text-center hover:-translate-y-3 transition">
            <div class="text-6xl mb-4">🚐</div>
            <h3 class="text-2xl font-bold mb-4">Transport Services</h3>
            <p class="text-gray-600">
              Comfortable and secure travel across Rwanda.
            </p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-xl text-center hover:-translate-y-3 transition">
            <div class="text-6xl mb-4">🎭</div>
            <h3 class="text-2xl font-bold mb-4">Cultural Tours</h3>
            <p class="text-gray-600">
              Experience Rwanda's traditions and heritage.
            </p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-xl text-center hover:-translate-y-3 transition">
            <div class="text-6xl mb-4">🚤</div>
            <h3 class="text-2xl font-bold mb-4">Lake Kivu Tours</h3>
            <p class="text-gray-600">
              Relax on beaches and enjoy boat cruises.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-16">
          Why Choose Us?
        </h2>

        <div class="grid md:grid-cols-4 gap-8">

          <div class="text-center">
            <div class="text-6xl mb-4">⭐</div>
            <h3 class="font-bold text-xl">Top Rated</h3>
          </div>

          <div class="text-center">
            <div class="text-6xl mb-4">🛡️</div>
            <h3 class="font-bold text-xl">Safe Travel</h3>
          </div>

          <div class="text-center">
            <div class="text-6xl mb-4">🌍</div>
            <h3 class="font-bold text-xl">Local Experts</h3>
          </div>

          <div class="text-center">
            <div class="text-6xl mb-4">💰</div>
            <h3 class="font-bold text-xl">Best Prices</h3>
          </div>

        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="bg-green-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 class="text-5xl font-bold">1000+</h2>
            <p>Happy Travelers</p>
          </div>

          <div>
            <h2 class="text-5xl font-bold">50+</h2>
            <p>Tour Packages</p>
          </div>

          <div>
            <h2 class="text-5xl font-bold">5</h2>
            <p>Regions Covered</p>
          </div>

          <div>
            <h2 class="text-5xl font-bold">24/7</h2>
            <p>Support</p>
          </div>

        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-16">
          Testimonials
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white p-8 rounded-3xl shadow-xl">
            <p class="italic text-gray-600">
              "Amazing safari experience. Everything was organized perfectly."
            </p>
            <h4 class="font-bold mt-6">John D.</h4>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-xl">
            <p class="italic text-gray-600">
              "Excellent service and professional guides."
            </p>
            <h4 class="font-bold mt-6">Sarah K.</h4>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-xl">
            <p class="italic text-gray-600">
              "The best way to discover Rwanda."
            </p>
            <h4 class="font-bold mt-6">Michael A.</h4>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-green-800 to-green-600 py-24 text-white">
      <div class="max-w-4xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6">
          Ready To Explore Rwanda?
        </h2>

        <p class="text-xl mb-10">
          Let Tembera U Rwanda create your perfect travel experience.
        </p>

        <button
          class="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
        >
          Start Your Journey
        </button>

      </div>
    </section>

  </div>
</template>