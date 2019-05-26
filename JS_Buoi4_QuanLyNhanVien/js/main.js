//# load localStorage, if exists
layDuLieu();

getElementById("btnThemNV").addEventListener("click", function () {

  //clearInputForm("msnv", "name", "email", "password");

  var maNhanVien = getElementById("msnv").value;
if(kiemTraBiTrung(maNhanVien,"msnv","(*) Ma Nhan Vien Bi Trung")===true){

  var tenNhanVien = getElementById("name").value;
  var email = getElementById("email").value;
  var matKhau = getElementById("password").value;
  var date = getElementById("datepicker").value;
  var chucVu = getElementById("chucvu").value;


  var isValid = true;
  isValid &= validation.isEmpty(maNhanVien, "tbMaNV", "(*)  Vui Long nhap Ma NV");
  // &&   validation.validateLength(maNhanVien, "tbMaNV", "(*)  Ma Nhan Vien tu 6 - 12", 6, 12);
  isValid &= validation.isEmpty(tenNhanVien, "tbTen", "(*)  Vui long nhap Ten NV") && validation.validationString(tenNhanVien, "tbTen", "(*)  Vui long ki  tu", regexCharactor);
  isValid &= validation.isEmpty(email, "tbEmail", "(*)  Vui Long nhap email NV") && validation.validationString(email, "tbEmail", "(*)  Vui long Nhap dung dinh dang email ", regexEmail);
  isValid &= validation.isEmpty(matKhau, "tbMatKhau", "(*)  Vui Long nhap mat khau");
  isValid &= validation.kiemTraChucVu("chucvu", "tbChucVu", "(*)  Vui Long chon chuc vu");

  if (isValid) {
    var nhanVien = new NhanVien(maNhanVien, tenNhanVien, email, matKhau, date, chucVu);
    danhSacNhanVien.themNhanVien(nhanVien);
    addToTableStringTemplate(danhSacNhanVien.mangNhanVien);
    console.log(danhSacNhanVien.mangNhanVien);
    setLocalStorage();
    getElementById("btnDong")
  }
  clearInputForm("msnv", "name", "email", "password");
  //  clearInput("msnv","name","email","password","chucvu");

}

});

getElementById("searchName").addEventListener("keyup",function(){
  var chuoiTimKiem = getElementById("searchName").value;
  var mangTimKiem = danhSachNhanVien.timKiemNhanVien();
  addToTableStringTemplate(mangTimKiem);

});

function clearInputForm(msnv, name, email, password) {
  getElementById("msnv").removeAttribute("disabled");
  getElementById(msnv).value = "";
  getElementById(name).value = "";
  getElementById(email).value = "";
  getElementById(password).value = "";
}


function addToTableStringTemplate(danhSacNhanViens) {
  var tbodyNhanVien = getElementById("tableDanhSach");
  var content = ``;
  danhSacNhanViens.map(item => {

    content += `
      <tr>
      <td id="tdMaNhanVien">${item.maNhanVien}</td>
      <td id="tbTenNhanVien">${item.tenNhanVien}</td>
      <td id="tdEmail">${item.email}</td>
      <td id="tdDate">${item.date}</td>
      <td id="tdChucVu">${item.chucVu}</td>
      <td>
        <button class="btn btn-primary" id="btnEdit" data-toggle="modal" data-target="#myModal" onClick="editNhanVien('${item.maNhanVien}')">Sửa</button>
        <button class="btn btn-danger" id="btnDelete" onClick="deleteNhanVien('${item.maNhanVien}')">Xóa</button>
      </td>
      </tr>
    `;

  });
  tbodyNhanVien.innerHTML = content;
  // String template example
  // var name="Cybersoft";
  // var result = `hello ${name}`;// input : hello cybersoft
}

function deleteNhanVien(code){
  danhSacNhanVien.xoaNhanVien(code);
  addToTableStringTemplate(danhSacNhanVien.mangNhanVien);
  setLocalStorage();
}

function editNhanVien(codeNhanVien) {
  console.log(codeNhanVien);
  getElementById("btnThemNV").style.display = "none";
  getElementById("btnCapNhat").style.display = "block";

  // not get full data from form becase in the  case, column  show not full field , have only id 
  var nhanVien = danhSacNhanVien.layThongTinNhanvien(codeNhanVien);

  getElementById("msnv").value = codeNhanVien;
  getElementById("msnv").disabled = true;
  getElementById("name").value = nhanVien.tenNhanVien;
  getElementById("email").value = nhanVien.email;
  getElementById("password").value = nhanVien.matKhau;
  getElementById("datepicker").value = nhanVien.date;
  getElementById("chucvu").value = nhanVien.chucVu;
}

getElementById("btnCapNhat").addEventListener("click", function () {
  var maNhanVien = getElementById("msnv").value;
  var tenNhanVien = getElementById("name").value;
  var email = getElementById("email").value;
  var matKhau = getElementById("password").value;
  var date = getElementById("datepicker").value;
  var chucVu = getElementById("chucvu").value;

  var nhanVien = new NhanVien(maNhanVien, tenNhanVien, email, matKhau, date, chucVu);
  danhSacNhanVien.updateNhanVien(nhanVien);
  addToTableStringTemplate(danhSacNhanVien.mangNhanVien);
  setLocalStorage();

});

function setLocalStorage() {
  localStorage.setItem(danhsachnhanviensLocalstorages, JSON.stringify(danhSacNhanVien.mangNhanVien));
}


function getLocalStorage() {
  var data = [];
  if (localStorage.getItem(danhsachnhanviensLocalstorages) != null) {
    data = JSON.parse(localStorage.getItem(danhsachnhanviensLocalstorages));
  }
  return data;
}

function layDuLieu() {

  danhSacNhanVien.mangNhanVien = getLocalStorage();
  addToTableStringTemplate(danhSacNhanVien.mangNhanVien);
}

// function addToTable(danhSacNhanViens) {
//   var tbodyNhanVien = getElementById("tableDanhSach");
//   tbodyNhanVien.innerHTML = "";
//   danhSacNhanViens.map(nhanvien => {
//     var trNhanVien = createNode("tr");

//     var tdMaNhanVien = createNode("td");
//     var tdTenNhanVien = createNode("td");
//     var tdEmail = createNode("td");
//     var tdNgaySinh = createNode("td");
//     var tdChucVu = createNode("td");

//     tdMaNhanVien.innerHTML = nhanvien.maNhanVien;
//     tdTenNhanVien.innerHTML = nhanvien.tenNhanVien;
//     tdEmail.innerHTML = nhanvien.email;
//     tdNgaySinh.innerHTML = nhanvien.date;
//     tdChucVu.innerHTML = nhanvien.chucVu;

//     trNhanVien.appendChild(tdMaNhanVien);
//     trNhanVien.appendChild(tdTenNhanVien);
//     trNhanVien.appendChild(tdEmail);
//     trNhanVien.appendChild(tdNgaySinh);
//     trNhanVien.appendChild(tdChucVu);

//     tbodyNhanVien.appendChild(trNhanVien);


//   });