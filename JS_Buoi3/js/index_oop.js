function tinhDiemTrungBinh(diemToan,diemVan){
    return (parseInt(diemToan)+parseInt(diemVan))/2;
}
function xepLoai(score) {
    
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

    // define sinhVen Object
    var sinhVien = {
        // key: value
        _maSinhVien: maSinhVien,
        _tenSinhVien:tenSinhVien,
        _loaiSinhVien:loaiSV,
        _diemToan: diemToan,
        _diemVan: diemVan,
        _diemTB:  (parseInt(this._diemToan)+parseInt(this._diemVan))/2
    }
 
    getElementByID("spanTenSV").innerHTML = sinhVien._tenSinhVien;
    getElementByID("spanMaSV").innerHTML = sinhVien._maSinhVien;
    getElementByID("spanLoaiSV").innerHTML = sinhVien._loaiSinhVien;
    getElementByID("spanDTB").innerHTML =  sinhVien._diemTB;
    getElementByID("spanXepLoai").innerHTML = xepLoai(sinhVien._diemTB);
}
