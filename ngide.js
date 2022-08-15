// Jumlah Simpanan
const jSimpan = document.getElementById("j-simpan");
const sSimpan = document.getElementById("s-simpan");
const tSimpan = document.getElementById("plus");
const kSimpan = document.getElementById("minus");

sSimpan.addEventListener('input', function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = `linear-gradient(to right, #fad88d 0%, #FFB037 ${value}%, #FFFFFF ${value}%, #FFFFFF 100%)` 
    switch (this.value) {
        case '1':
            jSimpan.innerHTML = "Rp. 2.000.000" 
            break;
        case '2':
            jSimpan.innerHTML = "Rp. 3.000.000" 
            break;
        case '3':
            jSimpan.innerHTML = "Rp. 4.000.000" 
            break;
        case '4':
            jSimpan.innerHTML = "Rp. 5.000.000" 
            break;
        case '5':
            jSimpan.innerHTML = "Rp. 6.000.000" 
            break;
        case '6':
            jSimpan.innerHTML = "Rp. 7.000.000" 
            break;
        case '7':
            jSimpan.innerHTML = "Rp. 8.000.000" 
            break;
        case '8':
            jSimpan.innerHTML = "Rp. 9.000.000" 
            break;
        case '9':
            jSimpan.innerHTML = "Rp. 10.000.000" 
            break;
        case '10':
            jSimpan.innerHTML = "Rp. 11.000.000" 
            break;
        case '11':
            jSimpan.innerHTML = "Rp. 12.000.000" 
            break;
        case '12':
            jSimpan.innerHTML = "Rp. 13.000.000" 
            break;
        case '13':
            jSimpan.innerHTML = "Rp. 14.000.000" 
            break;
        case '14':
            jSimpan.innerHTML = "Rp. 15.000.000" 
            break;
        case '15':
            jSimpan.innerHTML = "Rp. 16.000.000" 
            break;
        case '16':
            jSimpan.innerHTML = "Rp. 17.000.000" 
            break;
        case '16':
            jSimpan.innerHTML = "Rp. 18.000.000" 
            break;
        case '18':
            jSimpan.innerHTML = "Rp. 19.000.000" 
            break;
        case '19':
            jSimpan.innerHTML = "Rp. 20.000.000" 
            break;
        case '20':
            jSimpan.innerHTML = "Rp. 25.000.000" 
            break;
        case '21':
            jSimpan.innerHTML = "Rp. 30.000.000" 
            break;
        case '22':
            jSimpan.innerHTML = "Rp. 35.000.000" 
            break;
        case '23':
            jSimpan.innerHTML = "Rp. 40.000.000" 
            break;
        case '24':
            jSimpan.innerHTML = "Rp. 45.000.000" 
            break;
        case '25':
            jSimpan.innerHTML = "Rp. 50.000.000" 
            break;
        default:
            console.log('default');
    };
})

// Tenor Waktu
const jBulan = document.getElementById("j-bulan");
const sBulan = document.getElementById("s-bulan");
const tBulan = document.getElementById("plus");
const kBulan = document.getElementById("minus");

sBulan.addEventListener('input', function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = `linear-gradient(to right, #fad88d 0%, #FFB037 ${value}%, #FFFFFF ${value}%, #FFFFFF 100%)` 
    jBulan.innerHTML = this.value + " Bulan";
})

document.addEventListener('click', function (e) {
    if (e.target === minus){
        console.log(e.target);
        slider.value-=1; 
        console.log(slider.value);   
    } else if (e.target === plus){
        console.log(e.target);
        slider.value += 1;
        console.log(slider.value);   
    }
})