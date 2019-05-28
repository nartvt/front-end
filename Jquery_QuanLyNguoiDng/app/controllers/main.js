$(document).ready(function () {

    // $('#id').val()// dom id
    // $(".class").val()//dom  class


    // $("#id").click(function(){

    // });
    var danhSachNguoiDung = new DanhSachNguoiDung();
    var danhsachnguoidungs = "danhsachnguoidungs";
    layDuLieu();
    $('#btnThemNguoiDung').click(function () {
        var title = "Thêm Người Dùng";

        //Heading Modal
        $('.modal-title').html(title);

        var footer = `
        <button class="btn btn-success" id="btnThem">Thêm</button>
        <button class="btn btn-danger" id = "btnClose" data-dismiss="modal">Close</button>
        `;

        $('.modal-footer').html(footer);
    });

    // uy quyen, khi id chua duoc tao ra
    $('body').delegate('#btnThem', 'click', function () {
        var taiKhoan = $('#TaiKhoan').val();
        var hoTen = $('#HoTen').val();
        var MatKhau = $('#MatKhau').val();
        var Email = $('#Email').val();
        var SoDienThoai = $('#SoDienThoai').val();

        var nguoiDung = new NguoiDung(taiKhoan, hoTen, MatKhau, Email, SoDienThoai);
        danhSachNguoiDung.themNguoiDung(nguoiDung);
        addToTableStringTemplate(danhSachNguoiDung.mangNguoiDung);
        setLocalStorage(danhSachNguoiDung.mangNguoiDung);


                //call to close button for close form
                $('#btnClose').click();

    });

    function addToTableStringTemplate(danhSachNguoiDungs) {
        var tbodyDom = $('#tblDanhSachNguoiDung');
        var content = ``;
        danhSachNguoiDungs.map((item, index) => {
            content += `<tr>
                <td>${index+1}</td>
                <td id="id_taiKhoan">${item.taiKhoan}</td>
                <td >${item.hoTen}</td>
                <td>${item.matKhau}</td>
                <td>${item.email}</td>
                <td>${item.soDienThoai}</td>
                <td>
                <button class="btn btn-primary" id="btnEdit" data-toggle="modal" data-target="#myModal" data-taikhoan="${item.taiKhoan}">Sửa</button>
                <button class="btn btn-danger" id="btnDelete" onClick="deleteNhanVien('${item.maNhanVien}')">Xóa</button>
              </td>
            </tr>`;
        });
        tbodyDom.html(content);
    }

    $('body').delegate('#btnEdit', 'click', function () {
        //var taiKhoanId =   $('#id_taiKhoan').val();

        var taiKhoanId = $(this).data("taikhoan");
        console.log(taiKhoanId);
        editNguoiDung(taiKhoanId);
    });


    function editNguoiDung(taiKhoanId) {
        var nguoidung = danhSachNguoiDung.timNguoiDungById(taiKhoanId);
        console.log(nguoidung);
        $('#TaiKhoan').val(nguoidung.taiKhoan);
        $('#HoTen').val(nguoidung.hoTen);
        $('#MatKhau').val(nguoidung.matKhau);
        $('#Email').val(nguoidung.email);
        $('#SoDienThoai').val(nguoidung.soDienThoai);

    }

    //

    function setLocalStorage(danhsacnhanviens) {
        localStorage.setItem(danhsachnguoidungs, JSON.stringify(danhsacnhanviens));
    }


    function getLocalStorage() {
        var data = [];
        if (localStorage.getItem(danhsachnguoidungs) != null) {
            data = JSON.parse(localStorage.getItem(danhsachnguoidungs));
        }
        return data;
    }

    function layDuLieu() {

        danhSachNguoiDung.mangNguoiDung = getLocalStorage();
        addToTableStringTemplate(danhSachNguoiDung.mangNguoiDung);
    }
});