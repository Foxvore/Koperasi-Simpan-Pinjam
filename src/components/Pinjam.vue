<template>
    <Header />

    <!-- ====== Hero Section ====== -->
    <section id="h-pinjam" class="h-pinjam">
        <div class="l-container">
            <h2>Pinjaman <b>E-COOP<span>.</span></b></h2><br>
        </div>
    </section>

    <main id="main">
        <!-- ====== Calculator Section -->
        <section class="calc" id="calc">
            <div class="container">
                <h2><b>Kalkulator Pinjaman</b></h2><br>
                <div class="card-group" id="c-calc">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><span>1</span>%</h5>
                            <p class="card-text">Bunga Pinjaman Per Bulan</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><span>3-12</span> Bulan</h5>
                            <p class="card-text">Jangka Waktu Pinjaman</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><span>2-50</span> Juta</h5>
                            <p class="card-text">Jumlah Pinjaman</p>
                        </div>
                    </div>
                </div>

                <div class="container text-center" id="slider">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <p>Saya Ingin Meminjam Sebesar :</p>
                            <div class="slider-container">
                                <div class="value-container">
                                    <!-- <button class="minus"><i class="bi bi-dash" id="k-simpan"></i></button> -->
                                    <span id="j-pinjam">Rp. 2.000.000</span>
                                    <!-- <button class="plus"><i class="bi bi-plus" id="t-simpan"></i></button> -->
                                </div>
                                <input type="range" min="1" max="72" value="1" class="slider" id="s-pinjam">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <p>Dalam Jangka Waktu :</p>
                            <div class="slider-container">
                                <div class="value-container">
                                    <!-- <button class="minus"><i class="bi bi-dash" id="k-bulan"></i></button> -->
                                    <span id="jp-bulan">3 Bulan</span>
                                    <!-- <button class="plus"><i class="bi bi-plus" id="t-bulan"></i></button> -->
                                </div>
                                <input type="range" min="3" max="12" value="3" class="slider" id="sp-bulan">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-group" id="j-calc">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Bunga Per Bulan</h5>
                            <span class="card-text">Rp. 20.000</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Bunga</h5>
                            <span class="card-text">Rp. 20.000</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Pembayaran Tiap Bulan</h5>
                            <span class="card-text">Rp. 686.666</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Kembali</h5>
                            <span class="card-text">Rp. 686.666</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ====== Form Section ====== -->
        <section class="form" id="form">
            <div class="containers" id="containers">
                <div class="title">Formulir Pinjaman</div>
                    <div class="content">
                        <form action="#">
                            <div class="pinjam-details">
                                <div class="input-box">
                                    <span class="details">Jumlah Pinjaman</span>
                                    <input type="text" placeholder="Jumlah Pinjaman" id="t-pinjam" value="Rp. 2.000.000" disabled>
                                </div>
                                <div class="input-box">
                                    <span class="details">Jangka Waktu</span>
                                    <input type="text" placeholder="Jangka Waktu" id="jk-pinjam" value="3 Bulan" disabled>
                                </div>
                                <div class="input-box">
                                    <span class="details">Pilih Bank Tujuan</span>
                                    <input type="text" placeholder="No Rekening Koperasi (select option)">
                                </div>
                            </div>
                            <hr>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Nama</span>
                                    <input type="text" placeholder="Masukan Nama" required>
                                </div>
                                <div class="input-box">
                                    <span class="details">Nomor KTP</span>
                                    <input type="text" placeholder="Masukan No KTP" required>
                                </div>
                                <div class="input-box">
                                    <span class="details">Nomor Telfon</span>
                                    <input type="text" placeholder="Masukan No Telp" required>
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
                                <input type="submit" value="Ajukan Pinjaman">
                            </div>
                        </form>
                    </div>
                </div>
        </section>
    </main>
</template>

<script>
import Header from './Header.vue';
export default {
    name : 'Pinjam',
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
#h-pinjam {
    width: 100%;
    height: 31vh;
    background: url("../assets/bg-p.jpg") top center;
    background-size: cover;
    position: relative;
    z-index: 1;
    box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.5);
}

#h-pinjam:before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

#h-pinjam .l-container {
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

#h-pinjam h2 {
    color: #fff;
    font-size: 40px;
    max-width: 80%;
}

@media (max-width: 786px) {
    #h-pinjam {
        height: 100vh;
    }

    #h-pinjam h2 {
        font-size: 26px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}

/*===== Background Color =====*/
#calc {
    background-color: #FFFFFF;
}

#form {
    background-color: #F1F1F1;
}

/*===== Main =====*/
.slider-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
}
  
.plus, .minus {
    border: none;
    font-size: 25px;
    cursor: pointer;
    background-color: transparent;
}
  
.value-container {
    margin-bottom: 10px;
}
  
.value-container span {
    color: #000000;
    font-size: 25px;
}
  
.slider {
    width: 90%;
    height: 5px;
    background: linear-gradient(to right, #fad88d, #FFB037);
    transition: backgound 450ms ease-in;
    -webkit-appearance: none;
    border-radius: 25px;
    box-shadow: 2px 8px 13px -3px rgba(116, 114, 114, 0.75);
}
  
.slider::-webkit-slider-thumb {
    cursor: pointer;
    appearance: none;
    height: 20px;
    width: 20px;
    background-color: #FFFFFF;
    border-radius: 50%;
    border: 4px solid #FFB037;
    box-shadow: 2px 8px 13px -3px rgba(116, 114, 114, 0.75);
}
  
#slider {
    margin-bottom: 40px;
}
  
#slider p {
    text-align: left;
    margin-left: 35px;
}
  
#c-calc {
    text-align: center;
    margin-bottom: 40px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}
  
#c-calc .card {
    border: none;
}
  
#c-calc span {
    font-size: 300%;
}
  
#c-calc h5 {
    color: #FFB037;
}
  
#c-calc p {
    font-weight: 500;
}
  
#j-calc {
    margin-bottom: 30px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}
  
#j-calc .card {
    border: none;
    text-align: center;
}
  
#j-calc h5 {
    font-weight: 600;
    color: #FFB037;
}
  
#j-calc span {
    color: #000000;
}
  
#containers{
    max-width: 1300px;
    width: 100%;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    align-items: center;
    margin-right: auto;
    margin-left: auto;
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
  
.content form .user-details, 
.content form .pinjam-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}
  
form .user-details .input-box, 
form .pinjam-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}
  
form .input-box span.details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}
  
.pinjam-details .input-box input, 
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
  
.user-details .input-box input:focus,
.pinjam-details .input-box input:focus {
    border-color: #FFB037;
}
  
form .button{
    height: 45px;
    margin: 35px 0
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
  
form .button input:hover {
    background: #ffc955;
}
</style>