<template>

<div class="w-3/4 h-3/4  border-2 border-red-600 flex">
<vue-draggable-resizable :parent="true">
  <p>你可以拖着我，按照自己的意愿调整大小。</p>
</vue-draggable-resizable>
 <RightCell :width="300" :height="300"/>
</div>
  
</template>

<script setup>
import { ref , computed,onMounted} from 'vue'
import SvgIcon from './SvgIcon.vue'
import RightCell from './RightCell.vue';
 let minWidth = 100
 let minHeight = 100
defineProps({
  msg: String,
})

const iconWidth = ref(37.07)
const iconHeight = ref(36)
const onResize = function (x, y, width, height) {
      console.log(x,y,width,height)
      iconWidth.value = width
      iconHeight.value = height
  }

</script>