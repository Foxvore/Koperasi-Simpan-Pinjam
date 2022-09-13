<template>
    <Header />
    <!-- ====== Hero Section ====== -->
    <section id="profile" class="profile">
        <div class="l-container">
            <h2>User Profile<span>.</span></h2><br>
        </div>
    </section>

    <main id="main">
        <section id="user-data" class="user-data">
            <div class="container">
                <div class="d-flex align-items-start" id="profile-tabs">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active profile" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <div class="tabs">
                                <i class="fa-solid fa-clipboard-user"></i>
                                <span>Profile</span>
                            </div>
                        </button>
                        <button class="nav-link simpanan" id="v-pills-simpan-tab" data-bs-toggle="pill" data-bs-target="#v-pills-simpan" type="button" role="tab" aria-controls="v-pills-simpan" aria-selected="false">
                            <div class="tabs">
                                <i class="bi bi-safe-fill"></i>
                                <span>Simpanan</span>
                            </div>
                        </button>
                        <button class="nav-link pinjaman" id="v-pills-pinjam-tab" data-bs-toggle="pill" data-bs-target="#v-pills-pinjam" type="button" role="tab" aria-controls="v-pills-pinjam" aria-selected="false">
                            <div class="tabs">
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                                <span>Pinjaman</span>
                            </div>
                        </button>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                            <div class="containers1" id="containers1">
                                <div class="title">Data Diri</div>
                                <p class="status">Status : Not Active</p>
                                <div class="content">
                                    <form action="#">
                                        <div class="user-details">
                                            <div class="input-box pegawai">
                                                <span class="details">Nomor Pegawai</span>
                                                <input type="text" placeholder="Masukan Nomor Pegawai" required>
                                            </div>
                                            <div class="input-box anggota">
                                                <span class="details">Nomor Anggota</span>
                                                <input type="text" placeholder="Masukan Nomor Anggota" required>
                                            </div>
                                            <div class="input-box nama">
                                                <span class="details">Nama</span>
                                                <input type="text" placeholder="Masukan Nama" required>
                                            </div>
                                            <div class="input-box ktp">
                                                <span class="details">Nomor KTP</span>
                                                <input type="text" placeholder="Masukan No KTP" required>
                                            </div>
                                            <div class="input-box telp">
                                                <span class="details">Nomor Telepon</span>
                                                <input type="text" placeholder="Masukan No Telp" required>
                                            </div>
                                            <div class="input-box email">
                                                <span class="details">Email</span>
                                                <input type="email" placeholder="Masukan Email" disabled>
                                            </div>
                                            <div class="input-box jk">
                                                <span class="details">Jenis Kelamin</span>
                                                <select name="gender" id="gender" class="form-select">
                                                    <option value="0">Masukan Jenis Kelamin</option>
                                                    <option value="laki-laki">Laki-Laki</option>
                                                    <option value="perempuan">Perempuan</option>
                                                </select>
                                            </div>
                                            <div class="input-box teml">
                                                <span class="details">Tempat Lahir</span>
                                                <select name="tempat" id="tempat" class="form-select">
                                                    <option value="0">Masukan Tempat Lahir</option>
                                                </select>
                                            </div>
                                            <div class="input-box tangl">
                                                <span class="details">Tanggal Lahir</span>
                                                <input type="date" class="form-control" required>
                                            </div>
                                            <div class="input-box alamat">
                                                <span class="details">Alamat</span>
                                                <input type="text" placeholder="Masukan Alamat" required>
                                            </div>
                                            <div class="input-box pekerjaan">
                                                <span class="details">Pekerjaan</span>
                                                <input type="text" placeholder="Masukan Pekerjaan (select option)" required>
                                            </div>
                                            <div class="input-box jabatan">
                                                <span class="details">Jabatan</span>
                                                <input type="text" placeholder="Masukan Jabatan" disabled>
                                            </div>
                                        </div>
                                        <div class="button">
                                            <input type="submit" value="Ajukan Perubahan Data Diri">
                                        </div>
                                    </form>
                                    <hr class="hr">
                                    <div class="table-bank">
                                        <div id="btn-bank">
                                            <a class="form-modal" data-bs-toggle="modal" data-bs-target="#inputBank"><i class="bi bi-safe2"></i> Tambah Bank</a>
                                        </div>
                                        <table class="table" id="table-bank">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Bank</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-group-divider">
                                                <tr v-for="item in akun_bank" :key="item.id">
                                                    <th>{{ item.id }}</th>
                                                    <td>{{ item.bank }}</td>
                                                    <td>
                                                        <a id="btn-details" data-bs-toggle="modal" data-bs-target="#detailBank"><i class="fa-solid fa-circle-info"></i></a>
                                                        <a href="" id="btn-delete" v-on:click="deleteData(item.id)"><i class="fa-solid fa-trash"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="inputBank" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="title">Masukan Bank</div>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <form>
                                            <div class="modal-body">
                                                <div class="bank-details">
                                                    <div class="input-box">
                                                        <span class="details">Bank</span>
                                                        <input type="text" placeholder="Masukan Bank" required v-model="bank">
                                                        <span v-if="v$.bank.$error" id="error">
                                                            {{ v$.bank.$errors[0].$message }}
                                                        </span>
                                                    </div>
                                                    <div class="input-box">
                                                        <span class="details">Nomor Rekening</span>
                                                        <input type="text" placeholder="Masukan No Rekening" required v-model="no_rek">
                                                        <span v-if="v$.no_rek.$error" id="error">
                                                            {{ v$.no_rek.$errors[0].$message }}
                                                        </span>
                                                    </div>
                                                    <div class="input-box">
                                                        <span class="details">Nama Pemilik</span>
                                                        <input type="text" placeholder="Masukan Nama Pemilik" required v-model="pemilik">
                                                        <span v-if="v$.pemilik.$error" id="error">
                                                            {{ v$.pemilik.$errors[0].$message }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-submit" v-on:click="submitBank">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="detailBank" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="title">Bank Details</div>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" v-for="item in akun_bank" :key="item.id">
                                            <div class="details">
                                                <p>Bank : {{ item.bank }}</p>
                                                <p>Nomor Rekening : {{ item.no_rek }}</p>
                                                <p>Pemilik : {{ item.pemilik }}</p>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-simpan" role="tabpanel" aria-labelledby="v-pills-simpan-tab" tabindex="0">
                            <div class="containers1" id="containers1">
                                <div class="title">Simpananmu</div>
                                <div class="content">
                                    <form action="#">
                                        <div class="user-details">
                                            <div class="input-box">
                                                <span class="details">Total Simpanan Wajib</span>
                                                <input type="text" value="Rp. 0" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Total Simpanan Sukarela</span>
                                                <input type="text" value="Rp. 0" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Total Simpanan Berjangka</span>
                                                <input type="text" value="Rp. 0" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Simpanan Yang Dapat Ditarik</span>
                                                <input type="text" value="Rp. 0" disabled>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-pinjam" role="tabpanel" aria-labelledby="v-pills-pinjam-tab" tabindex="0">
                            <div class="containers1" id="containers1">
                                <div class="title">Pinjamanmu</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import Footer from './Footer.vue'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
    name : 'Profile',
    data() {
        return {
            v$: useValidate(),
            bank:"",
            no_rek: "",
            pemilik: "",
            akun_bank: []
        };
    },
    validations() {
        return {
            bank: { required },
            no_rek: { required },
            pemilik: { required }
        };
    },
    async mounted() {
        window.scrollTo(0,0)

        var tab = document.querySelector('#profile-tabs')
        var pill = document.querySelector('#v-pills-tab')
        if (window.innerWidth < 1000) {
            tab.classList.remove('d-flex')
            pill.classList.remove('flex-column')
        } else {
            tab.classList.add('d-flex') 
            pill.classList.add('flex-column')
        }

        const status = document.querySelector(".status");
        const anggota = document.querySelector(".anggota");
        const pegawai = document.querySelector(".pegawai")
        const pekerjaan = document.querySelector(".pekerjaan");
        const jabatan = document.querySelector(".jabatan");
        const bank = document.querySelector(".table-bank");
        const hr = document.querySelector(".hr");
        const simpanan = document.querySelector(".simpanan");
        const pinjaman = document.querySelector(".pinjaman");
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name : 'Home'})
        }
        
        let cnvrt = JSON.parse(user);
        if(cnvrt.role === "pegawai") {
            status.classList.add("hidden")
            anggota.classList.add("hidden")
            pekerjaan.classList.add("hidden")
            bank.classList.add("hidden")
            hr.classList.add("hidden")
            simpanan.classList.add("hidden")
            pinjaman.classList.add("hidden")
        } else if (cnvrt.role === "member") {
            pegawai.classList.add("hidden")
            jabatan.classList.add("hidden")
        }

        if(!user) {
            this.$router.push({name : 'Home'})
        }

        let a_bank = await axios.get("http://localhost:3000/bank");
        this.akun_bank = a_bank.data;
    },
    components : {
        Header,
        Footer
    },
    methods: {
        async submitBank() {
            this.v$.$validate();
            if (!this.v$.$error) {
                let result = await axios.post('http://localhost:3000/bank', {
                    bank: this.bank,
                    no_rek: this.no_rek,
                    pemilik: this.pemilik, 
                });
                if (result.status === 201) {
                    const Toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Input Successfull!'
                    })
                    localStorage.setItem("bank-info", JSON.stringify(result.data));
                    setTimeout(location.reload.bind(location), 1000);
                }
            } else {
                const Toast = this.$swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                })

                Toast.fire({
                    icon: 'error',
                    title: 'Input Failed!'
                })
            }
        },
        async deleteData(id) {
            let result = await axios.delete("http://localhost:3000/bank/" + id);
        }
    }
}
</script>

