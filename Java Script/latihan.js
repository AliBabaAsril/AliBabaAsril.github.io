
function average() {
    var a = parseFloat(document.getElementById("angka1").value);
    var b = parseFloat(document.getElementById("angka2").value);
    var c = parseFloat(document.getElementById("angka3").value);

    document.getElementById("rata").innerHTML = (a + c + b) / 3;
}
function tinggi() {
    var a = parseFloat(document.getElementById("angka1").value);
    var b = parseFloat(document.getElementById("angka2").value);
    var c = parseFloat(document.getElementById("angka3").value);

    document.getElementById("tertinggi").innerHTML = Math.max(a, b, c);
}
function median() {
    var a = parseFloat(document.getElementById("angka1").value);
    var b = parseFloat(document.getElementById("angka2").value);
    var c = parseFloat(document.getElementById("angka3").value);

    var data = [a,b,c];
    var jumlah = data.length;

    for(var i=0; i<jumlah-1; i++){
        for(var j=0; j<jumlah-1; j++){
            if(data[j+1]<data[j]){
                var temp=data[j];
                data[j]=data[j+1];
                data[j+1]=temp;
            }
        }
    }
    
    document.getElementById("tengah").innerHTML = data[1];   
}
function kecil() {
    var a = parseFloat(document.getElementById("angka1").value);
    var b = parseFloat(document.getElementById("angka2").value);
    var c = parseFloat(document.getElementById("angka3").value);

    document.getElementById("terkecil").innerHTML = Math.min(a, b, c);
}
function hitung() {
    average();
    tinggi();
    kecil();
    median();
    
}
function reset() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("angka3").value = "";
    location.reload();
}