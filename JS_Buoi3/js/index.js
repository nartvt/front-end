function getElementByID(id) {
    return document.getElementById(id);
}

function hienThiThongTin() {
    var maSinhVien = getElementByID("txtMaSV").value;
    var tenSinhVien = getElementByID("txtTenSV").value;
    var indexLoaiSinhVien = getElementByID("loaiSV").selectedIndex;
    var loaiSV = document.getElementsByTagName("option")[indexLoaiSinhVien].value;
    var diemToan = getElementByID("txtDiemToan").value;
    var diemVan = getElementByID("txtDiemVan").value;

    

    getElementByID("spanTenSV").innerHTML = tenSinhVien;
    getElementByID("spanMaSV").innerHTML = maSinhVien;
    getElementByID("spanLoaiSV").innerHTML = loaiSV;
    getElementByID("spanDTB").innerHTML = tinhDiemTrungBinh(diemToan,diemVan);
    getElementByID("spanXepLoai").innerHTML = xepLoai(diemToan,diemVan);

}

function xepLoai(diemToan,diemVan) {
    var score = tinhDiemTrungBinh(diemToan,diemVan);
    var xep_loai = '';
    if (score >= 8) {
        xep_loai = "Gioi";
    } else if (score >= 7) {
        xep_loai = "Kha";
    } else if (score >= 6) {
        xep_loai = "Trung Binh";
    } else {
        xep_loai = "Yeu";
    }
    return xep_loai;
}
function tinhDiemTrungBinh(diemToan,diemVan){
    return (parseInt(diemToan)+parseInt(diemVan))/2;
}

function reDefineHienThiThongTin(){
    var sinhVien = SinhVien;

    sinhVien.maSinhVien=getElementByID("txtMaSV").value;
    sinhVien.tenSinhVien=getElementByID("txtTenSV").value;
    var indexLoaiSinhVien = getElementByID("loaiSV").selectedIndex;
    sinhVien.loaiSinhVien=document.getElementsByTagName("option")[indexLoaiSinhVien].value;
    sinhVien.diemToan=getElementByID("txtDiemToan").value;
    sinhVien.diemVan=getElementByID("txtDiemVan").value;

    getElementByID("spanTenSV").innerHTML = tenSinhVien;
    getElementByID("spanMaSV").innerHTML = maSinhVien;
    getElementByID("spanLoaiSV").innerHTML = loaiSV;
    getElementByID("spanDTB").innerHTML = tinhDiemTrungBinh(diemToan,diemVan);
    getElementByID("spanXepLoai").innerHTML = xepLoai(diemToan,diemVan);

}