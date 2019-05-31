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

        
        this.getElementById(id).innerHTML = message;
        this.getElementById(id).style.display = style;
    };

    this.getElementById = function(id){
        return document.getElementById(id);
    }

    this.isEmpty = function (inputValue, spanId, message) {
        if (inputValue === "") {
            this.setType(spanId, message, "block");
            return false;
        } else {
            this.setType(spanId, "", "none");
            return true;
        }
    };

    this.patternValidation = function (inputValue, spandId, message, pattern) {

        if (inputValue.match(pattern)) {
            this.setType(spandId, "", "none");
            return true;
        }
        this.setType(spandId, message, "block");
        return false;
    };
    this.kiemTraBiTrung = function (input, spandId, message, danhSachNguoiDungs) {
        var check = !danhSachNguoiDungs.some(item => {
            return (item.taiKhoan === input);
        });
        if (check) {
            this.setType(spandId, "", "none");
            return true;
        }
        this.setType(spandId, message, "block");
        return false;

    };
}

