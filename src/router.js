import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Service from './components/Service.vue'
import Simpan from './components/Simpan.vue'
import Pinjam from './components/Pinjam.vue'
import Profile from './components/Profile.vue'
import Pegawai from './components/Pegawai.vue'
import Anggota from './components/Anggota.vue'
import Pengajuan from './components/Pengajuan.vue'
import Dashboard from './components/Dashboard.vue'
import A_Akun from './components/A-Akun.vue'
import A_Pegawai from './components/A-Pegawai.vue'
import A_Anggota from './components/A-Anggota.vue'
import A_Simpanan from './components/A-Simpanan.vue'
import A_Pinjaman from './components/A-Pinjaman.vue'
import Api from './components/Api.vue'
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
        name: 'Pegawai',
        component: Pegawai,
        path: '/pegawai'
    },
    {
        name: 'Anggota',
        component: Anggota,
        path: '/anggota'
    },
    {
        name: 'Pengajuan',
        component: Pengajuan,
        path: '/pengajuan'
    },
    {
        name: 'Dashboard',
        component: Dashboard,
        path: '/dashboard'
    },
    {
        name: 'A-Akun',
        component: A_Akun,
        path: '/a-akun'
    },
    {
        name: 'A-Pegawai',
        component: A_Pegawai,
        path: '/a-pegawai'
    },
    {
        name: 'A-Anggota',
        component: A_Anggota,
        path: '/a-anggota'
    },
    {
        name: 'A-Simpanan',
        component: A_Simpanan,
        path: '/a-simpanan'
    },
    {
        name: 'A-Pinjaman',
        component: A_Pinjaman,
        path: '/a-pinjaman'
    },
    {
        name: 'Api',
        component: Api,
        path: '/api'
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})

export default router;