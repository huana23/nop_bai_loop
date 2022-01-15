var sum = 0;
var count = 0;
while (sum < 10000) {
    count++;
    sum = sum + count;
}
function soNguyenDuong() {
    document.getElementById("txtsoNguyenDuong").innerHTML = "Số nguyên dương nhỏ nhất : " + count;
}
