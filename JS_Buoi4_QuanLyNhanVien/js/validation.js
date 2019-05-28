function validation() {

    this.validateLength = function (inputValue, spanId, message, min, max) {
        if (inputValue.length >= min && inputValue.length <= max) {
            this.setType(spanId, "", "none")
            return true;
        }
        this.setType(spanId, message, "block")
        return false;
    };

    this.kiemTraChucVu = function (inputValue, spanId, message) {
        if (getElementById(inputValue).selectedIndex != 0) {
            this.setType(spanId, "", "none");
            return true;
        }
        this.setType(spanId, message, "block");
        return false;
    };

    this.setType = function (id, message, style) {
        getElementById(id).innerHTML = message;
        getElementById(id).style.display = style;
    };

    this.isEmpty = function (inputValue, spanId, message) {
        if (inputValue === "") {
            this.setType(spanId, message, "block");
            return false;
        } else {
            this.setType(spanId, "", "none");
            return true;
        }
    };

    this.validationString = function (inputValue, spandId, message, pattern) {

        if (inputValue.match(pattern)) {
            this.setType(spandId, "", "none");
            return true;
        }
        this.setType(spandId, message, "block");
        return false;
    };

}
var danhSachNhanVien = new DanhSachNhanVien();

function kiemTraBiTrung(input, spandId, message) {
    danhSacNhanVien.mangNhanVien.map(item => {
        if(input===item.maNhanvien){
            getElementById(spandId).innerHTML=message;
            getElementById(spandId).style.display="block";
            return false;
        }else{
            getElementById(spandId).innerHTML="";
            //getElementById(spandId).style.display="none";
            return true;
        }
    });
}