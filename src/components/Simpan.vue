<template>
    <Header />
    <!-- ====== Hero Section ====== -->
    <section id="h-simpan" class="h-simpan">
        <div class="l-container">
            <h2>Simpanan <b>E-COOP<span>.</span></b></h2><br>
        </div>
    </section>

    <main id="main">
        <!-- ====== Calculator Section ====== -->  
        <section id="calc" class="calc">
            <div class="container">
                <div class="card-group" id="c-calc">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><span>9</span>%</h5>
                            <p class="card-text">Bonus Simpanan Per Tahun</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><span>1-12</span> Bulan</h5>
                            <p class="card-text">Jangka Waktu Simpanan</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><span>2-50</span> Juta</h5>
                            <p class="card-text">Jumlah Simpanan</p>
                        </div>
                    </div>
                </div>

                <div class="container text-center" id="slider">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <p>Saya Ingin Menyimpan Sebesar :</p>
                            <div class="slider-container">
                                <div class="value-container">
                                    <!-- <button class="minus"><i class="bi bi-dash" id="k-simpan"></i></button> -->
                                    <span id="j-simpan">Rp. 2.000.000</span>
                                    <!-- <button class="plus" v-on:click="plus"><i class="bi bi-plus" id="t-simpan"></i></button> -->
                                </div>
                                <input type="range" min="1" max="25" value="1" class="slider" id="s-simpan">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <p>Dalam Jangka Waktu :</p>
                            <div class="slider-container">
                                <div class="value-container">
                                    <!-- <button class="minus"><i class="bi bi-dash" id="k-bulan"></i></button> -->
                                    <span id="js-bulan">1 Bulan</span>
                                    <!-- <button class="plus"><i class="bi bi-plus" id="t-bulan"></i></button> -->
                                </div>
                                <input type="range" min="1" max="12" value="1" class="slider" id="ss-bulan">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-group" id="j-calc">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Bonus Per Bulan</h5>
                            <span class="card-text" id="b-bonus">Rp. 15.000</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Bonus</h5>
                            <span class="card-text" id="t-bonus">Rp. 15.000</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Jumlah Akhir Simpanan</h5>
                            <span class="card-text" id="s-akhir">Rp. 2.015.000</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ====== Form Section ====== -->
        <section id="form" class="form">
            <div class="containers" id="containers" v-motion-slide-visible-once-bottom>
                <div class="title">Formulir Simpanan Berjangka</div>
                <div class="content">
                    <form action="#">
                        <div class="simpan-details">
                            <div class="input-box">
                                <span class="details">Jumlah Simpanan</span>
                                <input type="text" placeholder="Jumlah Simpanan" id="t-simpan" value="Rp. 2.000.000" disabled>
                            </div>
                            <div class="input-box">
                                <span class="details">Jangka Waktu</span>
                                <input type="text" placeholder="Jangka Waktu" id="jk-simpan" value="1 Bulan" disabled>
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
                                <input type="text" placeholder="Masukan Nama" disabled>
                            </div>
                            <div class="input-box">
                                <span class="details">Nomor KTP</span>
                                <input type="text" placeholder="Masukan No KTP" disabled>
                            </div>
                            <div class="input-box">
                                <span class="details">Nomor Telfon</span>
                                <input type="text" placeholder="Masukan No Telp" disabled>
                            </div>
                            <div class="input-box">
                                <span class="details">Jenis Kelamin</span>
                                <select name="gender" id="gender" disabled class="form-select">
                                    <option value="0">Masukan Jenis Kelamin</option>
                                    <option value="laki-laki">Laki-Laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div class="input-box">
                                <span class="details">Tempat Lahir</span>
                                <select name="tempat" id="tempat" disabled class="form-select">
                                    <option value="0">Masukan Tempat Lahir</option>
                                </select>
                            </div>
                            <div class="input-box">
                                <span class="details">Tanggal Lahir</span>
                                <input type="date" disabled>
                            </div>
                            <div class="input-box">
                                <span class="details">Alamat</span>
                                <input type="text" placeholder="Masukan Alamat" disabled>
                            </div>
                            <div class="input-box">
                                <span class="details">Pekerjaan</span>
                                <input type="text" placeholder="Masukan Pekerjaan (select option)" disabled>
                            </div>
                            <p class="text-muted">*Jika data diri anda tidak sesuai, silahkan ubah di halaman <a href="/profile">profile</a></p>
                        </div>
                        <div class="button">
                            <input type="submit" value="Ajukan Simpanan Berjangka">
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
    name : 'Simpan',
    mounted() {
        window.scrollTo(0,0)
        // Jumlah Simpanan
        const jSimpan = document.getElementById("j-simpan");
        const sSimpan = document.getElementById("s-simpan");
        const tSimpan = document.getElementById("t-simpan");
        sSimpan.addEventListener('input', function() {
            switch (this.value) {
                case '1':
                    jSimpan.innerHTML = "Rp. 2.000.000" 
                    tSimpan.value = "Rp. 2.000.000"
                    break;
                case '2':
                    jSimpan.innerHTML = "Rp. 3.000.000"
                    tSimpan.value = "Rp. 3.000.000"  
                    break;
                case '3':
                    jSimpan.innerHTML = "Rp. 4.000.000"
                    tSimpan.value = "Rp. 4.000.000"  
                    break;
                case '4':
                    jSimpan.innerHTML = "Rp. 5.000.000" 
                    tSimpan.value = "Rp. 5.000.000" 
                    break;
                case '5':
                    jSimpan.innerHTML = "Rp. 6.000.000"
                    tSimpan.value = "Rp. 6.000.000"  
                    break;
                case '6':
                    jSimpan.innerHTML = "Rp. 7.000.000" 
                    tSimpan.value = "Rp. 7.000.000" 
                    break;
                case '7':
                    jSimpan.innerHTML = "Rp. 8.000.000"
                    tSimpan.value = "Rp. 8.000.000"  
                    break;
                case '8':
                    jSimpan.innerHTML = "Rp. 9.000.000"
                    tSimpan.value = "Rp. 9.000.000"  
                    break;
                case '9':
                    jSimpan.innerHTML = "Rp. 10.000.000"
                    tSimpan.value = "Rp. 10.000.000"  
                    break;
                case '10':
                    jSimpan.innerHTML = "Rp. 11.000.000"
                    tSimpan.value = "Rp. 11.000.000" 
                    break;
                case '11':
                    jSimpan.innerHTML = "Rp. 12.000.000"
                    tSimpan.value = "Rp. 12.000.000" 
                    break;
                case '12':
                    jSimpan.innerHTML = "Rp. 13.000.000"
                    tSimpan.value = "Rp. 13.000.000" 
                    break;
                case '13':
                    jSimpan.innerHTML = "Rp. 14.000.000"
                    tSimpan.value = "Rp. 14.000.000" 
                    break;
                case '14':
                    jSimpan.innerHTML = "Rp. 15.000.000"
                    tSimpan.value = "Rp. 15.000.000" 
                    break;
                case '15':
                    jSimpan.innerHTML = "Rp. 16.000.000"
                    tSimpan.value = "Rp. 16.000.000" 
                    break;
                case '16':
                    jSimpan.innerHTML = "Rp. 17.000.000"
                    tSimpan.value = "Rp. 17.000.000" 
                    break;
                case '17':
                    jSimpan.innerHTML = "Rp. 18.000.000"
                    tSimpan.value = "Rp. 18.000.000" 
                    break;
                case '18':
                    jSimpan.innerHTML = "Rp. 19.000.000"
                    tSimpan.value = "Rp. 19.000.000" 
                    break;
                case '19':
                    jSimpan.innerHTML = "Rp. 20.000.000"
                    tSimpan.value = "Rp. 20.000.000" 
                    break;
                case '20':
                    jSimpan.innerHTML = "Rp. 25.000.000"
                    tSimpan.value = "Rp. 25.000.000"  
                    break;
                case '21':
                    jSimpan.innerHTML = "Rp. 30.000.000"
                    tSimpan.value = "Rp. 30.000.000"  
                    break;
                case '22':
                    jSimpan.innerHTML = "Rp. 35.000.000"
                    tSimpan.value = "Rp. 35.000.000"  
                    break;
                case '23':
                    jSimpan.innerHTML = "Rp. 40.000.000"
                    tSimpan.value = "Rp. 40.000.000"  
                    break;
                case '24':
                    jSimpan.innerHTML = "Rp. 45.000.000"
                    tSimpan.value = "Rp. 45.000.000"  
                    break;
                case '25':
                    jSimpan.innerHTML = "Rp. 50.000.000"
                    tSimpan.value = "Rp. 50.000.000"  
                    break;
                default:
                    console.log('default');
            };
        })

        // Tenor Simpan
        const jsBulan = document.getElementById("js-bulan");
        const ssBulan = document.getElementById("ss-bulan");
        const jkSimpan = document.getElementById("jk-simpan");
        ssBulan.addEventListener('input', function() {
            jsBulan.innerHTML = this.value + " Bulan";
            jkSimpan.value = this.value + " Bulan";
        })
    },
    components : {
        Header,
        Footer
    }
}
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
.content form .simpan-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}
  
form .user-details .input-box, 
form .simpan-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}
  
form .input-box span.details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}
  
.simpan-details .input-box input, 
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
.simpan-details .input-box input:focus {
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

#btn-info, 
#btn-decline,
#btn-accept {
    font-size: 20px;
    margin: 5px;
    color: #000;
    cursor: pointer;
}

#btn-info:hover, 
#btn-decline:hover, 
#btn-accept:hover {
    color : #FFB037;
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
    form .simpan-details .input-box {
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
    form .simpan-details .input-box {
        width: 100%;
    }

    #containers .text-muted {
        font-size: 12px;
    }

    form .button input {
        font-size: 16px;
    }
}

/*===== Phone S Responsive  */
@media (max-width: 374px) {
    #containers {
        width: 296px;
    }

    form .user-details .input-box, 
    form .simpan-details .input-box {
        width: 100%;
    }

    #containers .text-muted {
        font-size: 12px;
    }

    form .button input {
        font-size: 13px;
    }
}
</style>