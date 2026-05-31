<script setup>
import pkImg from '../Assets/pk.jfif'
import IntoreImg from '../Assets/Intore.jfif'
import hillsImg from '../Assets/hills.jfif'
import KCCImg from '../Assets/KCC.jfif'
import natureImg from '../Assets/nature.jfif'
import rwImg from '../Assets/rw.jfif'
import lakekivuImg from '../Assets/lakekivu.jfif.jfif'
import nyugweImg from '../Assets/nyugwe.jfif'
import memorialImg from '../Assets/MEMORIAL.jfif'

const userImages = [
  { img: pkImg, name: 'Kigali Cultural Experience', desc: 'Traditional Rwanda cultural atmosphere' },
  { img: IntoreImg, name: 'Intore Dance', desc: 'Rwanda traditional dance performance' },
  { img: hillsImg, name: 'Hills of Rwanda', desc: 'Land of a Thousand Hills scenery' },
  { img: KCCImg, name: 'Kigali Convention Centre', desc: 'Modern Rwanda architecture' },
  { img: natureImg, name: 'Volcanoes Nature', desc: 'Rwanda’s mountain landscapes' },
  { img: rwImg, name: 'Rwandan Countryside', desc: 'Peaceful rural landscapes' }
]

// extra professional Rwanda content added AFTER your images
const extraImages = [
  { img: hillsImg, name: 'Akagera National Park', desc: 'Big Five safari experience' },
  { img: lakekivuImg, name: 'Lake Kivu', desc: 'Relaxing lakeside views' },
  { img: nyugweImg, name: 'Nyungwe Forest', desc: 'Ancient rainforest adventure' },
  { img: memorialImg, name: 'Kigali Genocide Memorial', desc: 'History & remembrance site' },
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', name: 'Kigali City Center', desc: 'Modern urban life in Rwanda' }
]

</script>
<template>
  <section class="bg-gray-50 min-h-screen py-20 px-6">

    <!-- TITLE -->
    <div class="text-center mb-16">
      <h1 class="text-6xl font-extrabold text-green-700 mb-4">
        Rwanda Photo Gallery
      </h1>

      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Explore Rwanda through culture, nature, cities, and unforgettable landscapes.
      </p>
    </div>

    <!-- YOUR IMAGES -->
    <div class="max-w-7xl mx-auto mb-24">
      <h2 class="text-3xl font-bold text-green-700 mb-8">
        Featured Collection
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div
          v-for="(item, i) in userImages"
          :key="i"
          class="group relative overflow-hidden rounded-3xl shadow-xl bg-black"
        >

          <img
            :src="item.img"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500 opacity-90 group-hover:opacity-100"
          />

          <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

          <div class="absolute bottom-0 p-5 text-white">
            <h3 class="text-xl font-bold">{{ item.name }}</h3>
            <p class="text-sm text-gray-200">{{ item.desc }}</p>
          </div>

        </div>

      </div>
    </div>

    <!-- EXTRA RWANDA CONTENT -->
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-green-700 mb-8">
        Explore More of Rwanda
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div
          v-for="(item, i) in extraImages"
          :key="i"
          class="group relative overflow-hidden rounded-3xl shadow-xl"
        >

          <img
            :src="item.img"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />

          <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

          <div class="absolute bottom-0 p-5 text-white">
            <h3 class="text-xl font-bold">{{ item.name }}</h3>
            <p class="text-sm text-gray-200">{{ item.desc }}</p>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>