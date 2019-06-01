$(document).ready(function () {


  // $('#id').val()// dom id
  // $(".class").val()//dom  class


  // $("#id").click(function(){

  // });
  // var danhSachNguoiDung = new DanhSachNguoiDung();
  // var danhsachnguoidungsLocalStorageItem = "danhsachnguoidungs";

  var validation = new Validation();
  loadLocalStorage();

  $('#btnThemNguoiDung').click(function () {
    let title = "Thêm Người Dùng";
    //Heading Modal  
    addTitle(title);
    addFooter("btnThem");
    clearForm("TaiKhoan","HoTen","MatKhau","Email","SoDienThoai");
  });

  // uy quyen, khi id chua duoc tao ra
  $('body').delegate('#btnThem', 'click', function () {
    let taiKhoan = $('#TaiKhoan').val();
    let hoTen = $('#HoTen').val();
    let MatKhau = $('#MatKhau').val();
    let Email = $('#Email').val();
    let SoDienThoai = $('#SoDienThoai').val();

    let isValid = true;

    isValid &= validation.isEmpty(taiKhoan, "TaiKhoan", messageAccount);
    isValid &= validation.isEmpty(hoTen, "HoTen", messageName);
    isValid &= validation.isEmpty(MatKhau, "MatKhau", messagePassword);
    isValid &= validation.isEmpty(Email, "Email", messageEmail) && validation.patternValidation(Email, "Email", messageEmailFormat, regexEmail);
    isValid &= validation.isEmpty(SoDienThoai, "SoDienThoai", messagePhoneNumber);
    
    if(isValid){
    var nguoiDung = new NguoiDung(taiKhoan, hoTen, MatKhau, Email, SoDienThoai);
    danhSachNguoiDung.themNguoiDung(nguoiDung);
    setDataTableLocalStorage();

    //call to close button for close form
    $('#btnClose').click();

    }
  });


  $('body').delegate('#btnEdit', 'click', function () {
    //var taiKhoanId =   $('#id_taiKhoan').val();

    var taiKhoanId = $(this).data("taikhoan");

    let title = "Update Nguoi Dung";
    addTitle(title);
    addFooter("btnUpdate");
    editNguoiDung(taiKhoanId);

  });


});