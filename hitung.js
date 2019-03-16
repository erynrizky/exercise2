


function tambah(){
    var angka1 = parseInt(document.getElementById("bil_1").value);
    var angka2 = parseInt(document.getElementById("bil_2").value);
    hasil=angka1+angka2;
    tmpl=angka1+"+"+angka2;
    document.getElementById("hasil").value=tmpl;
    console.log(hasil);
    
}
function kurang(){
    var angka1 = parseInt(document.getElementById("bil_1").value);
    var angka2 = parseInt(document.getElementById("bil_2").value);
    hasil=angka1-angka2;
    tmpl=angka1+"-"+angka2;
    document.getElementById("hasil").value=tmpl;
}
function kali(){
    var angka1 = parseInt(document.getElementById("bil_1").value);
    var angka2 = parseInt(document.getElementById("bil_2").value);
    hasil=angka1*angka2;
    tmpl=angka1+"x"+angka2;
    document.getElementById("hasil").value=tmpl;
}
function bagi(){
    var angka1 = parseInt(document.getElementById("bil_1").value);
    var angka2 = parseInt(document.getElementById("bil_2").value);
    hasil=angka1/angka2;
    tmpl=angka1+"/"+angka2;
    document.getElementById("hasil").value=tmpl;
}
function hapus(){
   
    document.getElementById("hasil").value=0;
    document.getElementById("bil_1").value=0;
    document.getElementById("bil_2").value=0;
}

function tampil(){
    document.getElementById("hasil").value=tmpl+" =  "+hasil;
}

