function DanhSachNguoiDung() {
  //this.mangNguoiDung = [];

  this.layDanhSachNguoiDungApi = function () {
    return $.ajax({
      url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung',
      type: 'GET'
    });     //console.log(this.mangNguoiDung);

  }

  this.themNguoiDung = function (nguoiDung) {
    return $.ajax({
      url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung',
      type: 'POST',
      data: nguoiDung
    }).done(function (data) {
      if (data === "tai khoan da ton tai") {
        alert(data);
      } else {
        location.reload();
      }
    }).fail(function (error) {
      console.log(error);
    });
  }
  this.deleteNguoiDung = function (id) {
    return $.ajax({
      url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`,
      type: 'DELETE',
    }).done(function (data) {
      location.reload();
    }).fail(function (error) {
      console.log(error);

    });
  }
  this.layThongTinNguoiDung=function(taiKhoan){
    var mangNguoiDung=JSON.parse(localStorage.getItem("DSND"));
    return mangNguoiDung.find(function (item){
      return (item.TaiKhoan===taiKhoan);
    });
  };
this.capNhatThongTinNguoiDung = function(nguoidung){
  var stringAgr = JSON.stringify(nguoidung);
  $.ajax({
    url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung',
    type: 'PUT',
    data: stringAgr,// nguoidung
    contentType: 'application/json',
    dataType: 'json'
  }).done(function(data){
    console.log(data);
  }).fail(function(error){
    console.log(error);
    
  });
}
}