<style scoped>
/*===== Hero Section =====*/
#error {
    font-size: 12px;
    color: red;
}

#profile {
    width: 100%;
    height: 30vh;
    background: url("../assets/bg-u.jpg") top center;
    background-size: cover;
    position: relative;
    z-index: 1;
    box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.5);
}

#profile:before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

#profile .l-container {
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

#profile h2 {
    color: #fff;
    font-size: 40px;
    max-width: 80%;
}

@media (max-width: 786px) {
    #profile h2 {
        font-size: 26px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}

/*===== Background Color =====*/
#user-data {
    background: #f1f1f1;
}

/*===== Main Section =====*/
#user-data .nav-link {
    color: #000;
    margin-bottom: 5px;
}

#user-data .nav-link:hover {
    color: #FFB037;
}

#user-data .tabs span {
    color: #000;
    font-size: 18px;
}

#user-data .tabs i {
    font-size: 50px;
    margin: 10px;
    display: block;
}

#user-data .nav-pills .nav-link.active {
    color: #000;
    background: #FFB037;
    border: 2px solid #000;
}

#v-pills-tab {
    padding-right: 10px;
}

#containers1 {
    width: 785px;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

#containers1 .title,
#inputBank .title,
#detailBank .title {
    font-size: 25px;
    font-weight: 500;
    position: relative;
}
  
