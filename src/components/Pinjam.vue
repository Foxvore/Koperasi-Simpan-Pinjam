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
            <div class="containers" id="containers" v-motion-slide-visible-once-bottom>
                <div class="title">Formulir Pinjaman</div>
                    <div class="content">
                        <form action="#">
                            <div class="pinjam-details">
                                <div class="input-box">
                                    <span class="details">Jumlah Pinjaman (Rupiah)</span>
                                    <input type="text" placeholder="Jumlah Pinjaman" id="t-pinjam" readonly>
                                </div>
                                <div class="input-box">
                                    <span class="details">Jangka Waktu (Bulan)</span>
                                    <input type="text" placeholder="Jangka Waktu" id="jk-pinjam" readonly>
                                </div>
                                <div class="input-box">
                                    <span class="details">Pilih Bank Tujuan</span>
                                    <input type="text" placeholder="No Rekening Anggota (select option)">
                                </div>
                                <div class="input-box">
                                <span class="details">Upload Foto KTP</span>
                                <input type="file" class="input-file form-control form-control-lg">
                            </div>
                            </div>
                            <hr>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Nama</span>
                                    <input type="text" placeholder="Masukan Nama" readonly>
                                </div>
                                <div class="input-box">
                                    <span class="details">Nomor KTP</span>
                                    <input type="text" placeholder="Masukan No KTP" readonly>
                                </div>
                                <div class="input-box">
                                    <span class="details">Nomor Telfon</span>
                                    <input type="text" placeholder="Masukan No Telp" readonly>
                                </div>
                                <div class="input-box">
                                    <span class="details">Jenis Kelamin</span>
                                    <select name="gender" id="gender" class="form-select" disabled>
                                        <option value="0">Masukan Jenis Kelamin</option>
                                        <option value="laki-laki">Laki-Laki</option>
                                        <option value="perempuan">Perempuan</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Tempat Lahir</span>
                                    <select name="tempat" id="tempat" class="form-select" disabled>
                                        <option value="0">Masukan Tempat Lahir</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Tanggal Lahir</span>
                                    <input type="date" readonly>
                                </div>
                                <div class="input-box">
                                    <span class="details">Alamat</span>
                                    <input type="text" placeholder="Masukan Alamat" readonly>
                                </div>
                                <div class="input-box">
                                    <span class="details">Pekerjaan</span>
                                    <input type="text" placeholder="Masukan Pekerjaan (select option)" readonly>
                                </div>
                                <p class="text-muted">*Jika data diri anda tidak sesuai, silahkan ubah di halaman <a href="/profile">profile</a></p>
                            </div>
                            <div class="button-submit">
                                <input type="submit" value="Ajukan Pinjaman">
                            </div>
                        </form>
                    </div>
                </div>
        </section>
    </main>
    <Footer />
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    name : 'Pinjam',
    mounted() {
        window.scrollTo(0,0)
        // Jumlah pinjaman
        const jPinjam = document.getElementById("j-pinjam");
        const sPinjam = document.getElementById("s-pinjam");
        const tPinjam = document.getElementById("t-pinjam");
        sPinjam.addEventListener('input', function() {
            switch (this.value) {
                case '1':
                    jPinjam.innerHTML = "Rp. 2.000.000"
                    tPinjam.value = 2000000
                    break;
                case '2':
                    jPinjam.innerHTML = "Rp. 2.500.000"
                    tPinjam.value = 2500000
                    break;
                case '3':
                    jPinjam.innerHTML = "Rp. 3.000.000"
                    tPinjam.value = 3000000
                    break;
                case '4':
                    jPinjam.innerHTML = "Rp. 3.500.000"
                    tPinjam.value = 3500000
                    break;
                case '5':
                    jPinjam.innerHTML = "Rp. 4.000.000"
                    tPinjam.value = 4000000
                    break;
                case '6':
                    jPinjam.innerHTML = "Rp. 4.500.000"
                    tPinjam.value = 4500000
                    break;
                case '7':
                    jPinjam.innerHTML = "Rp. 5.000.000"
                    tPinjam.value = 5000000
                    break;
                case '8':
                    jPinjam.innerHTML = "Rp. 5.500.000"
                    tPinjam.value = 5500000
                    break;
                case '9':
                    jPinjam.innerHTML = "Rp. 6.000.000"
                    tPinjam.value = 6000000
                    break;
                case '10':
                    jPinjam.innerHTML = "Rp. 6.500.000"
                    tPinjam.value = 6500000
                    break;
                case '11':
                    jPinjam.innerHTML = "Rp. 7.000.000"
                    tPinjam.value = 7000000
                    break;
                case '12':
                    jPinjam.innerHTML = "Rp. 7.500.000"
                    tPinjam.value = 7500000
                    break;
                case '13':
                    jPinjam.innerHTML = "Rp. 8.000.000"
                    tPinjam.value = 8000000
                    break;
                case '14':
                    jPinjam.innerHTML = "Rp. 8.500.000"
                    tPinjam.value = 8500000
                    break;
                case '15':
                    jPinjam.innerHTML = "Rp. 9.000.000"
                    tPinjam.value = 9000000
                    break;
                case '16':
                    jPinjam.innerHTML = "Rp. 9.500.000"
                    tPinjam.value = 9500000
                    break;
                case '17':
                    jPinjam.innerHTML = "Rp. 10.000.000"
                    tPinjam.value = 10000000
                    break;
                case '18':
                    jPinjam.innerHTML = "Rp. 10.500.000"
                    tPinjam.value = 10500000
                    break;
                case '19':
                    jPinjam.innerHTML = "Rp. 11.000.000"
                    tPinjam.value = 11000000
                    break;
                case '20':
                    jPinjam.innerHTML = "Rp. 11.500.000"
                    tPinjam.value = 11500000
                    break;
                case '21':
                    jPinjam.innerHTML = "Rp. 12.000.000"
                    tPinjam.value = 12000000
                    break;
                case '22':
                    jPinjam.innerHTML = "Rp. 12.500.000"
                    tPinjam.value = 12500000
                    break;
                case '23':
                    jPinjam.innerHTML = "Rp. 13.000.000"
                    tPinjam.value = 13000000
                    break;
                case '24':
                    jPinjam.innerHTML = "Rp. 13.500.000"
                    tPinjam.value = 13500000
                    break;
                case '25':
                    jPinjam.innerHTML = "Rp. 14.000.000"
                    tPinjam.value = 14000000
                    break;
                case '26':
                    jPinjam.innerHTML = "Rp. 14.500.000"
                    tPinjam.value = 14500000
                    break;
                case '27':
                    jPinjam.innerHTML = "Rp. 15.000.000"
                    tPinjam.value = 15000000
                    break;
                case '28':
                    jPinjam.innerHTML = "Rp. 15.500.000"
                    tPinjam.value = 15500000
                    break;
                case '29':
                    jPinjam.innerHTML = "Rp. 16.000.000"
                    tPinjam.value = 16000000 
                    break;
                case '30':
                    jPinjam.innerHTML = "Rp. 16.500.000"
                    tPinjam.value = 16500000
                    break;
                case '31':
                    jPinjam.innerHTML = "Rp. 17.000.000"
                    tPinjam.value = 17000000
                    break;
                case '32':
                    jPinjam.innerHTML = "Rp. 17.500.000"
                    tPinjam.value = 17500000
                    break;
                case '33':
                    jPinjam.innerHTML = "Rp. 18.000.000"
                    tPinjam.value = 18000000
                    break;
                case '34':
                    jPinjam.innerHTML = "Rp. 18.500.000"
                    tPinjam.value = 18500000
                    break;
                case '35':
                    jPinjam.innerHTML = "Rp. 19.000.000"
                    tPinjam.value = 19000000
                    break;
                case '36':
                    jPinjam.innerHTML = "Rp. 19.500.000"
                    tPinjam.value = 19500000
                    break;
                case '37':
                    jPinjam.innerHTML = "Rp. 20.000.000"
                    tPinjam.value = 20000000
                    break;
                case '38':
                    jPinjam.innerHTML = "Rp. 20.500.000"
                    tPinjam.value = 20500000
                    break;
                case '39':
                    jPinjam.innerHTML = "Rp. 21.000.000"
                    tPinjam.value = 21000000
                    break;
                case '40':
                    jPinjam.innerHTML = "Rp. 21.500.000"
                    tPinjam.value = 21500000
                    break;
                case '41':
                    jPinjam.innerHTML = "Rp. 22.000.000"
                    tPinjam.value = 22000000
                    break;
                case '42':
                    jPinjam.innerHTML = "Rp. 22.500.000"
                    tPinjam.value = 22500000
                    break;
                case '43':
                    jPinjam.innerHTML = "Rp. 23.000.000"
                    tPinjam.value = 23000000
                    break;
                case '44':
                    jPinjam.innerHTML = "Rp. 23.500.000"
                    tPinjam.value = 23500000 
                    break;
                case '45':
                    jPinjam.innerHTML = "Rp. 24.000.000"
                    tPinjam.value = 24000000
                    break;
                case '46':
                    jPinjam.innerHTML = "Rp. 24.500.000"
                    tPinjam.value = 24500000
                    break;
                case '47':
                    jPinjam.innerHTML = "Rp. 25.000.000"
                    tPinjam.value = 25000000
                    break;
                case '48':
                    jPinjam.innerHTML = "Rp. 26.000.000"
                    tPinjam.value = 26000000
                    break;
                case '49':
                    jPinjam.innerHTML = "Rp. 27.000.000"
                    tPinjam.value = 27000000
                    break;
                case '50':
                    jPinjam.innerHTML = "Rp. 28.000.000" 
                    tPinjam.value = 28000000
                    break;
                case '51':
                    jPinjam.innerHTML = "Rp. 29.000.000" 
                    tPinjam.value = 29000000
                    break;
                case '52':
                    jPinjam.innerHTML = "Rp. 30.000.000"
                    tPinjam.value = 30000000
                    break;
                case '53':
                    jPinjam.innerHTML = "Rp. 31.000.000"
                    tPinjam.value = 31000000
                    break;
                case '54':
                    jPinjam.innerHTML = "Rp. 32.000.000"
                    tPinjam.value = 32000000
                    break;
                case '55':
                    jPinjam.innerHTML = "Rp. 33.000.000"
                    tPinjam.value = 33000000
                    break;
                case '56':
                    jPinjam.innerHTML = "Rp. 34.000.000"
                    tPinjam.value = 34000000
                    break;
                case '57':
                    jPinjam.innerHTML = "Rp. 35.000.000"
                    tPinjam.value = 35000.000
                    break;
                case '58':
                    jPinjam.innerHTML = "Rp. 36.000.000" 
                    tPinjam.value = 36000000
                    break;
                case '59':
                    jPinjam.innerHTML = "Rp. 37.000.000"
                    tPinjam.value = 37000000
                    break;
                case '60':
                    jPinjam.innerHTML = "Rp. 38.000.000"
                    tPinjam.value = 38000000
                    break;
                case '61':
                    jPinjam.innerHTML = "Rp. 39.000.000"
                    tPinjam.value = 39000000
                    break;
                case '62':
                    jPinjam.innerHTML = "Rp. 40.000.000"
                    tPinjam.value = 40000000
                    break;
                case '63':
                    jPinjam.innerHTML = "Rp. 41.000.000"
                    tPinjam.value = 41000000
                    break;
                case '64':
                    jPinjam.innerHTML = "Rp. 42.000.000"
                    tPinjam.value = 42000000
                    break;
                case '65':
                    jPinjam.innerHTML = "Rp. 43.000.000"
                    tPinjam.value = 43000000
                    break;
                case '66':
                    jPinjam.innerHTML = "Rp. 44.000.000"
                    tPinjam.value = 43000000
                    break;
                case '67':
                    jPinjam.innerHTML = "Rp. 45.000.000"
                    tPinjam.value = 45000000
                    break;
                case '68':
                    jPinjam.innerHTML = "Rp. 46.000.000"
                    tPinjam.value = 46000000
                    break;
                case '69':
                    jPinjam.innerHTML = "Rp. 47.000.000"
                    tPinjam.value = 47000000
                    break;
                case '70':
                    jPinjam.innerHTML = "Rp. 48.000.000"
                    tPinjam.value = 48000000
                    break;
                case '71':
                    jPinjam.innerHTML = "Rp. 49.000.000"
                    tPinjam.value = 49000000
                    break;
                case '72':
                    jPinjam.innerHTML = "Rp. 50.000.000"
                    tPinjam.value = 50000000
                    break;
                default:
                    console.log('default');
            };
        })

        // Tenor Pinjam 
        const jpBulan = document.getElementById("jp-bulan");
        const spBulan = document.getElementById("sp-bulan");
        const jkPinjam = document.getElementById("jk-pinjam");
        spBulan.addEventListener('input', function() {
            jpBulan.innerHTML = this.value + " Bulan";
            jkPinjam.value = parseFloat(this.value);
        })

        const btn = document.querySelector('.button-submit')
        const p_link = document.querySelector('.text-muted')
        let user = localStorage.getItem("user-info");
        if (user) {
            let cnvrt = JSON.parse(user);
            if (cnvrt.role === "pimpinan" || cnvrt.role === "staff") {
                this.$router.push({name : 'Home'})
            } else if (cnvrt.role === "admin") {
                this.$router.push({name : 'Dashboard'})
            }
        } else if (!user) {
            btn.classList.add("hidden")
            p_link.classList.add("hidden")
        }
    },
    components : {
        Header,
        Footer
    }
}
</script>

