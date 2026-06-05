<script setup>
import { RouterView, useRoute } from 'vue-router';
import Navbar from './Components/ui/Navbar.vue';
import Footer from './Components/ui/footer.vue';
import { computed } from 'vue';

const route = useRoute()
const hideLayout = computed(() => route.name === 'dashboard')
</script>
<template>
  <Navbar v-if="!hideLayout"/>
  <RouterView/>
  <Footer v-if="!hideLayout"/>
</template>

