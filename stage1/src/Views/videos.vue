<script setup>
const featured = {
  title: "Discover Rwanda – Land of a Thousand Hills",
  src: "https://www.youtube.com/embed/2hZikE3wO7M"
}

const videos = [
  {
    title: "Akagera National Park Safari",
    src: "https://www.youtube.com/embed/LXb3EKWsInQ"
  },
  {
    title: "Kigali City Tour",
    src: "https://www.youtube.com/embed/Scxs7L0vhZ4"
  },
  {
    title: "Lake Kivu Experience",
    src: "https://www.youtube.com/embed/7ms4lS0rrLk"
  },
  {
    title: "Volcanoes National Park (Gorillas)",
    src: "https://www.youtube.com/embed/1La4QzGeaaQ"
  }
]
</script>

<template>
  <section class="bg-gray-50 min-h-screen py-20 px-6">

    <div class="text-center mb-16">
      <h1 class="text-6xl font-extrabold text-green-700 mb-4">
        Rwanda Video Gallery
      </h1>

      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Experience Rwanda through safaris, gorillas, cities, lakes, and culture.
      </p>
    </div>

    <!-- FEATURED -->
    <div class="max-w-6xl mx-auto mb-20">
      <div class="rounded-3xl overflow-hidden shadow-2xl bg-white">

        <iframe
          class="w-full aspect-video"
          :src="featured.src"
          allowfullscreen
        ></iframe>

        <div class="p-6">
          <h2 class="text-3xl font-bold text-green-700">
            {{ featured.title }}
          </h2>
        </div>

      </div>
    </div>

    <!-- GRID -->
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

      <div
        v-for="(video, i) in videos"
        :key="i"
        class="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition"
      >

        <iframe
          class="w-full aspect-video"
          :src="video.src"
          allowfullscreen
        ></iframe>

        <div class="p-6">
          <h3 class="text-2xl font-bold text-green-700">
            {{ video.title }}
          </h3>
        </div>

      </div>

    </div>

    <!-- CTA -->
    <div class="text-center mt-20">
      <h2 class="text-4xl font-bold text-green-700 mb-4">
        Ready to Visit Rwanda?
      </h2>

      <p class="text-gray-600 mb-8">
        Book your journey with Tembera U Rwanda today.
      </p>

      <router-link
        to="/contact"
        class="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-2xl font-bold shadow-lg transition"
      >
        Book a Tour
      </router-link>
    </div>

  </section>
</template>