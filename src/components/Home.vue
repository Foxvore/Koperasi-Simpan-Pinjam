<template>
    <Header />
    
    <!-- ======= Home Section ======= -->
    <section id="home" class="home">
        <div class="h-container" data-aos="fade-up">
        <h3>Selamat Datang</h3>
        <h2>Daftar sekarang dan nikmati berbagai keuntungan yang bisa kamu dapatkan setelah menjadi anggota <b>E-COOP<span>.</span></b></h2>
        <a href="/signup" class="btn-daftar scrollto">Daftar Sekarang</a>
        </div>
    </section>

    <main id="main">
        <!-- ======= Definisi Section ======= -->
        <section id="definisi" class="definisi">
            <div data-aos="fade-up" class="card mb-3 m-auto" id="c-definisi">
                <div class="row g-0">
                    <div class="col-md-9">
                        <div class="card-body">
                            <p class="card-title"><b>E-COOP<span>.</span></b></p>
                            <p class="card-text">“Koperasi adalah usaha bersama untuk memperbaiki nasib penghidupan ekonomi berdasarkan tolong menolong”</p>
                            <p class="card-text"><span>Moh. Hatta - Bapak Koperasi Indonesia</span></p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <img src="../assets/Hatta.jpg" class="img-fluid" alt="Moh. Hatta"/>
                    </div>
                </div>
            </div>
        </section>

        <!-- ======= Keunggulan Section ======= -->
        <section id="keunggulan" class="keunggulan">
            <div data-aos="fade-up">
                <h2><b>Keunggulan E-COOP<span>.</span></b></h2><br />
                <div class="row justify-content-md-center">
                    <div class="col-md-auto">
                        <div class="card mb-3 m-auto" id="c-keunggulan">
                            <div class="card-body">
                                <p class="card-text">Tanpa<br />Biaya<br />Admin</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-auto">
                        <div class="card mb-3 m-auto" id="c-keunggulan">
                            <div class="card-body">
                                <p class="card-text">Bunga<br />Pinjaman<br />Rendah</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-auto">
                        <div class="card mb-3 m-auto" id="c-keunggulan">
                            <div class="card-body">
                                <p class="card-text">Proses<br />Mudah &<br />Cepat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ======= Fitur Section ======= -->
        <section id="fitur" class="fitur">
            <div data-aos="fade-up">
                <h2><b><i>Fitur Utama</i></b></h2><br />
                <div class="row justify-content-md-center">
                    <div class="col-md-auto col-xs-12">
                        <div class="card mb-3 mx-auto" id="c-fitur">
                            <div class="card-body">
                                <h5 class="card-title"><span>9</span>%</h5>
                                <p class="card-text">Bonus Simpanan Per Tahun</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-auto col-xs-12">
                        <div class="card mb-3 mx-auto" id="c-fitur">
                            <div class="card-body">
                                <h5 class="card-title"><span>1</span>%</h5>
                                <p class="card-text">Bunga Pinjaman Per Bulan</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-auto col-xs-12">
                        <div class="card mb-3 mx-auto" id="c-fitur">
                            <div class="card-body">
                                <h5 class="card-title"><span>1</span>Tahun</h5>
                                <p class="card-text">Jangka Waktu Pinjaman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ======= Timeline Section ======= -->
        <section id="timeline" class="timeline">
            <div data-aos="fade-up">
                <h2><b><i>Cara Menjadi Anggota</i></b></h2><br />
                <div class="g-timeline" id="g-timeline">
                    <ul>
                        <li>
                            <div class="content">
                                <h3>Registrasi Akun</h3>
                                <p>Registrasikan/daftarkan akun anda agar anda dapat mengaksesnya kapanpun dimanapun</p>
                            </div>
                            <div class="img">
                                <img src="../assets/regist.png" />
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <h3>Mengisi Form Data Diri</h3>
                                <p>Data diri anda akan digunakan sebagai persyaratan dalam melakukan segala transaksi</p>
                            </div>
                            <div class="img">
                                <img src="../assets/profile.png" />
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <h3>Tunggu Data Kamu Terverifikasi</h3>
                                <p>Data diri anda akan di cek oleh staff kami dan didaftarkan sebagai anggota</p>
                            </div>
                            <div class="img">
                                <img src="../assets/check.png" />
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <h3>Kamu Telah Terdaftar Sebagai Anggota</h3>
                                <p>Selamat! Kamu telah terdaftar sebagai anggota resmi<b>E-COOP<span>.</span></b></p>
                            </div>
                            <div class="img">
                                <img src="../assets/acc.png" />
                            </div>
                        </li>
                        <div style="clear: both"></div>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ======= Dokumen Section ======= -->
        <section id="dokumen" class="dokumen">
            <div data-aos="fade-up">
                <h2><b><i>Dokumen Yang Dibutuhkan</i></b></h2><br />
                <div class="card m-auto" id="c-dokumen">
                    <img src="../assets/ktp.png" />
                    <p class="m-auto">KTP</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Header from './Header.vue'
