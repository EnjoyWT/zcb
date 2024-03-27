<template>
    <svg :width="width" :height="height" aria-hidden="true">
      <use :xlink:href="symbolId" :fill="color" />
    </svg>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
    width:{
        type:Number,
        default:100
    },
    height:{
        type:Number,
        default:100
    }
  });
  const symbolId = computed(() => `#${props.prefix}-${props.name}`);
  </script>