//  alert("Cyber soft !");

// Hoisting 
var num1=  "10";
var num2=5;
num1 = parseInt(num1);
var total = num1+num2;
//console.log(total)

function calTotal(a,b){
    var result = a+b;
    return result;
}
var result= calTotal(10,20);
console.log(result);

var list= ["a","b","c"];

for(var i =0; i<list.length;i++){
    console.log(list[i]);
}
list.map(function(item){
    console.log(item);
});
/// === check data type
function ifDemo(chuoi){
    if(chuoi==="cybersoft"){
        console.log("Xin Chao "+chuoi );
    }
    else {
        console.log("Hello World");
    }
}
ifDemo("cybersoft");
ifDemo("another");


function addTwoNumber(){
    var number_1 = document.getElementById('number_1').value;
    var number_2 = document.getElementById('number_2').value;

    var total = parseFloat(number_1)+ parseFloat(number_2);

    document.getElementById("showResult").innerHTML=total;
    document.getElementById("showResult").style.color="red";

    console.log(total);
}
// callback function
document.getElementById("btnTru").onclick = truHaiSo;
function truHaiSo(){
    var number_tru_1 = document.getElementById('number_1').value;
    var number_tru_2 = document.getElementById('number_2').value;

    var tru_hai_so = parseFloat(number_tru_1)- parseFloat(number_tru_2);

    document.getElementById("showResult").innerHTML=tru_hai_so;
    document.getElementById("showResult").style.color="red";
}