var messageAccount = '(*) Tai Khoan Bi Rong';
var messageName = '(*) Ho Ten Bi Rong';
var messagePassword = '(*) Password Bi Rong';
var messageEmail = '(*) Email Bi Rong';
var messageEmailFormat = '(*) Email Khong Dung Dinh Dang';
var messagePhoneNumber = '(*) So Dien Thoai Bi Rong';

var danhSachNguoiDung = new DanhSachNguoiDung();
var danhsachnguoidungsLocalStorageItem = "danhsachnguoidungs";

var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var regexCharactor = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");



function addFooter(id) {
    let footer = `
    <button class="btn btn-success" id="${id}">Thêm</button>
    <button class="btn btn-danger" id = "btnClose" data-dismiss="modal">Close</button>
    `;
    $('.modal-footer').html(footer);
}
function addTitle(title) {
    $('.modal-title').html(title);
}

// function clearForm(){
//     arguments.map(item =>{
//        getElementById(item).value="";
//     });
// }


function setLocalStorage(danhsachnguoidungs) {
    localStorage.setItem(danhsachnguoidungsLocalStorageItem, JSON.stringify(danhsachnguoidungs));
}


function getLocalStorage() {
    var data = [];
    if (localStorage.getItem(danhsachnguoidungsLocalStorageItem) != null) {
        data = JSON.parse(localStorage.getItem(danhsachnguoidungsLocalStorageItem));
    }
    return data;
}

function loadLocalStorage() {
    // first load localStorage
    setMangNguoiDung(getLocalStorage());
    setDataToTableStringTemplate(getMangNguoiDung());
}

function setMangNguoiDung(mangNguoiDungs) {
    danhSachNguoiDung.mangNguoiDung = mangNguoiDungs;
}
function getMangNguoiDung() {
    return danhSachNguoiDung.mangNguoiDung;
}

function setDataTableLocalStorage(danhSachNguoiDungs) {
    setDataToTableStringTemplate(danhSachNguoiDungs);
    setLocalStorage(danhSachNguoiDungs);
}
function deleteNguoiDung(taikhoan) {
    danhSachNguoiDung.deleteNguoiDung(taikhoan);
    setDataTableLocalStorage(getMangNguoiDung());
}
//
function editNguoiDung(taiKhoanId) {

    let nguoidung = danhSachNguoiDung.timNguoiDungById(taiKhoanId);
    $('#TaiKhoan').val(taiKhoanId);
    $('#HoTen').val(nguoidung.hoTen);
    $('#MatKhau').val(nguoidung.matKhau);
    $('#Email').val(nguoidung.email);
    $('#SoDienThoai').val(nguoidung.soDienThoai);

    let taiKhoan = $('#TaiKhoan').val();
    let hoTen = $('#HoTen').val();
    let MatKhau = $('#MatKhau').val();
    let Email = $('#Email').val();
    let SoDienThoai = $('#SoDienThoai').val();

    let nguoiDung = new NguoiDung(taiKhoan, hoTen, MatKhau, Email, SoDienThoai);
    danhSachNguoiDung.updateNguoidung(nguoiDung);

    setDataTableLocalStorage(getMangNguoiDung());

}

function getElementById(id) {
    return document.getElementById(id);
}
function setDataToTableStringTemplate(danhSachNguoiDungs) {
    var tbodyDom = $('#tblDanhSachNguoiDung');
    var content = ``;
    danhSachNguoiDungs.map((item, index) => {
        content += `<tr>
                    <td>${index + 1}</td>
                    <td id="id_taiKhoan">${item.taiKhoan}</td>
                    <td>${item.hoTen}</td>
                    <td>${item.email}</td>
                    <td>${item.matKhau}</td>
                    <td>${item.soDienThoai}</td>
                    <td>
                    <button class="btn btn-primary" id="btnEdit" data-toggle="modal" data-target="#myModal" data-taikhoan="${item.taiKhoan}">Edit</button>
                    <button class="btn btn-danger" id="btnDelete" onClick="deleteNguoiDung('${item.taiKhoan}')">Delete</button>
                  </td>
                </tr>`;
    });
    tbodyDom.html(content);
}
