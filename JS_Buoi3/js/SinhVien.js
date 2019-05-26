function SinhVien(
    maSinhVien,
    tenSinhVien,
    loaiSinhVien,
    diemToan,
    diemLy,
    diemHoa,
    diemRenLuyen
) {
    this._maSinhVien = maSinhVien;
    this._tenSinhVien = tenSinhVien;
    this._loaiSinhVien = loaiSinhVien;
    this._diemToan = diemToan;
    this._diemLy = diemLy;
    this._diemHoa = diemHoa;
    this._diemRenLuyen = diemRenLuyen;
    // this._diemTB=0;
    this.tinhDiemTB = function () {
        var dtb = (parseFloat(diemToan) + parseFloat(diemLy) + parseFloat(diemHoa)) / 3;
        this._diemTB = dtb;
        return dtb;
    }
    this._diemTB = this.tinhDiemTB();
}