<script setup>
import { RouterLink } from 'vue-router'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const openMenu = ref(null)

const toggleMenu = (menu) => {
  openMenu.value = openMenu.value === menu ? null : menu
}

const closeMenu = () => {
  openMenu.value = null
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu)
})
</script>

<template>
  <nav class="bg-green-700 text-white px-6 py-4 flex justify-between items-center">

    <!-- LOGO -->
    <RouterLink to="/" class="flex items-center gap-3" @click="closeMenu">
      <img src="../../Assets/logo.png" alt="logo" class="h-8 w-8" />
      <h1 class="text-2xl font-bold">Travel Tour</h1>
    </RouterLink>

    <!-- LINKS -->
    <div class="flex items-center gap-9 text-lg ml-auto">

      <RouterLink to="/" class="hover:text-yellow-300" @click="closeMenu">
        Home
      </RouterLink>

      <RouterLink to="/about" class="hover:text-yellow-300" @click="closeMenu">
        About Us
      </RouterLink>

      <RouterLink to="/services" class="hover:text-yellow-300" @click="closeMenu">
        Services
      </RouterLink>

      <!-- 🎬 GALLERY DROPDOWN (FIXED) -->
      <div class="relative" @click.stop>

        <button
          type="button"
          class="hover:text-yellow-300"
          @click="toggleMenu('gallery')"
        >
          Gallery
        </button>

        <div
          v-if="openMenu === 'gallery'"
          class="absolute left-0 top-full mt-3 bg-white text-black rounded shadow-lg w-56 z-50 overflow-hidden"
        >
          <RouterLink
            to="/photos"
            class="block px-4 py-2 hover:bg-green-200"
            @click="closeMenu"
          >
            Photos
          </RouterLink>

          <RouterLink
            to="/videos"
            class="block px-4 py-2 hover:bg-green-200"
            @click="closeMenu"
          >
            Videos
          </RouterLink>
        </div>

      </div>

      <!-- 🌍 DESTINATIONS DROPDOWN (WORKING HOVER) -->
      <div class="relative group">

        <button type="button" class="hover:text-yellow-300">
          Destinations
        </button>

        <div class="absolute left-0 top-full pt-3 hidden group-hover:block z-50">
          <div class="bg-white text-black rounded shadow-lg w-56 overflow-hidden">

            <RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-200">
              Kigali City
            </RouterLink>

            <RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-200">
              Northern Province
            </RouterLink>

            <RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-200">
              Southern Province
            </RouterLink>

            <RouterLink to="/eastern" class="block px-4 py-2 hover:bg-green-200">
              Eastern Province
            </RouterLink>

            <RouterLink to="/western" class="block px-4 py-2 hover:bg-green-200">
              Western Province
            </RouterLink>

          </div>
        </div>

      </div>

      <RouterLink to="/contact" class="hover:text-yellow-300" @click="closeMenu">
        Contact
      </RouterLink>

    </div>
  </nav>
</template>

<style scoped>
</style>