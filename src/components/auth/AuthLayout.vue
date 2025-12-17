<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    <!-- Left Side: Images (Hidden on mobile) -->
    <div class="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <slot name="images">
        <ImageSlider />
      </slot>
    </div>

    <!-- Right Side: Form -->
    <div class="w-full md:w-1/2 flex items-center justify-center p-6 md:p-4 bg-white">
      <div class="w-full max-w-md">
        <slot name="form"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageSlider from './ImageSlider.vue'
</script>
