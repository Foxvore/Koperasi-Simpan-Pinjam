<template>
    <Header />
    <!-- ====== Hero Section ====== -->
    <section id="h-pengajuan" class="h-pengajuan">
        <div class="l-container">
            <h2>Pengajuan Transaksi <b>E-COOP<span>.</span></b></h2><br>
        </div>
    </section>

    <main id="main" class="main">
        <!--===== Table Section =====-->
        <section id="table-psimpan" class="table-psimpan">
            <div class="container">
                <h2><b><i>Daftar Pengajuan</i></b></h2>
                <br />
                <table id="transaksi" class="table table-striped responsive nowrap table-hover" style="width:100%">
                    <thead>
                        <tr>
                            <th>No Transaksi</th>
                            <th>Id Anggota</th>
                            <th>Nama</th>
                            <th>Jumlah</th>
                            <th>Jangka</th>
                            <th>No Telpon</th>
                            <th>Tanggal</th>
                            <th>Jenis</th>
                            <th>Pekerjaan</th>
                            <th>Bank</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S001</td>
                            <td>A004</td>
                            <td>Irham Maulana Johani</td>
                            <td>Rp. 10.000.000</td>
                            <td>5 Bulan</td>
                            <td>085211616326</td>
                            <td>25 Oktober 22</td>
                            <td>Simpanan Berjangka</td>
                            <td>Dokter</td>
                            <td>BSI - 123456778910</td>
                            <td>
                                <a href="" class="btn-decline"><i class="fa-solid fa-xmark"></i></a>
                                <a href="" class="btn-accept"><i class="fa-solid fa-check"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>P001</td>
                            <td>A004</td>
                            <td>Irham Maulana Johani</td>
                            <td>Rp. 50.000.000</td>
                            <td>12 Bulan</td>
                            <td>085211616326</td>
                            <td>30 Desember 22</td>
                            <td>Pinjaman</td>
                            <td>Dokter</td>
                            <td>Mandiri - 12345678910</td>
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
    name: 'Pengajuan',
    components : {
        Header,
        Footer
    },
    mounted() {
        window.scrollTo(0,0)
        
        $(document).ready(function() {
            $('#transaksi').DataTable( {
                "lengthMenu": [ [5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"] ],
                responsive: {
                    details: {
                        display: $.fn.dataTable.Responsive.display.modal( {
                            header: function ( row ) {
                                var data = row.data();
                                return 'Details for '+data[1];
                            }


                        } ),
                        renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                            tableClass: 'table'
                        } )
                    }
                }
            } );
        } );

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
#h-pengajuan {
    width: 100%;
    height: 30vh;
    background: url("../assets/bg-pj.jpg") top center;
    background-size: cover;
    position: relative;
    z-index: 1;
    box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.5);
}

#h-pengajuan:before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

#h-pengajuan .l-container {
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

#h-pengajuan h2 {
    color: #fff;
    font-size: 40px;
    max-width: 80%;
}

@media (max-width: 786px) {
    #h-pengajuan h2 {
        font-size: 26px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}

/*===== Main Section =====*/
.btn-decline i,
.btn-accept i {
    color: #000;
    font-size: 18px;
}

.btn-decline i:hover,
.btn-accept i:hover {
    color: #FFB037;
}
</style>