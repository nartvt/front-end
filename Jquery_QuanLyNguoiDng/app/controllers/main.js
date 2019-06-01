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
    //addTitle(title);
    //addFooter("btnThem");
    $('.modal-title').html(title);
    let footer = `
    <button class="btn btn-success" id="btnThem">Thêm</button>
    <button class="btn btn-danger" id = "btnClose" data-dismiss="modal">Close</button>
    `;
    $('.modal-footer').html(footer);

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

    if (isValid) {
      var nguoiDung = new NguoiDung(taiKhoan, hoTen, MatKhau, Email, SoDienThoai);
      danhSachNguoiDung.themNguoiDung(nguoiDung);
      setDataTableLocalStorage();

      //call to close button for close form
      $('#btnClose').click();

    }
    location.reload();
  });


  $('body').delegate('#btnEdit', 'click', function () {
    //var taiKhoanId =   $('#id_taiKhoan').val();


    let title = "Update Nguoi Dung";
    addTitle(title);
    addFooter("btnUpdate");
    var taiKhoanId = $(this).data("taikhoan");
    editNguoiDung(taiKhoanId);
   
  });


});