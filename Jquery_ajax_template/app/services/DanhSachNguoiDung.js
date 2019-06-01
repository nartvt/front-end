function DanhSachNguoiDung() {
  //this.mangNguoiDung = [];

  this.layDanhSachNguoiDungApi = function () {
    $.ajax({
      url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung',
      type: 'GET',
      dataType : "json"
    })
      .done(function (data) {
        createTableNguoiDung(data);
        console.log(data);
        

      }).fail(function (error) {
        console.log(error);

      });
      //console.log(this.mangNguoiDung);
      
  }
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