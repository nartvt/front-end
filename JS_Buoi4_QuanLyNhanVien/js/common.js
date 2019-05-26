

getElementById("btnThem").addEventListener("click", function () {
    getElementById("btnCapNhat").style.display = "none";
    getElementById("btnThemNV").style.display = "block";
  });
  
  //#  Define attibute global for use
  var validation = new validation();
  var danhSacNhanVien = new DanhSachNhanVien();
  var danhsachnhanviensLocalstorages ="danhsachnhanviensLocalstorages";
  var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regexCharactor = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
  


function createNode(nodeName) {
    return document.createElement(nodeName);
  }
  
  function getElementById(btnId) {
    return document.getElementById(btnId);
  }