<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const submitted = ref(false)

const submitForm = () => {
  submitted.value = true

  console.log('Form Submitted:', form.value)

  form.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  }
}
</script>

<template>
  <section class="bg-gray-100 min-h-screen py-16 px-6">
    <div class="text-center mb-14">
      <h1 class="text-5xl font-extrabold text-green-700 mb-4">
        Contact Tembera U Rwanda
      </h1>

      <p class="text-gray-600 max-w-2xl mx-auto text-lg">
        We would love to hear from you. Reach out for tours, travel bookings,
        safari experiences, hotel reservations, and customer support across Rwanda.
      </p>
    </div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
      <div class="bg-white rounded-3xl shadow-xl p-10">
        <h2 class="text-3xl font-bold text-green-700 mb-8">
          Get In Touch
        </h2>

        <div class="space-y-8">
          <div class="flex items-start gap-4">
            <div class="bg-green-100 p-4 rounded-full">
              Address
            </div>

            <div>
              <h3 class="font-bold text-lg text-gray-800">Office Address</h3>
              <p class="text-gray-600">
                Kigali City, Rwanda
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-green-100 p-4 rounded-full">
              Phone
            </div>

            <div>
              <h3 class="font-bold text-lg text-gray-800">Phone Number</h3>
              <p class="text-gray-600">
                +250 788 000 000
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-green-100 p-4 rounded-full">
              Email
            </div>

            <div>
              <h3 class="font-bold text-lg text-gray-800">Email Address</h3>
              <p class="text-gray-600">
                info@temberaurwanda.com
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-green-100 p-4 rounded-full">
              Hours
            </div>

            <div>
              <h3 class="font-bold text-lg text-gray-800">Working Hours</h3>
              <p class="text-gray-600">
                Monday - Saturday: 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-3xl shadow-xl p-10">
        <h2 class="text-3xl font-bold text-green-700 mb-8">
          Send Us a Message
        </h2>

        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>

            <input
              v-model="form.name"
              type="text"
              placeholder="Enter your full name"
              required
              class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>

            <input
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              required
              class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>

            <input
              v-model="form.phone"
              type="tel"
              placeholder="Enter your phone number"
              required
              class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Message
            </label>

            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Write your message here..."
              required
              class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold text-lg transition duration-300"
          >
            Send Message
          </button>

          <div
            v-if="submitted"
            class="bg-green-100 border border-green-300 text-green-700 p-4 rounded-xl"
          >
            Your message has been sent successfully.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
