<template>
  <section class="bg-gray-100 min-h-screen py-16 px-6">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-extrabold text-green-700 mb-4">
        Video Gallery
      </h1>

      <p class="text-gray-600 text-lg">
        Watch highlights from Rwanda tours and travel experiences.
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/2hZikE3wO7M"
          title="Rwanda travel video"
          allowfullscreen
        ></iframe>

        <div class="p-6">
          <h2 class="text-2xl font-bold text-green-700 mb-2">
            Discover Rwanda
          </h2>

          <p class="text-gray-600">
            A glimpse of Rwanda's landscapes, cities, and culture.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/7ms4lS0rrLk"
          title="Rwanda tourism video"
          allowfullscreen
        ></iframe>

        <div class="p-6">
          <h2 class="text-2xl font-bold text-green-700 mb-2">
            Tour Highlights
          </h2>

          <p class="text-gray-600">
            See memorable moments from travel around Rwanda.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
