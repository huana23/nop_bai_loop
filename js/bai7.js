function tinhNguyenTo() {
    var number = document.getElementById("number").value;
    var nguyenTo = "";

    for (i = 2; i < number ; i++) {
        if (i % 2 != 0) {
            nguyenTo = nguyenTo + i + " ";          
        }else if(i == 2){
            nguyenTo = nguyenTo + i + " ";
        }
        document.getElementById("txtTinhNguyenTo").innerHTML = nguyenTo;
    }
}