function tinhTong() {
    
    var soX = document.getElementById("soX").value;
    var soN = document.getElementById("soN").value;
    var T = 1;
    var sum = 0;
    for (i = 1 ; i <= soN; i++) {
        T = T * soX;
        sum = sum + T
    }
    document.getElementById("txtTinhTong").innerHTML ="Tổng : " + sum;
}