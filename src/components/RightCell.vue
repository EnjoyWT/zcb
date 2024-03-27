<template>

    <vue-draggable-resizable :w="width"
       :h="height" @resizing="onResize" :min-width="iconMinWidth" :min-height="iconMinHeight">
      <SvgIcon name="vue" :width="iconWidth" :height="iconHeight"></SvgIcon>
    </vue-draggable-resizable>
    
</template>
    <script setup>
    import { ref ,watch ,onMounted} from 'vue'
    import SvgIcon from './SvgIcon.vue'
     let minWidth = 100
     let minHeight = 100
     const { width, height } = defineProps({
      width:{
        type:Number,
        default:100
    },
    height:{
        type:Number,
        default:100
    }
    })


    const iconWidth = ref(37.07)
    const iconHeight = ref(36)
    const iconMinHeight = ref(15)
    const iconMinWidth = ref(15)

    
  onMounted(() => {
    iconWidth.value = width;
    iconHeight.value = height;

})
    const onResize = function (x, y, width, height) {
          console.log(x,y,width,height)
          iconWidth.value = width
          iconHeight.value = height
    }
    onMounted
    </script>