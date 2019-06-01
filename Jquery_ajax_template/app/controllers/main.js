$(document).ready(function () {
var danhSachNguoiDung =  new DanhSachNguoiDung();

lay_danhSachNguoiDung();
//createTableNguoiDung(danhSachNguoiDung.mangNguoiDung);


$("#btnThemNguoiDung").click(function () {
  updateTitleFooter("Thêm Người Dùng","btnThem","Thêm");
  $("#TaiKhoan").removeAttr("disabled");
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
  danhSachNguoiDung.themNguoiDung(nguoiDung);
  
});
function deleteNguoiDung(taiKhoanId){
  danhSachNguoiDung.deleteNguoiDung(taiKhoanId).done(function (data) {     
      location.reload();    
  }).fail(function (error) {
    console.log(error);      
  });
}
function createTableNguoiDung(danhSachNguoiDungs){
  var tbodyDom = $('#tblDanhSachNguoiDung');
  var content = ``;
  danhSachNguoiDungs.map((item, index) => {
    content += `<tr>
    <td>${index + 1}</td>
    <td >${item.TaiKhoan}</td>
    <td>${item.HoTen}</td>
    <td>${item.Email}</td>
    <td>${item.MatKhau}</td>
    <td>${item.SoDT}</td>
    
    <td>
    <button class="btn btn-primary" id="btnSua" data-toggle="modal" data-target="#myModal" data-taikhoan="${item.TaiKhoan}">Sửa</button>
    <button class="btn btn-danger" id="btnXoa" onClick="deleteNguoiDung('${item.TaiKhoan}')">Delete</button>
    </td>
    </tr>`;
  });
  tbodyDom.html(content);
}
$("body").delegate("#btnXoa","click",function(){
  var taiKhoanId = $(this).data("taikhoan");
  danhSachNguoiDung.deleteNguoiDung(taiKhoanId);

});

function  lay_danhSachNguoiDung(){
  danhSachNguoiDung.layDanhSachNguoiDungApi().done(function (data) {
    localStorage.setItem("DSND",JSON.stringify(data));
    createTableNguoiDung(data);
    console.log(data);
    
    
  }).fail(function (error) {
    console.log(error);
    
  });
}

$("body").delegate("#btnSua","click",function(){

 updateTitleFooter("Sửa Người Dùng","btnUpdate","Sửa");

  var taiKhoanId = $(this).data("taikhoan");

  var nguoiDung = danhSachNguoiDung.layThongTinNguoiDung(taiKhoanId);
 $("#TaiKhoan").val(nguoiDung.TaiKhoan);
 $("#TaiKhoan").attr("disabled",true);

 $("#HoTen").val(nguoiDung.HoTen);
  $("#MatKhau").val(nguoiDung.MatKhau);
 $("#Email").val(nguoiDung.Email);
 $("#SoDienThoai").val(nguoiDung.SoDT);
 $("#loaiNguoiDung").val(nguoiDung.maLoaiNguoiDung);
  

});
function updateTitleFooter(_title, id,name){
  let title = _title;  
  let footer = `
  <button class="btn btn-success" id="${id}">${name}</button>
  <button class="btn btn-danger" id="btnDong" data-dismiss="modal">Đóng</button>`;
  
  $(".modal-title").html(title);
  $(".modal-footer").html(footer);

}

});