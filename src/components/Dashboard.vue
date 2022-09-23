<template>
    <Sidebar />

    <main class="main" id="main">
        <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">Home</li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div>

        <section class="section dashboard">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row info">

                        <div class="col-xxl-3 col-md-6">
                            <div class="card info-card">
                                <div class="card-body">
                                    <router-link to="/a-pegawai"><h5 class="card-title">Total Pegawai</h5></router-link>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="fa-solid fa-user-tie"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6>0 Orang</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-3 col-md-6">
                            <div class="card info-card">
                                <div class="card-body">
                                    <router-link to="a-anggota"><h5 class="card-title">Total Anggota</h5></router-link>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="fa-solid fa-users"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6>0 Orang</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- End Revenue Card -->

                        <div class="col-xxl-3 col-md-6">
                            <div class="card info-card">
                                <div class="card-body">
                                    <router-link to="a-simpanan"><h5 class="card-title">Total Simpanan</h5></router-link>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-safe2-fill"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6>0 Record</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-3 col-md-6">
                            <div class="card info-card">
                                <div class="card-body">
                                    <router-link to="a-pinjaman"><h5 class="card-title">Total Pinjaman</h5></router-link>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="fa-solid fa-hand-holding-dollar"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6>0 Record</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
    name: "Dashboard",
    components : {
        Sidebar
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({name : 'Home'})
        } else if (user) {
            let cnvrt = JSON.parse(user);
            if (cnvrt.role === "member" || cnvrt.role === "staff" || cnvrt.role === "pimpinan") {
                this.$router.push({name : 'Home'})
            }
        }
    }
};
</script>

<style scoped>
/*===== Page Title =====*/
.pagetitle {
    margin: 10px 0;
}

.pagetitle h1 {
    font-size: 24px;
    margin-bottom: 0;
    font-weight: 600;
    color: #ff9900;
}

.breadcrumb-item.active {
    color: #ff9900;
}

/*===== Main =====*/
#main {
    height: 100vh;
    padding: 20px 30px;
    transition: all 0.3s;
    background: #F7F5F2;
}

@media (max-width: 1199px) {
  #main {
    padding: 20px;
  }
}

@media (min-width: 1200px) {
    #main,
    #footer {
        margin-left: 300px;
    }
}

section {
    padding: 20px 0;
}

a {
    color: #212529;
}

/* Info Cards */
.dashboard .info-card {
    padding-bottom: 10px;
    border: none;
}

.dashboard .info-card h6 {
    font-size: 28px;
    color: #444;
    font-weight: 700;
    margin: 0;
    padding: 0;
}

.dashboard .card-icon {
    font-size: 32px;
    line-height: 0;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    flex-grow: 0;
}

.dashboard .card-icon {
    color: #ff9900;
    background: #ffecdf;
}

.info {
    width: 1200px;
}
.card-title {
    margin-bottom: 20px;
}

.card-title::before {
    content: "";
    position: absolute;
    left: 15px;
    top: 40px;
    height: 4px;
    width: 70px;
    border-radius: 5px;
    background: linear-gradient(135deg, #fad88d, #FFB037);
}
</style>