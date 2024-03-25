

  // main.js
import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import VueDraggableResizable from "vue-draggable-resizable-gorkys/src/components/vue-draggable-resizable.vue"

import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'

const app = createApp(App)
app.component('vue-draggable-resizable', VueDraggableResizable)
app.mount('#app')