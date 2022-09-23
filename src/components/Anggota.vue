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
                <table id="anggota" class="table table-striped responsive nowrap table-hover" style="width:100%">
                    <thead>
                        <tr>
                            <th>No Anggota</th>
                            <th>Status</th>
                            <th>Nama</th>
                            <th>No Telpon</th>
                            <th>No KTP</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Pekerjaan</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>Alamat</th>
                            <th id="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A001</td>
                            <td>Active</td>
                            <td>Ammar Ayyis Azizan</td>
                            <td>081234567890</td>
                            <td>12345678910</td>
                            <td>ammarngambek@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>Web Development</td>
                            <td>Rumah Sakit</td>
                            <td>35 Oktober 1945</td>
                            <td>jl. mulu tapi beda agama no 13</td>
                            <td id="action">
                                <a href="" class="btn-decline"><i class="fa-solid fa-xmark"></i></a>
                                <a href="" class="btn-accept"><i class="fa-solid fa-check"></i></a>
                            </td>
                        </tr>
                        <!-- <tr>
                            <td>A002</td>
                            <td>Waiting</td>
                            <td>Aulia Salsabila</td>
                            <td>081234567890</td>
                            <td>12345678910</td>
                            <td>aullelah@gmail.com</td>
                            <td>Perempuan</td>
                            <td>Web Development</td>
                            <td>Rumah Sendiri</td>
                            <td>33 Agustus 1945</td>
                            <td>jl. tapi gaada kenangan no 30</td>
                            <td>
                                <a href="" class="btn-decline"><i class="fa-solid fa-xmark"></i></a>
                                <a href="" class="btn-accept"><i class="fa-solid fa-check"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>A003</td>
                            <td>Waiting</td>
                            <td>Mochammad Tegar Santoso</td>
                            <td>081234567890</td>
                            <td>12345678910</td>
                            <td>tegarhitz@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>Web Development</td>
                            <td>Bidan Tetangga</td>
                            <td>40 April 1945</td>
                            <td>jl. banyak duit makannya jalan no 21</td>
                            <td>
                                <a href="" class="btn-decline"><i class="fa-solid fa-xmark"></i></a>
                                <a href="" class="btn-accept"><i class="fa-solid fa-check"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>A004</td>
                            <td>Active</td>
                            <td>Irham Maulana Johani</td>
                            <td>081234567890</td>
                            <td>12345678910</td>
                            <td>irhamcapek@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>Web Development</td>
                            <td>Bidan Orang</td>
                            <td>31 Februari 1945</td>
                            <td>jl. doang jadian kagak no 25</td>
                            <td>
                                <a href="" class="btn-decline"><i class="fa-solid fa-xmark"></i></a>
                                <a href="" class="btn-accept"><i class="fa-solid fa-check"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>A005</td>
                            <td>Waiting</td>
                            <td>Muhammad Kasyifan Al Haadiy</td>
                            <td>081234567890</td>
                            <td>12345678910</td>
                            <td>sipansesatk@gmail.com</td>
                            <td>Laki-Laki</td>
                            <td>Web Development</td>
                            <td>Rumah Orang</td>
                            <td>42 Agustus 1945</td>
                            <td>jl. besoknya beda orang no 24</td>
                            <td>
                                <a href="" class="btn-decline"><i class="fa-solid fa-xmark"></i></a>
                                <a href="" class="btn-accept"><i class="fa-solid fa-check"></i></a>
                            </td>
                        </tr> -->
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
    name: 'Anggota',
    components : {
        Header,
        Footer
    },
    mounted() {
        window.scrollTo(0,0)

        $(document).ready(function() {
            $('#anggota').DataTable( {
                "lengthMenu": [ [5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"] ],
                responsive: {
                    details: {
                        display: $.fn.dataTable.Responsive.display.modal( {
                            header: function ( row ) {
                                var data = row.data();
                                return 'Details for '+data[2];
                            },
                        }),
                        renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                            tableClass: 'table'
                        })
                    }
                }
            });
        });

        let user = localStorage.getItem("user-info"); 
        if (!user) {
            this.$router.push({name : 'Home'})
        } else if (user) {
            let cnvrt = JSON.parse(user);
            if (cnvrt.role === "member") {
                this.$router.push({name : 'Home'})
            } else if (cnvrt.role === "admin") {
                this.$router.push({name : 'Dashboard'})
            }
        }
    }
}
</script>

<style scoped>
/*===== Hero Section =====*/
#h-anggota {
    width: 100%;
    height: 33vh;
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
    font-size: 18px;
}

.btn-decline i:hover,
.btn-accept i:hover {
    color: #FFB037;
}
</style>