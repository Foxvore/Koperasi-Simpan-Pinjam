<template>
    <Header />

    <!-- ====== Hero Section ====== -->
    <section id="profile" class="profile">
        <div class="l-container">
            <h2>User Profile<span>.</span></h2><br>
        </div>
    </section>

    <main id="main">
        <section>
            <div class="container">
                <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <div class="tabs">
                                <i class="fa-solid fa-clipboard-user"></i><br>
                                <span>Profile</span>
                            </div>
                        </button>
                        <button class="nav-link" id="v-pills-simpan-tab" data-bs-toggle="pill" data-bs-target="#v-pills-simpan" type="button" role="tab" aria-controls="v-pills-simpan" aria-selected="false">
                            <div class="tabs">
                                <i class="bi bi-safe-fill"></i><br>
                                <span>Simpanan</span>
                            </div>
                        </button>
                        <button class="nav-link" id="v-pills-pinjam-tab" data-bs-toggle="pill" data-bs-target="#v-pills-pinjam" type="button" role="tab" aria-controls="v-pills-pinjam" aria-selected="false">
                            <div class="tabs">
                                <i class="fa-solid fa-hand-holding-dollar"></i><br>
                                <span>Pinjaman</span>
                            </div>
                        </button>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                            <div class="containers" id="containers">
                                <div class="title">Data Diri</div>
                                <p>Status : Active</p>
                                <div class="content">
                                    <form action="#">
                                        <div class="user-details">
                                            <div class="input-box">
                                                <span class="details">Nomor Anggota</span>
                                                <input type="text" placeholder="Masukan Nomor Anggota" required>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Nama</span>
                                                <input type="text" placeholder="Masukan Nama" required>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Nomor KTP</span>
                                                <input type="text" placeholder="Masukan No KTP" required>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Nomor Telepon</span>
                                                <input type="text" placeholder="Masukan No Telp" required>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Email</span>
                                                <input type="email" placeholder="Masukan Email" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Jenis Kelamin</span>
                                                <select name="gender" id="gender">
                                                    <option value="0">Masukan Jenis Kelamin</option>
                                                    <option value="laki-laki">Laki-Laki</option>
                                                    <option value="perempuan">Perempuan</option>
                                                </select>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Tempat Lahir</span>
                                                <select name="tempat" id="tempat">
                                                    <option value="0">Masukan Tempat Lahir</option>
                                                </select>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Tanggal Lahir</span>
                                                <input type="date" required>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Alamat</span>
                                                <input type="text" placeholder="Masukan Alamat" required>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Pekerjaan</span>
                                                <input type="text" placeholder="Masukan Pekerjaan (select option)" required>
                                            </div>
                                        </div>
                                        <div class="button">
                                            <input type="submit" value="Ajukan Perubahan Data Diri">
                                        </div>
                                    </form>
                                    <hr>
                                    <form action="">
                                        <div id="btn-bank">
                                            <a href=""><i class="bi bi-safe2"></i> Tambah Bank</a>
                                        </div>
                                        <table class="table" id="table-bank">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Bank</th>
                                                    <th scope="col">Pemilik</th>
                                                    <th scope="col">No Rekening</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-group-divider">
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BNI</td>
                                                    <td>Irham Maulana Johani</td>
                                                    <td>8185186185816581</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-simpan" role="tabpanel" aria-labelledby="v-pills-simpan-tab" tabindex="0">...</div>
                        <div class="tab-pane fade" id="v-pills-pinjam" role="tabpanel" aria-labelledby="v-pills-pinjam-tab" tabindex="0">...</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Header from './Header.vue';
export default {
    name : 'Profile',
    components : {
        Header
    },
    mounted() {
        window.scrollTo(0,0)
    }
}
</script>

<style>
/*===== Hero Section =====*/
#profile {
    width: 100%;
    height: 31vh;
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
    #profile {
        height: 100vh;
    }

    #profile h2 {
        font-size: 26px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}

.nav-link {
    color: #000;
}

.nav-link:hover {
    color: #FFB037;
}

.tabs {
    width: 200px;
}

.tabs span {
    color: #000;
    font-size: 18px;
}

.tabs i {
    font-size: 50px;
    margin: 10px;
}

.nav-pills .nav-link.active {
    color: #000;
    background: #FFB037;
    border: 2px solid #000;
}

#v-pills-tab {
    padding-right: 10px;
}

#container{
    max-width: 936px;
    width: 100%;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

#containers .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
}
  
#containers .title::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    border-radius: 5px;
    background: linear-gradient(135deg, #fad88d, #FFB037);
}

.content form .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}

form .user-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}

form .input-box span.details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}

.user-details .input-box input, select{
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

.user-details .input-box input:focus {
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
  
form .button input:hover,
form #btn-bank:hover {
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
}

#btn-bank a {
    color: #000;
}

#table-bank {
    text-align: center;
}
</style>