#containers1 .title::before,
#inputBank .title::before,
#detailBank .title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    border-radius: 5px;
    background: linear-gradient(135deg, #fad88d, #FFB037);
}

.content form .user-details,
form .bank-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}

form .user-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}

form .bank-details .input-box {
    margin-bottom: 15px;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
}

form .input-box span.details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}

.user-details .input-box input,
.bank-details .input-box input, select{
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box select:focus,
.bank-details .input-box input:focus,
.bank-details .input-box select:focus {
    border-color: #FFB037;
}

form .button{
    height: 45px;
    margin: 35px 0;
}
  
form .button input {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    border: none;
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #FFB037;
}

#inputBank .btn-submit {
    height: 100%;
    width: 60%;
    border-radius: 5px;
    border: none;
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #FFB037;
    margin-left: auto;
    margin-right: auto;
}
  
form .button input:hover,
div #btn-bank:hover,
#inputBank .btn-submit:hover {
    background: #ffc955;
}

#btn-bank {
    width: 180px;
    height: 50px;
    font-size: 18px;
    background: #FFB037;
    text-align: center;
    border-radius: 5px;
    padding: 12px 0;
    margin-bottom: 10px;
    cursor: pointer;
}

#btn-bank a {
    color: #000;
}

.modal-body {
    padding: 0 16px;
}