<style scoped>
/*===== Hero Section =====*/
#h-pinjam {
    width: 100%;
    height: 30vh;
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

@media (max-width: 1000px) {
    #h-pinjam {
        height: 100vh;
        background-attachment: fixed;
    }

    #h-pinjam h2 {
        font-size: 40px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}

@media (max-width: 500px) {
    #h-pinjam h2 {
        font-size: 28px;
        line-height: 30px;
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
    width: 960px;
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
  
form .button-submit{
    height: 45px;
    margin: 35px 0
}
  
form .button-submit input {
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
  
form .button-submit input:hover {
    background: #ffc955;
}

.input-file::-webkit-file-upload-button {
    height: 44px;
}

.hidden {
    display: none;
}

/*===== Large Laptop/PC Responsive  */
@media (min-width: 1440px) {
    #containers {
        width: 1310px;
    }
}

/*===== Tablet Responsive  */
@media (min-width: 768px) and (max-width: 900px) {
    #containers {
        width: 710px;
    }
}

/*===== Phone L Responsive  */
@media (min-width: 425px) and (max-width: 600px) {
    #containers {
        width: 400px;
    }

    form .user-details .input-box, 
    form .pinjam-details .input-box {
        width: 100%;
    }

    #containers .text-muted {
        font-size: 12px;
    }
}

/*===== Phone M Responsive  */
@media (min-width: 350px) and (max-width: 424px) {
    #containers {
        width: 350px;
    }

    form .user-details .input-box, 
    form .pinjam-details .input-box {
        width: 100%;
    }

    #containers .text-muted {
        font-size: 12px;
    }

    form .button-submit input {
        font-size: 18px;
    }
}

/*===== Phone S Responsive  */
@media (max-width: 374px) {
    #containers {
        width: 296px;
    }

    form .user-details .input-box, 
    form .pinjam-details .input-box {
        width: 100%;
    }

    #containers .text-muted {
        font-size: 12px;
    }

    form .button-submit input {
        font-size: 16px;
    }
}
</style>