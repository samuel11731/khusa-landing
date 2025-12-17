<template>
  <div 
    class="flex items-center gap-4 group" 
    :data-aos="animation"
    :data-aos-delay="delay"
  >
    <!-- Icon Circle -->
    <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md">
      <img 
        :src="icon" 
        :alt="title" 
        class="w-7 h-7 md:w-8 md:h-8 object-contain" 
      />
    </div>
    
    <!-- Text Content -->
    <div>
      <h3 class="text-base md:text-lg font-bold text-brand-slate mb-1">
        {{ title }}
      </h3>
      <p class="text-brand-dark-blue text-xs md:text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  animation: {
    type: String,
    default: 'fade-up'
  },
  delay: {
    type: String,
    default: '0'
  }
});
</script>
