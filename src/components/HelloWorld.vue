<template>

<div>
  <vue-draggable-resizable>
  <p>你可以拖着我，按照自己的意愿调整大小。</p>
</vue-draggable-resizable>
<vue-draggable-resizable>
  <p>你可以拖着我，按照自己的意愿调整大小。</p>
</vue-draggable-resizable>
  </div>
  

</template>

<script setup>
import { ref , computed,onMounted} from 'vue'
 let minWidth = 100
 let minHeight = 100
defineProps({
  msg: String,
})


</script>