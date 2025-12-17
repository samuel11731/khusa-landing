<template>
  <span :class="badgeClasses">
    <slot></slot>
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'orange', 'orange-border'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
});

const badgeClasses = computed(() => {
  const base = 'inline-block rounded-full font-bold tracking-[1.44px] uppercase';
  
  const variants = {
    'blue': 'border-[2px] border-brand-blue-border text-brand-blue-light bg-white',
    'orange': 'border-[2px] border-[#F1F1F1] text-brand-orange bg-white',
    'orange-border': 'border-[2px] border-[#FFFFFF] text-brand-orange bg-transparent'
  };
  
  const sizes = {
    'sm': 'px-[16px] py-[2px] text-[10px]',
    'md': 'px-[20px] py-[4px] text-[12px]',
    'lg': 'px-[32px] py-[5px] text-[12px]'
  };
  
  return `${base} ${variants[props.variant]} ${sizes[props.size]}`;
});
</script>
