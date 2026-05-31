<template>
  <section class="bg-gray-100 min-h-screen py-20 px-6">

    <div class="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

      <!-- HERO -->
      <img
        :src="hero"
        class="w-full h-[450px] object-cover"
        :alt="title"
      />

      <div class="p-10">

        <!-- TITLE -->
        <h1 class="text-5xl font-extrabold text-green-700 mb-6 text-center">
          {{ title }}
        </h1>

        <!-- DESCRIPTION -->
        <p class="text-gray-700 text-lg leading-relaxed text-center mb-10">
          {{ description }}
        </p>

        <!-- CARDS -->
        <div class="grid md:grid-cols-3 gap-8">

          <div
            v-for="(item, i) in places"
            :key="i"
            class="bg-gray-100 p-6 rounded-2xl text-center hover:shadow-lg transition"
          >

            <img
              :src="item.img"
              class="h-40 w-full object-cover rounded-xl mb-4"
            />

            <h2 class="text-2xl font-bold text-green-700 mb-2">
              {{ item.name }}
            </h2>

            <p class="text-gray-600">
              {{ item.text }}
            </p>

          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  hero: String,
  places: Array
})
</script>