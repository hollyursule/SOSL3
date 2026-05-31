<template>
  <div class="bg-gray-50">

    <!-- HERO -->
    <section class="relative h-screen overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
        alt="Northern Province Volcanoes"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">

        <span class="bg-green-600 px-5 py-2 rounded-full font-semibold mb-6">
          Volcanoes • Gorillas • Mountains
        </span>

        <h1 class="text-6xl md:text-8xl font-extrabold mb-6">
          Northern Province
        </h1>

        <p class="max-w-3xl text-xl text-gray-200">
          Rwanda’s adventure capital — home to Volcanoes National Park,
          mountain gorillas, lakes, and breathtaking volcanic landscapes.
        </p>

        <button class="mt-10 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold text-lg transition">
          Explore Northern Rwanda
        </button>

      </div>
    </section>

    <!-- STATS -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6">

        <div class="grid md:grid-cols-4 gap-8 text-center">

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">5</h2>
            <p class="text-gray-600 mt-2">Volcano Mountains</p>
          </div>

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">1</h2>
            <p class="text-gray-600 mt-2">Gorilla Park</p>
          </div>

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">300+</h2>
            <p class="text-gray-600 mt-2">Mountain Gorillas</p>
          </div>

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">365</h2>
            <p class="text-gray-600 mt-2">Adventure Days</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-16">

          <h2 class="text-5xl font-bold text-green-700 mb-6">
            Why Visit Northern Province?
          </h2>

          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            Northern Province is Rwanda’s ultimate adventure destination,
            famous for mountain gorilla trekking, volcano hikes, lakes,
            and stunning scenery.
          </p>

        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300">
            <div class="text-5xl mb-4">🦍</div>
            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Gorilla Trekking
            </h3>
            <p class="text-gray-600">
              Meet mountain gorillas in Volcanoes National Park.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300">
            <div class="text-5xl mb-4">🌋</div>
            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Volcano Hiking
            </h3>
            <p class="text-gray-600">
              Climb dramatic volcano peaks and enjoy epic views.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300">
            <div class="text-5xl mb-4">🏞️</div>
            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Lakes & Nature
            </h3>
            <p class="text-gray-600">
              Twin Lakes and peaceful mountain landscapes.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- TOP DESTINATIONS -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-16">
          Top Attractions in Northern Rwanda
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-700 mb-3">
                Volcanoes National Park
              </h3>
              <p class="text-gray-600">
                Home of mountain gorilla trekking.
              </p>
            </div>
          </div>

          <div class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-700 mb-3">
                Twin Lakes (Burera & Ruhondo)
              </h3>
              <p class="text-gray-600">
                Stunning peaceful mountain lakes.
              </p>
            </div>
          </div>

          <div class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1526392060635-9d6019884377"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-700 mb-3">
                Musanze Caves
              </h3>
              <p class="text-gray-600">
                Explore ancient volcanic caves.
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
          Things To Do in Northern Province
        </h2>

        <div class="grid md:grid-cols-4 gap-8 text-center">

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🦍
            <h3 class="font-bold mt-4 text-xl">Gorilla Trekking</h3>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🌋
            <h3 class="font-bold mt-4 text-xl">Volcano Hiking</h3>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🏞️
            <h3 class="font-bold mt-4 text-xl">Nature Walks</h3>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            📸
            <h3 class="font-bold mt-4 text-xl">Photography</h3>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-green-800 to-green-600 py-24 text-white">

      <div class="max-w-4xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6">
          Discover Northern Rwanda
        </h2>

        <p class="text-xl text-green-100 mb-10">
          Experience gorillas, volcanoes, and Rwanda’s most powerful landscapes.
        </p>

        <button class="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition">
          Start Adventure
        </button>

      </div>

    </section>

  </div>
</template>

<script setup lang="ts"></script>