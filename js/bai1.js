// while
var dsSoChanW = "";
var dsSoLeW = "";

var count = 0;
while (count < 100) {
    if (count % 2 == 0) {
        dsSoChanW += count + " ";
    }else {
        dsSoLeW += count + " ";
    }
    count++;
}
function tongChanLe() {
    document.getElementById("txtTongChan").innerHTML= "Các số chẵn : " + dsSoChanW;
    document.getElementById("txtTongLe").innerHTML= "Các số lẻ : " + dsSoLeW;

}

// for
var dsSoChan = "";
var dsSoLe = "";

for (var i = 0; i < 100 ; i++) {
    // kiểm tra số chẵn
    if (i % 2 == 0) {
        dsSoChan += i + " ";
    }else {
        dsSoLe += i + " ";
    }
}
console.log(dsSoChan);
console.log(dsSoLe);