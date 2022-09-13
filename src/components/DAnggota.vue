<template>
  <Header />
    <!-- ====== Hero Section ====== -->
    <section id="h-anggota" class="h-anggota">
        <div class="l-container">
            <h2>Anggota <b>E-COOP<span>.</span></b></h2><br>
        </div>
    </section>

    <main id="main" class="main">
        <section id="table-anggota" class="table-anggota">
            <div class="container">
                <h2><b><i>Daftar Anggota</i></b></h2>
                <br />
                <table id="danggota" class="table table-striped table-hover" style="width:100%">
                    <thead>
                        <tr>
                            <th>No Anggota</th>
                            <th>Nama</th>
                            <th>No KTP</th>
                            <th>No Telpon</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A001</td>
                            <td>Ammar Ayyis Azizan</td>
                            <td>12345678910</td>
                            <td>085211616326</td>
                            <td>ammarngambek@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>
                                <a href="" class="btn-decline"><i class="fa-solid fa-xmark"></i></a>
                                <a href="" class="btn-accept"><i class="fa-solid fa-check"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>A002</td>
                            <td>Irham Maulana Johani</td>
                            <td>12345678910</td>
                            <td>085211616326</td>
                            <td>imjohani2005@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>
                                <a href="" class="btn-decline"><i class="fa-solid fa-xmark"></i></a>
                                <a href="" class="btn-accept"><i class="fa-solid fa-check"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
    <Footer />
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    name: 'DAnggota',
    components : {
        Header,
        Footer
    },
    mounted() {
        window.scrollTo(0,0)
        
        $(document).ready(function () {
            $('#danggota').DataTable();
        });

        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({name : 'Home'})
        } else if (user) {
            let cnvrt = JSON.parse(user);
            if (cnvrt.role === "member") {
                this.$router.push({name : 'Home'})
            }
        }
    }
}
</script>

<style scoped>
#h-anggota {
    width: 100%;
    height: 30vh;
    background: url("../assets/bg-da.jpg") top center;
    background-size: cover;
    position: relative;
    z-index: 1;
    box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.5);
}

#h-anggota:before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

#h-anggota .l-container {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 15px;
}

#h-anggota h2 {
    color: #fff;
    font-size: 40px;
    max-width: 80%;
}

@media (max-width: 786px) {
    #h-anggota h2 {
        font-size: 26px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}

/*===== Main Section =====*/
.btn-decline i,
.btn-accept i {
    color: #000;
    margin: 0 5px;
    font-size: 18px;
}
</style>