export default {
  name : "Home",
  components : {
    Header
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style scoped>
/*===== Hero Section =====*/
#home {
  width: 100%;
  height: 100vh;
  background: url('../assets/bg-h.png') top center;
  background-size: cover;
  position: relative;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.5);
}

#home:before {
  content: "";
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#home .h-container {
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

#home h3 {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 26px;
  padding: 10px 30px;
  margin-bottom: 30px;
  border-radius: 50px;
}

#home h2 {
  color: #fff;
  margin-bottom: 40px;
  font-size: 40px;
  max-width: 79%;
}

#home .btn-daftar {
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 30px 9px 30px;
  border-radius: 50px;
  transition: 0.5s;
  border: 2px solid #FFB037;
  color: #fff;
  font-weight: 600;
}

#home .btn-daftar:hover {
  background: #FFB037;
  border: 2px solid #FFB037;
  color: #000;
}

@media (min-width: 1024px) {
  #home, #layanan {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #home h3 {
    font-size: 22px;
  }

  #home h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}

@media (max-height: 500px) {
  #home {
    height: 150vh;
  }
}

/*===== Backgorund Color =====*/
#definisi { /* Homepage */
  background-color: #F1F1F1;
}

#keunggulan {
  background-color: #FFFFFF;
}

#fitur {
  background-color: #F1F1F1;
}

#timeline {
  background-color: #FFFFFF;
}

#dokumen {
  background-color: #F1F1F1;
}

/*Homepage*/
  #c-definisi {   
    width: 1000px;
    padding: 10px;
    color: black;
    background-color: #F1F1F1;
    border-color: #F1F1F1;
  }

  #definisi img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
  }

  #definisi p {
    margin-top: 15px;
    font-size: 24px;
  }

  #c-keunggulan {
    font-weight: 800;
    width: 250px;
    height: 250px;
    text-align: center;
    border-radius: 50%;
    border-color: black;
    background-color: #FFB037;
  }

  #keunggulan .card-text {
    margin-top: 25px;
    font-size: 35px;
    font-weight: 100;
  }

  #c-fitur {
    width: 270px;
    height: 270px;
    background-color: #FFB037;
    text-align: center;
    border-color: black;
    box-shadow: 5px 5px #FFB037, 8px 8px black;
    border-width: 3px;
  }

  #fitur span {
    color: black;
    font-size: 500%;
  }

  #fitur .card-text {
    font-weight: 500px;
  }

  #fitur p {
    font-size: 25px;
  }

  .g-timeline {
    position: relative;
    margin: 0 auto;
    padding: 0 0;
    width: 900px;
    box-sizing: border-box;
    top: 75px;
  }
  
  #g-timeline:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 2px;
    height: 103%;
    background-color: #c5c5cc;
  }
    
  .g-timeline ul {
    margin: 0;
    padding: 0;
    height: 600px;
  }
    
  .g-timeline ul li {
    list-style: none;
    position: relative;
    width: 50%;
    padding: 20px 40px;
    box-sizing: border-box;
  }
    
  .g-timeline ul li:nth-child(odd) {
    float: left;
    text-align: right;
    clear: both;
    top: -50px;
  }
    
  .g-timeline ul li:nth-child(even) {
    float: right;
    text-align: left;
    clear: both;
    top: -50px;
  }
    
  .g-timeline .content {
    padding-bottom: 50px;
  }
    
  .g-timeline ul li:nth-child(odd):before {
    content: '';
    position: absolute;
    top: 50px;
    right: -6px;
    width: 10px;
    height: 10px;
    background: #FFB037;
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(255, 176, 55, 0.2)
  }
    
  .g-timeline ul li:nth-child(even):before {
    content: '';
    position: absolute;
    top: 40px;
    left: -4px;
    width: 10px;
    height: 10px;
    background: #FFB037;
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(255, 176, 55, 0.2)
  }
    
  .g-timeline ul li h3 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    color: #FFB037;
  }
    
  .g-timeline ul li p {
    margin: 10px 0 0;
    padding: 0;
  }
    
  .g-timeline ul li .img h4 {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  .g-timeline img {
    width: 230px;
  }
    
  .g-timeline ul li:nth-child(odd) .img {
  position: absolute;
  width: 250px;
  top: -30px;
  right: -210px;
  margin: 0;
  }
    
  .g-timeline ul li:nth-child(even) .img {
  position: absolute;
  width: 250px;
  top: -30px;
  right: 410px;
  margin: 0;
  }

  #c-dokumen {
    width: 400px;
    border-color: #F1F1F1;
    background-color: transparent;
  }

  #c-dokumen p {
    font-size: 20px;
    font-weight: 500;
  }
</style>