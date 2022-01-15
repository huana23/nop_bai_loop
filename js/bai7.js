function tinhNguyenTo() {
    var number = document.getElementById("number").value;
    var nguyenTo = "2 ";

    for (i = 2; i < number ; i++) {
        if (i % 2 != 0) {
            nguyenTo = nguyenTo + i + " ";
            document.getElementById("txtTinhNguyenTo").innerHTML = nguyenTo;
        }
    }
}