import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Service from './components/Service.vue'
import Simpan from './components/Simpan.vue'
import Pinjam from './components/Pinjam.vue'
import Profile from './components/Profile.vue'
import DAnggota from './components/DAnggota.vue'
import Pengajuan from './components/Pengajuan.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'Service',
        component: Service,
        path: '/service'
    },
    {
        name: 'Simpan',
        component: Simpan,
        path: '/simpan'
    },
    {
        name: 'Pinjam',
        component: Pinjam,
        path: '/pinjam'
    },
    {
        name: 'Profile',
        component: Profile,
        path: '/profile'
    },
    {
        name: 'DAnggota',
        component: DAnggota,
        path: '/danggota'
    },
    {
        name: 'Pengajuan',
        component: Pengajuan,
        path: '/pengajuan'
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})

export default router;