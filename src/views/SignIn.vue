<template>
  <AuthLayout>
    <template #form>
      <!-- Logo -->
      <div class="text-center mb-8">
        <router-link to="/">
          <div class="bg-[#027D89] px-1 py-1 rounded-lg inline-block mb-6">
            <img src="/Frame.png" class="h-10" />
          </div>
        </router-link>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Sign In</h1>
        <p class="text-gray-600 mt-2">Welcome back. Let's get you signed in</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSignIn" class="space-y-6">
        <!-- Email or Username -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email or Username
          </label>
          <input
            v-model="emailOrUsername"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
            placeholder="your.email@example.com or username"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
              placeholder="••••••••••••"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>

        <!-- Forgot Password -->
        <div class="text-right">
          <a href="#" class="text-sm text-brand-orange hover:underline font-medium">
            Forgot Password?
          </a>
        </div>

        <!-- Submit Button -->
        <Button variant="primary" class="w-full !py-3 !text-base" type="submit">
          Continue
        </Button>
      </form>

      <!-- Footer -->
      <div class="mt-8 text-center text-sm text-gray-600">
        Don't have an account?
        <router-link to="/signup" class="text-brand-orange font-semibold hover:underline">
          Sign Up
        </router-link>
      </div>

      <!-- Bottom Info -->
      <div class="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
        <p>Powered by Khusapay</p>
        <div class="flex justify-center gap-4 mt-2">
          <a href="mailto:info@khusapay.com" class="hover:text-brand-orange">
            info@khusapay.com
          </a>
          <span>•</span>
          <a href="tel:+265999955015" class="hover:text-brand-orange">
            +265 999 955 015
          </a>
        </div>
      </div>
    </template>
  </AuthLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout.vue'
import Button from '../components/common/Button.vue'

const router = useRouter()
const emailOrUsername = ref('')
const password = ref('')
const showPassword = ref(false)

const handleSignIn = () => {
  console.log('Sign in demo:', emailOrUsername.value)
  alert('This is a demo page. In production, i will authenticate the user.')
}
</script>
