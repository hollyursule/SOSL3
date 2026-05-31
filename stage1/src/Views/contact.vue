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

  setTimeout(() => {
    submitted.value = false
  }, 5000)
}

const faqs = ref([
  {
    question: 'How quickly do you respond?',
    answer: 'We usually respond within 24 hours.'
  },
  {
    question: 'Can I customize my tour package?',
    answer: 'Yes. We create personalized travel experiences based on your preferences.'
  },
  {
    question: 'Do you offer airport transfers?',
    answer: 'Yes, airport pickup and drop-off services are available.'
  }
])
</script>

<template>
  <div class="bg-gray-50">

    <!-- HERO SECTION -->
    <section
      class="relative h-[70vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-r from-green-900 via-green-700 to-green-500"
    >
      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative z-10 text-center px-6 max-w-4xl">
        <span
          class="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold"
        >
          Tembera U Rwanda
        </span>

        <h1 class="text-5xl md:text-7xl font-extrabold mt-6 mb-6">
          Contact Us
        </h1>

        <p class="text-xl text-green-100 leading-relaxed">
          Planning your next adventure in Rwanda? Our travel specialists are
          ready to help you discover unforgettable destinations, safaris,
          cultural experiences and premium travel services.
        </p>
      </div>
    </section>

    <!-- STATS -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div
            class="bg-green-50 rounded-3xl p-8 shadow hover:shadow-lg transition"
          >
            <h2 class="text-4xl font-bold text-green-700">5K+</h2>
            <p class="text-gray-600 mt-2">Happy Travelers</p>
          </div>

          <div
            class="bg-green-50 rounded-3xl p-8 shadow hover:shadow-lg transition"
          >
            <h2 class="text-4xl font-bold text-green-700">50+</h2>
            <p class="text-gray-600 mt-2">Tour Packages</p>
          </div>

          <div
            class="bg-green-50 rounded-3xl p-8 shadow hover:shadow-lg transition"
          >
            <h2 class="text-4xl font-bold text-green-700">30+</h2>
            <p class="text-gray-600 mt-2">Destinations</p>
          </div>

          <div
            class="bg-green-50 rounded-3xl p-8 shadow hover:shadow-lg transition"
          >
            <h2 class="text-4xl font-bold text-green-700">24/7</h2>
            <p class="text-gray-600 mt-2">Support</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">

          <!-- LEFT SIDE -->
          <div
            class="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100"
          >
            <h2 class="text-4xl font-bold text-green-700 mb-8">
              Get In Touch
            </h2>

            <p class="text-gray-600 mb-10">
              Have questions about Rwanda travel experiences? Our team is here
              to assist you every step of the way.
            </p>

            <div class="space-y-8">

              <div
                class="flex items-start gap-5 bg-green-50 p-5 rounded-2xl"
              >
                <div
                  class="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center font-bold"
                >
                  📍
                </div>

                <div>
                  <h3 class="font-bold text-lg text-gray-800">
                    Office Address
                  </h3>

                  <p class="text-gray-600">
                    Kigali City, Rwanda
                  </p>
                </div>
              </div>

              <div
                class="flex items-start gap-5 bg-green-50 p-5 rounded-2xl"
              >
                <div
                  class="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center font-bold"
                >
                  📞
                </div>

                <div>
                  <h3 class="font-bold text-lg text-gray-800">
                    Phone Number
                  </h3>

                  <p class="text-gray-600">
                    +250 788 000 000
                  </p>
                </div>
              </div>

              <div
                class="flex items-start gap-5 bg-green-50 p-5 rounded-2xl"
              >
                <div
                  class="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center font-bold"
                >
                  ✉️
                </div>

                <div>
                  <h3 class="font-bold text-lg text-gray-800">
                    Email Address
                  </h3>

                  <p class="text-gray-600">
                    info@temberaurwanda.com
                  </p>
                </div>
              </div>

              <div
                class="flex items-start gap-5 bg-green-50 p-5 rounded-2xl"
              >
                <div
                  class="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center font-bold"
                >
                  🕒
                </div>

                <div>
                  <h3 class="font-bold text-lg text-gray-800">
                    Working Hours
                  </h3>

                  <p class="text-gray-600">
                    Monday - Saturday
                  </p>

                  <p class="text-gray-600">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <!-- SOCIAL -->
            <div class="mt-10">
              <h3 class="font-bold text-xl mb-5 text-gray-800">
                Follow Us
              </h3>

              <div class="flex flex-wrap gap-4">
                <a
                  href="#"
                  class="bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800 transition"
                >
                  Facebook
                </a>

                <a
                  href="#"
                  class="bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800 transition"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  class="bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800 transition"
                >
                  X
                </a>
              </div>
            </div>
          </div>

          <!-- FORM -->
          <div
            class="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100"
          >
            <h2 class="text-4xl font-bold text-green-700 mb-8">
              Send Us a Message
            </h2>

            <form @submit.prevent="submitForm" class="space-y-6">

              <div>
                <label class="block font-semibold mb-2">
                  Full Name
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label class="block font-semibold mb-2">
                  Email Address
                </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label class="block font-semibold mb-2">
                  Phone Number
                </label>

                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label class="block font-semibold mb-2">
                  Service Interested In
                </label>

                <select
                  v-model="form.service"
                  class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                >
                  <option value="">Select Service</option>
                  <option>Gorilla Trekking</option>
                  <option>Safari Tours</option>
                  <option>Hotel Booking</option>
                  <option>Cultural Tours</option>
                  <option>Lake Kivu Trips</option>
                  <option>Airport Transfers</option>
                </select>
              </div>

              <div>
                <label class="block font-semibold mb-2">
                  Message
                </label>

                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="Tell us about your travel plans..."
                  required
                  class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition duration-300 shadow-lg"
              >
                Send Message →
              </button>

              <div
                v-if="submitted"
                class="bg-green-100 border border-green-300 text-green-700 p-4 rounded-xl"
              >
                ✅ Your message has been sent successfully.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <h2
          class="text-4xl font-bold text-center text-green-700 mb-12"
        >
          Frequently Asked Questions
        </h2>

        <div class="space-y-6">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="bg-gray-50 rounded-2xl p-8 shadow"
          >
            <h3 class="font-bold text-xl mb-3">
              {{ faq.question }}
            </h3>

            <p class="text-gray-600">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- MAP -->
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <h2
          class="text-4xl font-bold text-center text-green-700 mb-10"
        >
          Find Us
        </h2>

        <div class="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?q=Kigali&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="500"
            style="border:0;"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="bg-gradient-to-r from-green-800 to-green-600 text-white py-20"
    >
      <div class="max-w-4xl mx-auto text-center px-6">
        <h2 class="text-5xl font-bold mb-6">
          Start Your Rwanda Adventure Today
        </h2>

        <p class="text-xl text-green-100 mb-8">
          Let us help you plan a memorable journey through Rwanda's stunning
          landscapes, wildlife and culture.
        </p>

        <button
          class="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
        >
          Book Your Trip
        </button>
      </div>
    </section>

  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

input,
textarea,
select {
  transition: all 0.3s ease;
}

input:focus,
textarea:focus,
select:focus {
  transform: translateY(-2px);
}

button {
  transition: all 0.3s ease;
}
</style>