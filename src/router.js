import{ createRouter, createWebHistory } from 'vue-router'
import StreamRoom from './pages/StreamRoom.vue'
import HomePage from './pages/HomePage.vue'


export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/', component:HomePage},
        {path: '/:username', component:StreamRoom},
        {path: '/TwitchDanmu', component:HomePage},
        {path: '/TwitchDanmu/:username', component:StreamRoom}
    ]
})
