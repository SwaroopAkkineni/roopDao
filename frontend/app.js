const app = Vue.createApp({
    data() {
        return {
            project: 'Swaroop Hackathon Project',
            tags: [
                'Vue.js',
                'javascript',
                'webpack',
            ]
        }
    }
})

app.mount('#app')