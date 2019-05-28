function tinhDiemTrungBinh(diemToan, diemVan, diemHoa) {
    return (parseInt(diemToan) + parseInt(diemVan) + parseInt(diemHoa)) / 3;
}

function getElementByID(id) {
    return document.getElementById(id);
}

function createElement(tag) {
    return document.createElement(tag);
}


var sinhViens = [];
layDuLieu();


function addToTable(sinhViens) {

    var tblBody = getElementByID("tbodySinhVien");
    tblBody.innerHTML="";
    sinhViens.map(item => {
        var tagTR = createElement("tr");
        var tagTDMaSinhVien = createElement("td");
        var tagTDTenSinhVien = createElement("td");
        var tagTDLoaiSinhVien = createElement("td");
        var tagTDdiemTB = createElement("td");
        var tagTDdiemRenLuyen = createElement("td");

        tagTDMaSinhVien.innerHTML = item._maSinhVien;
        tagTDTenSinhVien.innerHTML = item._tenSinhVien;
        tagTDLoaiSinhVien.innerHTML = item._loaiSinhVien;
        tagTDdiemTB.innerHTML = item._diemTB;
        tagTDdiemRenLuyen.innerHTML = item._diemRenLuyen;

        tagTR.appendChild(tagTDMaSinhVien);
        tagTR.appendChild(tagTDTenSinhVien);
        tagTR.appendChild(tagTDLoaiSinhVien);
        tagTR.appendChild(tagTDdiemTB);
        tagTR.appendChild(tagTDdiemRenLuyen);

        tblBody.appendChild(tagTR);



    });
}



function getLocalStorage(){
    var data=[];
    if( localStorage.getItem("danhsachsinhviens")!=null){
        data = JSON.parse( localStorage.getItem("danhsachsinhviens"));
    }
    return data;   
}
function layDuLieu(){  

    sinhViens = getLocalStorage();
    addToTable(sinhViens);
}

getElementByID("btnThemSinhVien").onclick = function () {
    var maSinhVien = getElementByID("txtMaSV").value;
    var tenSinhVien = getElementByID("txtTenSV").value;
    var loaiSinhVien = getElementByID("loaiSV").value;
    var diemToan = getElementByID("txtDiemToan").value;
    var diemLy = getElementByID("txtDiemLy").value;
    var diemHoa = getElementByID("txtDiemHoa").value;
    var diemRenLuyen = getElementByID("txtDiemRenLuyen").value;
    
    var sinhVien = new SinhVien(maSinhVien, tenSinhVien, loaiSinhVien, diemToan, diemLy, diemHoa, diemRenLuyen);
    
    sinhViens.push(sinhVien);
    
    localStorage.setItem("danhsachsinhviens",JSON.stringify(sinhViens));
    
    addToTable(sinhViens);
}
