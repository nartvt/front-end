function DanhSachNguoiDung() {
  this.mangNguoiDung = [];

  this.themNguoiDung = function (nguoidung) {
    this.mangNguoiDung.push(nguoidung);
  }

  this.timNguoiDungById = function (taiKhoanId) {
    return this.mangNguoiDung.find(item => {
      return (item.taiKhoan === taiKhoanId);
    })
  }

  this.updateNguoidung = function (nguoidung) {
    this.mangNguoiDung.map(item => {
      if (item.taiKhoan === nguoidung.taiKhoan) {
        item.hoTen = nguoidung.hoTen;
        item.matKhau = nguoidung.matKhau;
        item.email = nguoidung.email;
        item.soDienThoai = nguoidung.soDienThoai;
      }
    });
  }
}

DanhSachNguoiDung.prototype.deleteNguoiDung = function(taiKhoan){
  let index = this.mangNguoiDung.findIndex(function(item){
    return (item.taiKhoan===taiKhoan);
  });
  this.mangNguoiDung.splice(index,1);

};