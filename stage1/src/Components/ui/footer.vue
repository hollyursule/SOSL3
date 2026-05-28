<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <footer class="bg-green-700 text-white px-8 py-10 mt-10">
    <div class="flex flex-wrap justify-between gap-8">
        <div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERAURWANDA</h3><br>
   <p class="text-sm text-green-200">Discover the beauty of land of thousand hills</p>
     </div>
    
    <!-- Quick links -->
     <div>
        <h3 class="text-lg font-bold text-yellow mt-3 mb-3">Quick links</h3>
        <ul class="text-sm text-green-200 space-y-2">
            <li><router-link to="/" class="hover:text-yellow-300">Home</router-link></li>
            <li><router-link to="/about" class="hover:text-yellow-300">About</router-link></li>
            <li><router-link to="/services" class="hover:text-yellow-300">Services</router-link></li>
            <li><router-link to="/contact" class="hover:text-yellow-300">Contact</router-link></li>
        </ul>
     </div>
     <!--Destination-->
     <div>
        <h3 class="text-yellow-300 font-bold text-1g mb-3">Destination</h3>
        <ul class="space-y-2 text-sm">
            <li>
                <RouterLink to="/"class="hover:bg-yellow-300">Northern province</RouterLink><br><br>
                <RouterLink to="/"class="hover:bg-yellow-300">Western province</RouterLink><br><br>
                <RouterLink to="/"class="hover:bg-yellow-300">Eastern province</RouterLink><br><br>
                <RouterLink to="/"class="hover:bg-yellow-300">Southern province</RouterLink><br><br>
                <RouterLink to="/"class="hover:bg-yellow-300">kigali city</RouterLink>
            </li>
        </ul>
     </div>
     <!--contact info-->
     <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">contact us</h3>
        <ul class="space-y-2 text-green-300">
            <li>Email: info@temberaurwandacountry.com</li>
            <li>Phone: +250 788 123 456</li>
            <li>Address: Kigali, Rwanda</li>
        </ul>
     </div>
     
    </div>
    <!--copyright-->
    <div class="border-t border-green-500 mt-8 pt-4 text-center text-sm text-green-300">
        &copy 2026 Tembera U Rwanda. All rights reserved.
    </div>
</footer>
</template>