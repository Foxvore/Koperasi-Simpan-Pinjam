<template>
    <Sidebar />

    <main class="main" id="main">
        <div class="pagetitle">
            <h1>Daftar Pegawai</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">Home</li>
                    <li class="breadcrumb-item active">Pegawai</li>
                </ol>
            </nav>
        </div>

        <section>
            <div class="container">
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
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
    name: "A-Pegawai",
    components : {
        Sidebar
    },
    mounted() {
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

.container {
    background: #fff;
    border-radius: 10px;
    padding: 15px;
}
</style>