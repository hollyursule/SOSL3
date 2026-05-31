```vue
<template>
  <div class="bg-gray-50">

    <!-- HERO -->
    <section class="relative h-screen overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
        alt="Eastern Province"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/60"></div>

      <div
        class="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6"
      >
        <span
          class="bg-green-600 px-5 py-2 rounded-full font-semibold mb-6"
        >
          Discover Rwanda
        </span>

        <h1 class="text-6xl md:text-8xl font-extrabold mb-6">
          Eastern Province
        </h1>

        <p class="max-w-3xl text-xl text-gray-200">
          Home to breathtaking wildlife, vast savannah landscapes,
          beautiful lakes, and Rwanda's famous Akagera National Park.
        </p>

        <button
          class="mt-10 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold text-lg transition"
        >
          Explore Now
        </button>
      </div>
    </section>

    <!-- STATS -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 text-center">

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">5</h2>
            <p class="text-gray-600 mt-2">Big Five Animals</p>
          </div>

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">1</h2>
            <p class="text-gray-600 mt-2">National Park</p>
          </div>

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">50+</h2>
            <p class="text-gray-600 mt-2">Wildlife Species</p>
          </div>

          <div class="p-8 rounded-3xl shadow-lg">
            <h2 class="text-5xl font-bold text-green-700">365</h2>
            <p class="text-gray-600 mt-2">Days of Adventure</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-green-700 mb-6">
            Why Visit Eastern Province?
          </h2>

          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            Eastern Province is Rwanda's wildlife paradise. From thrilling
            safaris in Akagera National Park to scenic lakes and rich
            cultural experiences, it offers unforgettable adventures for
            every traveler.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div
            class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300"
          >
            <div class="text-5xl mb-4">🦁</div>

            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Wildlife Safari
            </h3>

            <p class="text-gray-600">
              Spot lions, elephants, rhinos, buffaloes and leopards.
            </p>
          </div>

          <div
            class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300"
          >
            <div class="text-5xl mb-4">🚤</div>

            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Boat Cruises
            </h3>

            <p class="text-gray-600">
              Enjoy peaceful cruises among hippos and crocodiles.
            </p>
          </div>

          <div
            class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300"
          >
            <div class="text-5xl mb-4">🌅</div>

            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Scenic Views
            </h3>

            <p class="text-gray-600">
              Witness unforgettable sunsets across Rwanda's savannah.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- TOP DESTINATIONS -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-5xl font-bold text-center text-green-700 mb-16"
        >
          Top Attractions
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div
            class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
          >
            <img
              src="https://images.unsplash.com/photo-1549366021-9f761d450615"
              class="h-64 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-700 mb-3">
                Akagera National Park
              </h3>

              <p class="text-gray-600">
                Rwanda's premier safari destination.
              </p>
            </div>
          </div>

          <div
            class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              class="h-64 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-700 mb-3">
                Lake Ihema
              </h3>

              <p class="text-gray-600">
                Home to hippos, crocodiles and birdlife.
              </p>
            </div>
          </div>

          <div
            class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
          >
            <img
              src="https://images.unsplash.com/photo-1511497584788-876760111969"
              class="h-64 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-700 mb-3">
                Savannah Plains
              </h3>

              <p class="text-gray-600">
                Endless landscapes perfect for photography.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ACTIVITIES -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6">

        <h2
          class="text-5xl font-bold text-center text-green-700 mb-16"
        >
          Things To Do
        </h2>

        <div class="grid md:grid-cols-4 gap-8 text-center">

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🦒
            <h3 class="font-bold mt-4 text-xl">
              Game Drives
            </h3>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🚤
            <h3 class="font-bold mt-4 text-xl">
              Boat Safaris
            </h3>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            📸
            <h3 class="font-bold mt-4 text-xl">
              Photography
            </h3>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-lg">
            🐦
            <h3 class="font-bold mt-4 text-xl">
              Bird Watching
            </h3>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="bg-gradient-to-r from-green-800 to-green-600 py-24 text-white"
    >
      <div class="max-w-4xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6">
          Ready For An Adventure?
        </h2>

        <p class="text-xl text-green-100 mb-10">
          Experience Rwanda's incredible wildlife and landscapes.
        </p>

        <button
          class="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
        >
          Book Your Safari
        </button>

      </div>
    </section>

  </div>
</template>
```
<script setup lang="ts"></script>