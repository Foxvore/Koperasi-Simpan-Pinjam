<template>
    <Header />
    <!-- ====== Hero Section ====== -->
    <section id="h-simpan" class="h-simpan">
        <div class="l-container">
            <h2>Simpanan <b>E-COOP<span>.</span></b></h2><br>
        </div>
    </section>

    <main id="main" class="main">
        <!--===== Table Section =====-->
        <section id="table-psimpan" class="table-psimpan">
            <div class="container">
                <h2><b><i>Pengajuan Simpanan</i></b></h2>
                <br />
                <table id="psimpan" class="table table-striped" style="width:100%">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Jumlah</th>
                            <th>Jangka</th>
                            <th>No Telpon</th>
                            <th>No KTP</th>
                            <th>Tanggal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Irham Maulana Johani</td>
                            <td>Rp. 10.000.000</td>
                            <td>10 Bulan</td>
                            <td>085211616326</td>
                            <td>12345678910</td>
                            <td>25-2-2023</td>
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
    name: 'PSimpan',
    components : {
        Header,
        Footer
    },
    mounted() {
        window.scrollTo(0,0)
        
        $(document).ready(function () {
            $('#psimpan').DataTable();
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
};
</script>

<style scoped>
/*===== Hero Section =====*/
#h-simpan {
    width: 100%;
    height: 30vh;
    background: url("../assets/bg-s.jpg") top center;
    background-size: cover;
    position: relative;
    z-index: 1;
    box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.5);
}

#h-simpan:before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

#h-simpan .l-container {
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

#h-simpan h2 {
    color: #fff;
    font-size: 40px;
    max-width: 80%;
}

@media (max-width: 786px) {
    #h-simpan h2 {
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