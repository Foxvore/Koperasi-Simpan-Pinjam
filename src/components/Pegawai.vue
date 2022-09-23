<template>
    <Header />
    <!-- ====== Hero Section ====== -->
    <section id="h-pegawai" class="h-pegawai">
        <div class="l-container">
            <h2>Pegawai <b>E-COOP<span>.</span></b></h2><br>
        </div>
    </section>

    <main id="main" class="main">
        <section id="table-pegawai" class="table-pegawai">
            <div class="container">
                <h2><b><i>Daftar Pegawai</i></b></h2>
                <br />
                <table id="pegawai" class="table table-striped responsive nowrap table-hover" style="width:100%">
                    <thead>
                        <tr>
                            <th>No Pegawai</th>
                            <th>Jabatan</th>
                            <th>Nama</th>
                            <th>No Telpon</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>No KTP</th>
                            <th>Alamat</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A001</td>
                            <td>Admin</td>
                            <td>Ammar Ayyis Azizan</td>
                            <td>081234567890</td>
                            <td>ammarngambek@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>Rumah Sakit</td>
                            <td>35 Oktober 1945</td>
                            <td>12345678910</td>
                            <td>jl. mulu tapi beda agama no 13</td>
                        </tr>
                        <tr>
                            <td>S001</td>
                            <td>Staff</td>
                            <td>Aulia Salsabila</td>
                            <td>081234567890</td>
                            <td>aullelah@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>Rumah Sendiri</td>
                            <td>33 Agustus 1945</td>
                            <td>12345678910</td>
                            <td>jl. tapi gaada kenangan no 30</td>
                        </tr>
                        <tr>
                            <td>S002</td>
                            <td>Staff</td>
                            <td>Mochammad Tegar Santoso</td>
                            <td>081234567890</td>
                            <td>tegarhitz@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>Bidan Tetangga</td>
                            <td>40 April 1945</td>
                            <td>12345678910</td>
                            <td>jl. banyak duit makannya jalan no 21</td>
                        </tr>
                        <tr>
                            <td>P001</td>
                            <td>Pimpinan</td>
                            <td>Irham Maulana Johani</td>
                            <td>081234567890</td>
                            <td>irhamcapek@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>Bidan Orang</td>
                            <td>31 Februari 1945</td>
                            <td>jl. doang jadian kagak no 25</td>
                            <td>12345678910</td>
                        </tr>
                        <tr>
                            <td>S003</td>
                            <td>Staff</td>
                            <td>Muhammad Kasyifan Al Haadiy</td>
                            <td>081234567890</td>
                            <td>sipansesatk@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>Rumah Orang</td>
                            <td>-1 Agustus 1945</td>
                            <td>12345678910</td>
                            <td>jl. besoknya beda orang no 24</td>
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
    name: 'Pegawai',
    components: {
        Header,
        Footer
    },
    mounted() {
        window.scrollTo(0,0)
        
        $(document).ready(function() {
            $('#pegawai').DataTable( {
                "lengthMenu": [ [5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"] ],
                responsive: {
                    details: {
                        display: $.fn.dataTable.Responsive.display.modal( {
                            header: function ( row ) {
                                var data = row.data();
                                return 'Details for '+data[2];
                            }


                        } ),
                        renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                            tableClass: 'table'
                        } )
                    }
                }
            }); 
        });

        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({name : 'Home'})
        } else if (user) {
            let cnvrt = JSON.parse(user);
            if (cnvrt.role === "member" || cnvrt.role === "staff") {
                this.$router.push({name : 'Home'})
            } else if (cnvrt.role === "admin") {
                this.$router.push({name : 'Dashboard'})
            }
        }
    }
}
</script>

<style>
/*===== Hero Section =====*/
#h-pegawai {
    width: 100%;
    height: 33vh;
    background: url("../assets/bg-dp.jpg") top center;
    background-size: cover;
    position: relative;
    z-index: 1;
    box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.5);
}

#h-pegawai:before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

#h-pegawai .l-container {
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

#h-pegawai h2 {
    color: #fff;
    font-size: 40px;
    max-width: 80%;
}

@media (max-width: 786px) {
    #h-pegawai h2 {
        font-size: 26px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}
</style>