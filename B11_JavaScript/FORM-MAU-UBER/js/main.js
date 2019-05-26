document.getElementById("btnTinhTien").onclick = function () {

    var soKm = document.getElementById("sokm").value;
    var thoigiancho = document.getElementById("thoigiancho").value;
    var totalBill = 0;
    soKm = parseFloat(soKm);
    thoigiancho = parseFloat(thoigiancho);
    if (radioButtonIsCheck("uberX")) {
        console.log("Tinh Tien UberX: ");
        if (soKm <= 1) {
            totalBill += 8000;
        }
        else if (soKm <= 20) {
            totalBill = (soKm-1) * 12000 + 8000;
        } else if (soKm >= 21) {
            totalBill = 19 * 12000 + 8000 + (soKm - 20) * 10000;

        }
        totalBill += (thoigiancho > 0) ? thoigiancho * 2000 : 0;
        document.getElementById("xuatTien").innerHTML = totalBill;
        document.getElementById("divThanhTien").style.display="block";
    } else if (radioButtonIsCheck("uberSUV")) {
        console.log("Tinh Tien UberSUV: ")
        if (soKm <= 1) {
            totalBill = 9000;
        }
        else if (soKm <= 20) {
            totalBill = (soKm-1) * 14000 + 9000;
        } else if (soKm >= 21) {
            totalBill = 19 * 14000 + 9000 + (soKm - 20) * 12000;

        }
        totalBill += (thoigiancho > 0) ? thoigiancho * 3000 : 0;
        document.getElementById("xuatTien").innerHTML = totalBill;
        document.getElementById("divThanhTien").style.display="block";
    } else if (radioButtonIsCheck("uberBlack")) {
        console.log("Tinh Tien UberBlack: ")
        if (soKm <= 1) {
            totalBill = 10000;
        }
        else if (soKm <= 20) {
            totalBill = (soKm-1) * 16000 + 10000;
        } else if (soKm >= 21) {
            totalBill = 19 * 16000 + 10000 + (soKm - 20) * 14000;
        }
        totalBill += (thoigiancho > 0) ? thoigiancho * 4000 : 0;
        document.getElementById("xuatTien").innerHTML = totalBill;
        document.getElementById("divThanhTien").style.display="block";
    } else {
        // doesn't have any button check
        alert("Vui Long Chon Loai Xe");
    }


};

function radioButtonIsCheck(idName) {
    var isCheck = document.getElementById(idName).checked;
    return isCheck;

}
