import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// Create a new VueX store instance.
const store = createStore({
    state: {
        currentWebPage: 'adadas'
    },
    mutations: {
      setCurrentWebPageMutation (state, payload) {
        state.currentWebPage = payload
      }
    },
    getters: {
        currentWebPageGetter: state => `${state.currentWebPage}`
    },
    actions: {
        pooperAction (context, payload) {
          context.commit('setCurrentWebPageMutation', payload)
        }
      }
  }, 
)
  
const app = createApp(App).use(store)
app.mount('#app')
// create Vue instance