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
                        <button class="nav-link active profile-anggota" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile-anggota" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
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
                        <div class="tab-pane fade show active" id="v-pills-profile-anggota" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                            <div class="containers1" id="containers1">
                                <div class="title">Data Diri</div>
                                <p class="status">Status : Not Active</p>
                                <div class="content">
                                    <div class="user-details">
                                        <div class="input-box member">
                                            <span class="details">Nomor Anggota</span>
                                            <input type="text" placeholder="Nomor Pegawai Akan Terisi Otomatis" class="no-anggota" v-model="no_anggota" disabled>
                                        </div>
                                        <div class="input-box nama">
                                            <span class="details">Nama</span>
                                            <input type="text" placeholder="Masukan Nama" v-model="nama" required>
                                        </div>
                                        <div class="input-box ktp">
                                            <span class="details">Nomor KTP</span>
                                            <input type="text" placeholder="Masukan No KTP" v-model="no_ktp" required>
                                        </div>
                                        <div class="input-box telp">
                                            <span class="details">Nomor Telepon</span>
                                            <input type="text" placeholder="Masukan No Telp" v-model="no_telp" required>
                                        </div>
                                        <div class="input-box email">
                                            <span class="details">Email</span>
                                            <input type="email" placeholder="Masukan Email" v-model="email" disabled>
                                        </div>
                                        <div class="input-box jk">
                                            <span class="details">Jenis Kelamin</span>
                                            <select name="gender" id="gender" class="form-select" v-model="jenis_kelamin" required>
                                                <option value="pria">Pria</option>
                                                <option value="wanita">Wanita</option>
                                            </select>
                                        </div>
                                        <div class="input-box teml">
                                            <span class="details">Tempat Lahir</span>
                                            <input type="text" placeholder="e.g Kabupaten/Kota, Provinsi" v-model="tempat_lahir" required>
                                        </div>
                                        <div class="input-box tangl">
                                            <span class="details">Tanggal Lahir</span>
                                            <input type="date" class="form-control" v-model="tanggal_lahir" required>
                                        </div>
                                        <div class="input-box alamat">
                                            <span class="details">Alamat</span>
                                            <input type="text" placeholder="Masukan Alamat" v-model="alamat" required>
                                        </div>
                                        <div class="input-box pekerjaan">
                                            <span class="details">Pekerjaan</span>
                                            <select class="form-select" v-model="id_pekerjaan" required>
                                                <option v-for="item in pekerjaan" :key="item.id" :value="item.id">
                                                    {{ item.pekerjaan }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="button" id="btn_profile">
                                        <input type="submit" value="Ajukan Perubahan Data Diri" class="submit" v-on:click="submitProfile">
                                    </div>
                                    <div class="button hidden" id="btn_edit">
                                        <input class="submit" value="Edit Data Diri" v-on:click="editProfile(this.id)">
                                    </div>
                                    <hr class="hr">
                                    <div class="table-bank">
                                        <div id="btn-bank" class="hidden">
                                            <a class="form-modal" data-bs-toggle="modal" data-bs-target="#inputBank"><i class="bi bi-safe2"></i> Tambah Bank</a>
                                        </div>
                                        <table id="bank" class="table table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Bank</th>
                                                    <th>Nama Pemilik</th>
                                                    <th class="action">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-group-divider">
                                                <tr v-for="item in rekening" :key="item.id">
                                                    <td>{{ item.namaBank.nama_bank }}</td>
                                                    <td>{{ item.nama_pemilik_bank }}</td>
                                                    <td class="action">
                                                        <button id="btn-info" v-on:click="showBank(item.id)"><i class="fa-solid fa-circle-info"></i></button>
                                                        <button id="btn-delete" v-on:click="deleteBank(item.id)"><i class="fa-solid fa-trash"></i></button>
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
                                                        <select class="form-select" v-model="id_bank" required>
                                                            <option v-for="item in nama_bank" :key="item.id" :value="item.id">
                                                                {{ item.nama_bank }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="input-box">
                                                        <span class="details">Nomor Rekening</span>
                                                        <input type="text" placeholder="Masukan No Rekening" required v-model="no_rek">
                                                    </div>
                                                    <div class="input-box">
                                                        <span class="details">Nama Pemilik</span>
                                                        <input type="text" placeholder="Masukan Nama Pemilik" required v-model="pemilik">
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
                                    <hr>
                                    <div class="container">
                                        <table id="simpan" class="table table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Id Simpanan</th>
                                                    <th>Status</th>
                                                    <th>Jumlah</th>
                                                    <th>Jangka</th>
                                                    <th>Per Bulan</th>
                                                    <th>Menuju Selesai</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-group-divider">
                                                <tr>
                                                    <td>S001</td>
                                                    <td>Selesai</td>
                                                    <td>Rp. 15.000.000</td>
                                                    <td>5 Bulan</td>
                                                    <td>Rp. 3.000.000</td>
                                                    <td>Rp. 0.000.000</td>
                                                    <td><a href="" class="btn-bayar">Simpan</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-pinjam" role="tabpanel" aria-labelledby="v-pills-pinjam-tab" tabindex="0">
                            <div class="containers1" id="containers1">
                                <div class="title">Pinjamanmu</div>
                                <br>
                                <div class="container">
                                    <table id="pinjam" class="table table-striped responsive nowrap table-hover">
                                        <thead>
                                            <tr>
                                                <th>Id Pinjaman</th>
                                                <th>Status</th>
                                                <th>Jumlah</th>
                                                <th>Jangka</th>
                                                <th>Per Bulan</th>
                                                <th>Menuju Lunas</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr>
                                                <td>P001</td>
                                                <td>Lunas</td>
                                                <td>Rp. 15.000.000</td>
                                                <td>5 Bulan</td>
                                                <td>Rp. 3.000.000</td>
                                                <td>Rp. 0.000.000</td>
                                                <td class="action">
                                                    <div class="btn-bayar hidden">
                                                        <a href="">Bayar</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>P002</td>
                                                <td>Proses</td>
                                                <td>Rp. 10.000.000</td>
                                                <td>10 Bulan</td>
                                                <td>Rp. 1.000.000</td>
                                                <td>Rp. 3.000.000</td>
                                                <td class="action">
                                                    <div class="btn-bayar">
                                                        <a href="">Bayar</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
export default {
    name : 'M-Profile',
    data() {
        return {
            id: "",
            nama: "",
            no_ktp: "",
            no_telp: "",
            jenis_kelamin: "",
            tempat_lahir: "",
            tanggal_lahir: "",
            alamat: "",
            id_pekerjaan: "",

            no_anggota:"",
            email: "",

            id_bank: "",
            bank: "",
            no_rek: "",
            pemilik: "",

            nama_bank: [],
            rekening: [],
            pekerjaan: []
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

        var kuki = $cookies.get("jwt")
        if (!kuki) {
            this.$router.push({name : 'Home'})
        }
        
        var acc = await axios.get("http://localhost:8080/api/v1/userInfo", {withCredentials: true});
        this.email = acc.data.data.email
        if(acc) { // Login
            if (acc.data.data.role === 1) { // Admin
                this.$router.push({name : 'Dashboard'})
            } else if (acc.data.data.role === 2 || acc.data.data.role === 3) { // Pimpinan & Staff
                this.$router.push({name : 'Home'})
            }
        } 
        
        this.getNamaBank();
        this.getPekerjaan();
        this.getAnggota();
        this.validasi();
    },
    components : {
        Header,
        Footer
    },
    methods: {
        async getNamaBank () {
            let n_bank = await axios.get("http://localhost:8080/api/v1/namaBank");
            this.nama_bank = n_bank.data.data;
        },
        async getPekerjaan() {
            let job = await axios.get("http://localhost:8080/api/v1/pekerjaan");
            this.pekerjaan = job.data.data;
        },
        async getAnggota() {
            let profile = await axios.get("http://localhost:8080/api/v1/anggota/info" , {withCredentials: true});
            this.id = profile.data.data.id
            this.no_anggota = profile.data.data.no_anggota;
            this.nama = profile.data.data.nama;
            this.no_telp = profile.data.data.no_hp;
            this.no_ktp = profile.data.data.no_ktp;
            this.jenis_kelamin = profile.data.data.gender;
            this.tempat_lahir = profile.data.data.tempat_lahir;
            this.tanggal_lahir = profile.data.data.tanggal_lahir;
            this.alamat = profile.data.data.alamat;
            this.id_pekerjaan = profile.data.data.pekerjaan_id;
        },
        async submitProfile() {
            let result = await axios.post("http://localhost:8080/api/v1/anggota", {
                nama: this.nama,
                no_hp: this.no_telp,
                no_ktp: this.no_ktp,
                gender: this.jenis_kelamin,
                tempat_lahir: this.tempat_lahir,
                tanggal_lahir: this.tanggal_lahir,
                alamat: this.alamat,
                pekerjaan_id: this.id_pekerjaan
            }, { withCredentials: true });
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
        async editProfile(id) {
            let result = await axios.put("http://localhost:8080/api/v1/anggota/" + id, {
                nama: this.nama,
                no_hp: this.no_telp,
                no_ktp: this.no_ktp,
                gender: this.jenis_kelamin,
                tempat_lahir: this.tempat_lahir,
                tanggal_lahir: this.tanggal_lahir,
                alamat: this.alamat,
                pekerjaan_id: this.id_pekerjaan
            }, { withCredentials: true });
            if (result.status === 200) {
                const Toast = this.$swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Edit Successfull!'
                })
                localStorage.setItem("bank-info", JSON.stringify(result.data));
                setTimeout(location.reload.bind(location), 1000);
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
        async submitBank() {
            let profile = await axios.get("http://localhost:8080/api/v1/anggota/info" , {withCredentials: true});
            var id = profile.data.data.id
            let result = await axios.post('http://localhost:8080/api/v1/bank', {
                nama_bank_id: this.id_bank,
                no_rek: this.no_rek,
                nama_pemilik_bank: this.pemilik, 
                jenis_kepemilikan_id: 1,
                anggota_id: id
            }, {withCredentials: true});
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
        async deleteBank(id) {
            let result = await axios.delete("http://localhost:8080/api/v1/bank/" + id, { withCredentials: true });
            if (result.status === 200) {
                location.reload();
            }
        },
        async showBank(id) {
            let a_bank = await axios.get("http://localhost:8080/api/v1/bank?Id=" + id, { withCredentials: true });
            var modalWrap = null;
            if (modalWrap !== null) {
                modalWrap.remove();
            }

            modalWrap = document.createElement('div');
            modalWrap.innerHTML = `
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Info Bank ${a_bank.data.data[0].namaBank.nama_bank}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Bank : ${a_bank.data.data[0].namaBank.nama_bank} </p>
                                <p>No Rekening : ${a_bank.data.data[0].no_rek} </p>
                                <p>Nama Pemilik : ${a_bank.data.data[0].nama_pemilik_bank}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.append(modalWrap);

            var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
            modal.show();
        },
        async validasi() {
            const btn_bank = document.querySelector("#btn-bank")
            const btn_profile = document.querySelector("#btn_profile")
            const btn_edit = document.querySelector("#btn_edit")

            var akun = await axios.get("http://localhost:8080/api/v1/anggota/info", {withCredentials: true})
            var no_anggota = akun.data.data.no_anggota;
            if (akun.status === 200) {
                btn_profile.classList.add("hidden")
                btn_edit.classList.remove("hidden")
                btn_bank.classList.remove("hidden")
                let member = await axios.get("http://localhost:8080/api/v1/anggota?search=" + no_anggota, {withCredentials: true});
                this.rekening = member.data.data[0].bank;
            } 
        }
    }
}
</script>

<style scoped>
/*===== Hero Section =====*/
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
#error {
    font-size: 12px;
    color: red;
}

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

.content .user-details,
.bank-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}

.user-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}

.bank-details .input-box {
    margin-bottom: 15px;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
}

.input-box span.details {
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

.button{
    height: 45px;
    margin: 35px 0;
}
  
.button input {
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
    text-align: center;
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
  
.button input:hover,
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

#btn-delete,
#btn-info {
    font-size: 20px;
    margin: 5px;
    color: #000;
    cursor: pointer;
    border: none;
    background: transparent;
}

#btn-delete:hover,
#btn-info:hover {
    color : #FFB037;
}

#bank {
    text-align: center;
}

#bank a,
#simpan a,
#pinjam a {
    color: #000;
}

#bank a:hover,
#simpan a:hover,
#pinjam a:hover {
    color: #FFB037;
}

.hidden {
  display: none;
}

select:focus>option:checked {
  background: #ffc955 !important;
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
    .user-details .input-box {
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
 
    #btn-delete {
        font-size: 16px;
    }

    #btn-bank {
        width: 150px;
        height: 40px;
        font-size: 16px;
        padding: 8px 0;
    }

    .button input {
        font-size: 17px;
    }
}

/*===== Phone M Responsive  */
@media (min-width: 350px) and (max-width: 424px) {
    .user-details .input-box {
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

    #btn-delete {
        font-size: 16px;
    }

    #btn-bank {
        width: 150px;
        height: 40px;
        font-size: 15px;
        padding: 9px 0;
    }

    .button input {
       font-size: 16px;
    }
}

/*===== Phone S Responsive  */
@media (max-width: 374px) {
    .user-details .input-box {
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

    #btn-delete {
        font-size: 15px;
    }

    #btn-bank {
        width: 150px;
        height: 40px;
        font-size: 15px;
        padding: 9px 0;
    }

    .button input {
       font-size: 13px;
    }
}
</style>