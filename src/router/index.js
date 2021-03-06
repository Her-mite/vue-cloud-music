import {createRouter, createWebHistory} from 'vue-router'

const Index = () => import('@/views/MusicHome/Index.vue')
const Discover = () => import('@/views/Discover/Discover.vue')
const Recommend = () => import('@/views/Discover/Detail/Recommend.vue')
const RankList = () => import('@/views/Discover/Detail/RankList.vue')
const Singer = () => import('@/views/Discover/Detail/Singer.vue')
 
const routes = [
    { path: '/', redirect: {name: 'index' } },
    {
        name:'index',
        path: '/index',
        component: Index,
        redirect: '/discover',
        children: [
            {
                path: '/discover',
                component: Discover,
                redirect: '/discover/recommend',
                children: [
                    { path: '/discover/recommend', component: Recommend },
                    { path: '/discover/ranklist', component: RankList },
                    { path: '/discover/singer', component: Singer },
                ]
            },
            // {
            //     path: '/video', component: Video,
            //     redirect: '/video/videolist',
            //     children: [
            //         { path: '/video/videolist', component: VideoList },
            //         { path: '/video/mvlist', component: MvList },
            //     ]
            // },
        ]
    }
]

const router = new createRouter({
    routes,
    mode: 'history',
    history: createWebHistory(process.env.BASE_URL)
})

export default router
