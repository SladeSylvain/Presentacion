// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import all of Bootstrap's JavaScript components
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Vue and related libraries
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import the root component and router
import App from './App.vue'
import router from './router'

// Create the Vue application instance
const app = createApp(App)

// Use Pinia for state management
app.use(createPinia())

// Use Vue Router for routing
app.use(router)

// Mount the Vue application to the DOM
app.mount('#app')
