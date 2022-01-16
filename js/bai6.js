function taoDiv() {
    var dsSoChan = "";
    var dsSoLe = "";

for (var i = 1; i < 10 ; i++) {
    // kiểm tra số chẵn
    if (i % 2 == 0) {
        dsSoChan += i + " ";
        document.getElementById("txtTaoDiv").style.backgroundColor = "red";
        document.getElementById("txtTaoDiv").innerHTML = "Danh sách thẻ div số chẵn : " + dsSoChan;

        document.getElementById("txtTaoDiv2").style.backgroundColor = "red";
        document.getElementById("txtTaoDiv2").innerHTML = "div lẻ 2";

        document.getElementById("txtTaoDiv4").style.backgroundColor = "red";
        document.getElementById("txtTaoDiv4").innerHTML = "div lẻ 3";

        document.getElementById("txtTaoDiv6").style.backgroundColor = "red";
        document.getElementById("txtTaoDiv6").innerHTML = "div lẻ 4";

        document.getElementById("txtTaoDiv8").style.backgroundColor = "red";
        document.getElementById("txtTaoDiv8").innerHTML = "div lẻ 5";
    }else {
        dsSoLe += i + " ";
        document.getElementById("txtTaoDiv1").style.backgroundColor = "blue";
        document.getElementById("txtTaoDiv1").innerHTML ="Danh sách thẻ div số lẻ : " +  dsSoLe;

        document.getElementById("txtTaoDiv3").style.backgroundColor = "blue";
        document.getElementById("txtTaoDiv3").innerHTML = "div chẵn 2";

        document.getElementById("txtTaoDiv5").style.backgroundColor = "blue";
        document.getElementById("txtTaoDiv5").innerHTML = "div chẵn 3";

        document.getElementById("txtTaoDiv7").style.backgroundColor = "blue";
        document.getElementById("txtTaoDiv7").innerHTML = "div chẵn 4";

        document.getElementById("txtTaoDiv9").style.backgroundColor = "blue";
        document.getElementById("txtTaoDiv9").innerHTML = "div chẵn 5";

    }
}
console.log(dsSoChan);
console.log(dsSoLe);
}