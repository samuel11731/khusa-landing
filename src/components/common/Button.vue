<template>
  <button 
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'icon'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ''
  }
});

defineEmits(['click']);

const buttonClasses = computed(() => {
  const base = 'rounded-full font-bold transition-all duration-300';
  
  const variants = {
    primary: 'bg-brand-orange hover:bg-brand-orange/80 text-white shadow-lg',
    secondary: 'bg-white text-black hover:bg-gray-100',
    icon: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 hover:scale-110 active:scale-95 flex items-center justify-center'
  };
  
  const sizes = {
    sm: 'w-10 h-10 md:w-8 md:h-8',
    md: 'px-4 py-1 md:px-8 md:py-2.5 text-xs md:text-sm',
    lg: 'px-8 py-3 text-base'
  };
  
  const disabled = props.disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${disabled} ${props.customClass}`.trim();
});
</script>
