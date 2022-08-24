// Jumlah Simpanan
const jSimpan = document.getElementById("j-simpan");
const sSimpan = document.getElementById("s-simpan");
const tSimpan = document.getElementById("t-simpan");
sSimpan.addEventListener('input', function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
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

// Jumlah pinjaman
const jPinjam = document.getElementById("j-pinjam");
const sPinjam = document.getElementById("s-pinjam");
const tPinjam = document.getElementById("t-pinjam");
sPinjam.addEventListener('input', function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    switch (this.value) {
        case '1':
            jPinjam.innerHTML = "Rp. 2.000.000"
            tPinjam.value = "Rp. 2.000.000"
            break;
        case '2':
            jPinjam.innerHTML = "Rp. 2.500.000"
            tPinjam.value = "Rp. 2.500.000"
            break;
        case '3':
            jPinjam.innerHTML = "Rp. 3.000.000"
            tPinjam.value = "Rp. 3.000.000" 
            break;
        case '4':
            jPinjam.innerHTML = "Rp. 3.500.000"
            tPinjam.value = "Rp. 3.500.000" 
            break;
        case '5':
            jPinjam.innerHTML = "Rp. 4.000.000"
            tPinjam.value = "Rp. 4.000.000" 
            break;
        case '6':
            jPinjam.innerHTML = "Rp. 4.500.000"
            tPinjam.value = "Rp. 4.500.000" 
            break;
        case '7':
            jPinjam.innerHTML = "Rp. 5.000.000"
            tPinjam.value = "Rp. 5.000.000"
            break;
        case '8':
            jPinjam.innerHTML = "Rp. 5.500.000"
            tPinjam.value = "Rp. 5.500.000" 
            break;
        case '9':
            jPinjam.innerHTML = "Rp. 6.000.000"
            tPinjam.value = "Rp. 6.000.000"
            break;
        case '10':
            jPinjam.innerHTML = "Rp. 6.500.000"
            tPinjam.value = "Rp. 6.500.000" 
            break;
        case '11':
            jPinjam.innerHTML = "Rp. 7.000.000"
            tPinjam.value = "Rp. 7.000.000" 
            break;
        case '12':
            jPinjam.innerHTML = "Rp. 7.500.000"
            tPinjam.value = "Rp. 7.500.000" 
            break;
        case '13':
            jPinjam.innerHTML = "Rp. 8.000.000"
            tPinjam.value = "Rp. 8.000.000"
            break;
        case '14':
            jPinjam.innerHTML = "Rp. 8.500.000"
            tPinjam.value = "Rp. 8.500.000"
            break;
        case '15':
            jPinjam.innerHTML = "Rp. 9.000.000"
            tPinjam.value = "Rp. 9.000.000" 
            break;
        case '16':
            jPinjam.innerHTML = "Rp. 9.500.000"
            tPinjam.value = "Rp. 9.500.000"
            break;
        case '17':
            jPinjam.innerHTML = "Rp. 10.000.000"
            tPinjam.value = "Rp. 10.000.000" 
            break;
        case '18':
            jPinjam.innerHTML = "Rp. 10.500.000"
            tPinjam.value = "Rp. 10.500.000" 
            break;
        case '19':
            jPinjam.innerHTML = "Rp. 11.000.000"
            tPinjam.value = "Rp. 11.000.000"
            break;
        case '20':
            jPinjam.innerHTML = "Rp. 11.500.000"
            tPinjam.value = "Rp. 11.500.000" 
            break;
        case '21':
            jPinjam.innerHTML = "Rp. 12.000.000"
            tPinjam.value = "Rp. 12.000.000" 
            break;
        case '22':
            jPinjam.innerHTML = "Rp. 12.500.000"
            tPinjam.value = "Rp. 12.500.000" 
            break;
        case '23':
            jPinjam.innerHTML = "Rp. 13.000.000"
            tPinjam.value = "Rp. 13.000.000" 
            break;
        case '24':
            jPinjam.innerHTML = "Rp. 13.500.000"
            tPinjam.value = "Rp. 13.500.000"
            break;
        case '25':
            jPinjam.innerHTML = "Rp. 14.000.000"
            tPinjam.value = "Rp. 14.000.000"
            break;
        case '26':
            jPinjam.innerHTML = "Rp. 14.500.000"
            tPinjam.value = "Rp. 14.500.000" 
            break;
        case '27':
            jPinjam.innerHTML = "Rp. 15.000.000"
            tPinjam.value = "Rp. 15.000.000" 
            break;
        case '28':
            jPinjam.innerHTML = "Rp. 15.500.000"
            tPinjam.value = "Rp. 15.500.000" 
            break;
        case '29':
            jPinjam.innerHTML = "Rp. 16.000.000"
            tPinjam.value = "Rp. 16.000.000" 
            break;
        case '30':
            jPinjam.innerHTML = "Rp. 16.500.000"
            tPinjam.value = "Rp. 16.500.000" 
            break;
        case '31':
            jPinjam.innerHTML = "Rp. 17.000.000"
            tPinjam.value = "Rp. 17.000.000" 
            break;
        case '32':
            jPinjam.innerHTML = "Rp. 17.500.000"
            tPinjam.value = "Rp. 17.500.000" 
            break;
        case '33':
            jPinjam.innerHTML = "Rp. 18.000.000"
            tPinjam.value = "Rp. 18.000.000"
            break;
        case '34':
            jPinjam.innerHTML = "Rp. 18.500.000"
            tPinjam.value = "Rp. 18.500.000" 
            break;
        case '35':
            jPinjam.innerHTML = "Rp. 19.000.000"
            tPinjam.value = "Rp. 19.000.000" 
            break;
        case '36':
            jPinjam.innerHTML = "Rp. 19.500.000"
            tPinjam.value = "Rp. 19.500.000" 
            break;
        case '37':
            jPinjam.innerHTML = "Rp. 20.000.000"
            tPinjam.value = "Rp. 20.000.000" 
            break;
        case '38':
            jPinjam.innerHTML = "Rp. 20.500.000"
            tPinjam.value = "Rp. 20.500.000"
            break;
        case '39':
            jPinjam.innerHTML = "Rp. 21.000.000"
            tPinjam.value = "Rp. 21.000.000" 
            break;
        case '40':
            jPinjam.innerHTML = "Rp. 21.500.000"
            tPinjam.value = "Rp. 21.500.000" 
            break;
        case '41':
            jPinjam.innerHTML = "Rp. 22.000.000"
            tPinjam.value = "Rp. 22.000.000"
            break;
        case '42':
            jPinjam.innerHTML = "Rp. 22.500.000"
            tPinjam.value = "Rp. 22.500.000"
            break;
        case '43':
            jPinjam.innerHTML = "Rp. 23.000.000"
            tPinjam.value = "Rp. 23.000.000"
            break;
        case '44':
            jPinjam.innerHTML = "Rp. 23.500.000"
            tPinjam.value = "Rp. 23.500.000" 
            break;
        case '45':
            jPinjam.innerHTML = "Rp. 24.000.000"
            tPinjam.value = "Rp. 24.000.000"
            break;
        case '46':
            jPinjam.innerHTML = "Rp. 24.500.000"
            tPinjam.value = "Rp. 24.500.000"
            break;
        case '47':
            jPinjam.innerHTML = "Rp. 25.000.000"
            tPinjam.value = "Rp. 25.000.000" 
            break;
        case '48':
            jPinjam.innerHTML = "Rp. 26.000.000"
            tPinjam.value = "Rp. 26.000.000" 
            break;
        case '49':
            jPinjam.innerHTML = "Rp. 27.000.000"
            tPinjam.value = "Rp. 27.000.000" 
            break;
        case '50':
            jPinjam.innerHTML = "Rp. 28.000.000" 
            tPinjam.value = "Rp. 28.000.000"
            break;
        case '51':
            jPinjam.innerHTML = "Rp. 29.000.000" 
            tPinjam.value = "Rp. 29.000.000"
            break;
        case '52':
            jPinjam.innerHTML = "Rp. 30.000.000"
            tPinjam.value = "Rp. 30.000.000"
            break;
        case '53':
            jPinjam.innerHTML = "Rp. 31.000.000"
            tPinjam.value = "Rp. 31.000.000" 
            break;
        case '54':
            jPinjam.innerHTML = "Rp. 32.000.000"
            tPinjam.value = "Rp. 32.000.000" 
            break;
        case '55':
            jPinjam.innerHTML = "Rp. 33.000.000"
            tPinjam.value = "Rp. 33.000.000" 
            break;
        case '56':
            jPinjam.innerHTML = "Rp. 34.000.000"
            tPinjam.value = "Rp. 34.000.000" 
            break;
        case '57':
            jPinjam.innerHTML = "Rp. 35.000.000"
            tPinjam.value = "Rp. 35.000.000" 
            break;
        case '58':
            jPinjam.innerHTML = "Rp. 36.000.000" 
            tPinjam.value = "Rp. 36.000.000"
            break;
        case '59':
            jPinjam.innerHTML = "Rp. 37.000.000"
            tPinjam.value = "Rp. 37.000.000" 
            break;
        case '60':
            jPinjam.innerHTML = "Rp. 38.000.000"
            tPinjam.value = "Rp. 38.000.000"
            break;
        case '61':
            jPinjam.innerHTML = "Rp. 39.000.000"
            tPinjam.value = "Rp. 39.000.000" 
            break;
        case '62':
            jPinjam.innerHTML = "Rp. 40.000.000"
            tPinjam.value = "Rp. 40.000.000" 
            break;
        case '63':
            jPinjam.innerHTML = "Rp. 41.000.000"
            tPinjam.value = "Rp. 41.000.000" 
            break;
        case '64':
            jPinjam.innerHTML = "Rp. 42.000.000"
            tPinjam.value = "Rp. 42.000.000"
            break;
        case '65':
            jPinjam.innerHTML = "Rp. 43.000.000"
            tPinjam.value = "Rp. 43.000.000" 
            break;
        case '66':
            jPinjam.innerHTML = "Rp. 44.000.000"
            tPinjam.value = "Rp. 43.000.000" 
            break;
        case '67':
            jPinjam.innerHTML = "Rp. 45.000.000"
            tPinjam.value = "Rp. 45.000.000"
            break;
        case '68':
            jPinjam.innerHTML = "Rp. 46.000.000"
            tPinjam.value = "Rp. 46.000.000" 
            break;
        case '69':
            jPinjam.innerHTML = "Rp. 47.000.000"
            tPinjam.value = "Rp. 47.000.000" 
            break;
        case '70':
            jPinjam.innerHTML = "Rp. 48.000.000"
            tPinjam.value = "Rp. 48.000.000" 
            break;
        case '71':
            jPinjam.innerHTML = "Rp. 49.000.000"
            tPinjam.value = "Rp. 49.000.000" 
            break;
        case '72':
            jPinjam.innerHTML = "Rp. 50.000.000"
            tPinjam.value = "Rp. 50.000.000" 
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
    let value = (this.value-this.min)/(this.max-this.min)*100
    jsBulan.innerHTML = this.value + " Bulan";
    jkSimpan.value = this.value + " Bulan";
})

// Tenor Pinjam 
const jpBulan = document.getElementById("jp-bulan");
const spBulan = document.getElementById("sp-bulan");
const jkPinjam = document.getElementById("jk-pinjam");
spBulan.addEventListener('input', function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    jpBulan.innerHTML = this.value + " Bulan";
    jkPinjam.value = this.value + " Bulan";
})

// Perhitungan Simpanan
const bBonus = document.getElementById("b-bonus");
const tBonus = document.getElementById("t-bonus");
const sAkhir = document.getElementById("s-akhir");

// Perhitungan Pinjaman