#table-bank {
    text-align: center;
    margin: 0 auto;
}

#btn-details, 
#btn-delete {
    font-size: 20px;
    margin: 5px;
    color: #000;
    cursor: pointer;
}

#btn-details:hover, 
#btn-delete:hover {
    color : #FFB037;
}

#detailBank .modal-body {
    padding: 10px 16px;
}

.hidden {
  display: none;
}

/*===== Large Laptop/PC Responsive  */
@media (min-width: 1440px) {
    #containers1 {
        width: 1035px;
    }

    #user-data .tabs {
        width: 200px;
    }
}

/*===== Tablet Responsive  */
@media (min-width: 768px) and (max-width: 900px) {
    #v-pills-profile-tab,
    #v-pills-simpan-tab,
    #v-pills-pinjam-tab {
        width: 220px;
        margin: 0 5px;
    }

    #v-pills-tab {
        padding: 0;
        margin-bottom: 10px;
        margin-left: 3px;
        margin-right: 0 !important;
    }

    #user-data .tabs i {
        font-size: 20px;
        display: inline;
    }

    #containers1 {
        width: 100%;
    }
}

/*===== Phone L Responsive  */
@media (min-width: 425px) and (max-width: 600px) {
    form .user-details .input-box {
        margin-bottom: 15px;
        width: 100%;
    }

    #v-pills-profile-tab,
    #v-pills-simpan-tab,
    #v-pills-pinjam-tab {
        width: 128.5px;
        height: 40px;
        margin: 0 2px;
        padding: 0;
    }

    #v-pills-tab {
        padding: 0;
        margin-bottom: 10px;
        margin-left: 2px;
        margin-right: 0 !important;
    }

    #user-data .tabs span {
        font-size: 16px;
    }

    #user-data .tabs i {
        display: inline;
        font-size: 16px;
    }

    #containers1 {
        width: 100%;
    }

    #btn-details, 
    #btn-delete {
        font-size: 16px;
    }

    #btn-bank {
        width: 150px;
        height: 40px;
        font-size: 16px;
        padding: 8px 0;
    }

    form .button input {
        font-size: 17px;
    }
}

/*===== Phone M Responsive  */
@media (min-width: 350px) and (max-width: 424px) {
    form .user-details .input-box {
        margin-bottom: 15px;
        width: 100%;
    }

    #v-pills-profile-tab,
    #v-pills-simpan-tab,
    #v-pills-pinjam-tab {
        width: 114px;
        height: 40px;
        margin: 0 1px;
        padding: 0;
    }

    #v-pills-tab {
        padding: 0;
        margin-bottom: 10px;
        margin-left: 2px;
        margin-right: 0 !important;
    }

    #user-data .tabs span {
        font-size: 16px;
    }

    #user-data .tabs i {
        display: none;
    }

    #containers1 {
        width: 100%;
    }

    #btn-details, 
    #btn-delete {
        font-size: 16px;
    }

    #btn-bank {
        width: 150px;
        height: 40px;
        font-size: 15px;
        padding: 9px 0;
    }

    form .button input {
       font-size: 16px;
    }
}

/*===== Phone S Responsive  */
@media (max-width: 374px) {
    form .user-details .input-box {
        margin-bottom: 15px;
        width: 100%;
    }

    #v-pills-profile-tab,
    #v-pills-simpan-tab,
    #v-pills-pinjam-tab {
        width: 96px;
        height: 40px;
        margin: 0 1px;
        padding: 0;
    }

    #v-pills-tab {
        padding: 0;
        margin-bottom: 10px;
        margin-left: 2px;
        margin-right: 0 !important;
    }

    #user-data .tabs span {
        font-size: 15px;
    }

    #user-data .tabs i {
        display: none;
    }

    #containers1 {
        width: 100%;
    }

    #btn-details, 
    #btn-delete {
        font-size: 15px;
    }

    #btn-bank {
        width: 150px;
        height: 40px;
        font-size: 15px;
        padding: 9px 0;
    }

    form .button input {
       font-size: 13px;
    }
}
</style>