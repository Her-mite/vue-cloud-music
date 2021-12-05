import {createRouter, createWebHistory} from 'vue-router'

const Index = () => import('@/views/MusicHome/Index.vue')
// const Discover = () => import('views/discover/Discover.vue')

const routes = [
    { path: '/', redirect: {name: 'index' } },
    {
        name:'index',
        path: '/index',
        component: Index,
        // redirect: '/discover',
        // children: [
        //     {
        //         path: '/discover',
        //         component: Discover,
        //         redirect: '/discover/recommend',
        //         children: [
        //             { path: '/discover/recommend', component: Recommend },
                 
        //         ]
        //     },
        //     {
        //         path: '/video', component: Video,
        //         redirect: '/video/videolist',
        //         children: [
        //             { path: '/video/videolist', component: VideoList },
        //             { path: '/video/mvlist', component: MvList },
        //         ]
        //     },
        // ]
    }
]

const router = new createRouter({
    routes,
    mode: 'history',
    history: createWebHistory(process.env.BASE_URL)
})

export default router
