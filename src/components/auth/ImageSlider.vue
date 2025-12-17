<template>
  <div class="relative w-full h-full overflow-hidden">
    
    <!-- Sliding images -->
    <transition-group name="slide-fade" tag="div" class="relative w-full h-full">
      <div
        v-for="(slide, index) in slides"
        v-show="currentImage === index"
        :key="index"
        class="absolute inset-0 w-full h-full"
      >
        <!-- Background Image -->
        <img 
          :src="slide.image" 
          :alt="slide.title"
          class="w-full h-full object-cover"
        />
        
        <!-- Dark overlay for better text readability -->
        <div class="absolute inset-0 bg-black/40"></div>
        
        <!-- Text content over image -->
        <div class="absolute inset-0 flex items-center justify-center px-12">
          <div class="text-center text-white max-w-2xl">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 drop-shadow-2xl">
              {{ slide.title }}
            </h2>
            <p class="text-lg md:text-xl opacity-95 drop-shadow-lg leading-relaxed">
              {{ slide.description }}
            </p>
          </div>
        </div>
      </div>
    </transition-group>

    
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="currentImage = index"
        :class="[
          'h-2 rounded-full transition-all duration-300',
          currentImage === index ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/70'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    title: 'Welcome to Khusapay',
    description: 'The ultimate payment and settlement platform for modern businesses'
  },
  {
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    title: 'Secure & Reliable',
    description: 'Your transactions are fully protected with enterprise-grade security'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    title: 'Fast Settlement',
    description: 'Experience real-time settlements and reconciliations'
  }
]

const currentImage = ref(0)
let interval = null

onMounted(() => {
  
  interval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % slides.length
  }, 4000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>

.slide-fade-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s ease;
}

.slide-fade-enter-from {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
