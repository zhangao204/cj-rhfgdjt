import {createApp} from 'vue'
import {Quasar} from 'quasar'
import App from './App.vue'
import router from './router'

// Import icon libraries
// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')
