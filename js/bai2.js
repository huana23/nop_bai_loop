//while
var count = 0;
var soChiaCho3 = 0;
while (count < 1000) {
    if (count % 3 == 0) {
        soChiaCho3++;
    }
    count++;
}
function chiaHetCho3() {
    document.getElementById("txtChiaCho3").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000 : " + soChiaCho3+" số"
}


// for
var chiaCho3 = 0;

for (var i = 0; i < 1000 ; i++) {
    if (i % 3 == 0) {
        chiaCho3++;
    }
}
console.log(chiaCho3);
