
<template>
   <div class="flex h-screen bg-gray-100">
    <!--asidebar which-->
    <aside class="w-68 bg-green-800 text-white flex flex-col"> 
        <div class="p-6 text-2xl font-bold border-green-700">Dashboard</div>
        <nav class="flex-1 p-4">
            <button @click="activeMenu = 'overview'" :class="activeMenu === 'overview' ? 'bg-green-700' : ''"
            class="w-full text-left px-4 py-3 rounded mb-2"> OverView</button>
            <button @click="activeMenu = 'booking'" :class="activeMenu === 'booking' ? 'bg-green-700' : ''"
            class="w-full text-left px-4 py-3 rounded mb-2"> Booking</button>
            <button @click="activeMenu = 'users'" :class="activeMenu === 'users' ? 'bg-green-700' : ''"
            class="w-full text-left px-4 py-3 rounded mb-2"> Users</button>
        </nav>
        <!--button log out-->
        <div class="p-4 border-t border-green-700">
           <button @click="logout" class="w-full bg-red-600 hover:bg-red-800 px-4 py-2 rounded">Logout</button>
            </div>
    </aside>
    <main class="flex-1 overflow-y-auto p-8">
     <!--this will contain overview-->   

    </main>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const queryPlace = (route.query.place as string) || 'overview'
const activeMenu = ref(queryPlace)

function logout() {
  router.push({ name: 'login' })
}
</script>
