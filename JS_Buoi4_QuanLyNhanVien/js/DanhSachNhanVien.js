function DanhSachNhanVien() {
  this.mangNhanVien = [];

  this.themNhanVien = function (nhanVien) {
    this.mangNhanVien.push(nhanVien);
  }

  this.layThongTinNhanvien = function (maNV) {
    return this.mangNhanVien.find(function (item) {
      return (item.maNhanVien === maNV);
    });
  }

  this.updateNhanVien = function (nhanVien) {
    return this.mangNhanVien.map(item => {
      if (nhanVien.maNhanVien === item.maNhanVien) {
        item.tenNhanVien = nhanVien.tenNhanVien;
        item.email = nhanVien.email;
        item.matKhau = nhanVien.matKhau;
        item.date = nhanVien.date;
        item.chucVu = nhanVien.chucVu;
      }
    });
  }

}

DanhSachNhanVien.prototype.xoaNhanVien = function (maNV) {
  let index = this.mangNhanVien.findIndex(function (item) {
    return (item.maNhanVien === maNV);
  });
  this.mangNhanVien.splice(index, 1);
};

DanhSachNhanVien.timKiemNhanVien = function(chuoiTimKiem) {
  // 
//   var searchArray = [];
//   this.mangNhanVien.map(item =>{
//     if(item.tenNhanVien.toLowerCase().indexOf(chuoiTimKiem.toLowerCase())>-1){
//       searchArray.push(item);
//     }
//   });
// return searchArray;

// functional Programming
return this.mangNhanVien.filter(item =>item.tenNhanVien.toLowerCase().indexOf(chuoiTimKiem.toLowerCase())>-1);
};