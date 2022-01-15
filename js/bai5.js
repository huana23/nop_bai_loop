function tinhGiaiThua() {
    var num = document.getElementById("num").value;
    var sum = 1;

    for (i = 1 ; i <= num ; i ++) {
        sum = sum * i
    }
    document.getElementById("txttinhGiaiThua").innerHTML ="Giai thừa : "+ sum;
}