$(document).ready(function () {
var danhSachNguoiDung =  new DanhSachNguoiDung();

lay_danhSachNguoiDung();
createTableNguoiDung(danhSachNguoiDung.mangNguoiDung);
function  lay_danhSachNguoiDung(){
  danhSachNguoiDung.layDanhSachNguoiDungApi();
}

  $("#btnThemNguoiDung").click(function () {
    let title = "Thêm Người Dùng";


    let footer = `
        <button class="btn btn-success" id="btnThem">Thêm</button>
        <button class="btn btn-danger" id="btnDong" data-dismiss="modal">Đóng</button>
        `;
    $(".modal-title").html(title);
    $(".modal-footer").html(footer);
  });

$("body").delegate("#btnThem","click",function(){""
  var taiKhoan = $("#TaiKhoan").val();
  var hoTen = $("#HoTen").val();
  var matKhau = $("#MatKhau").val();
  var email = $("#Email").val();
  var soDienThoai = $("#SoDienThoai").val();
  var loaiNguoiDung = $("#loaiNguoiDung").val();

  var nguoiDung = new NguoiDung(taiKhoan,hoTen,matKhau,email,soDienThoai,loaiNguoiDung);
  console.log(nguoiDung);
});


});