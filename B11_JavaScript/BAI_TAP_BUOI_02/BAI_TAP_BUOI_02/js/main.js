var tbl = getElement("tblBody");

var scores = [];
var names = [];
getElement("divHienThi").innerHTML = "";

function averageScores() {
    var tblRows = tbl.rows;
    for (var i = 0; i < tblRows.length; i++) {
        names.push(tblRows[i].cells[2].innerHTML);
        scores.push(tblRows[i].cells[3].innerHTML * 1);
    }

}
averageScores();
// find student have max score
getElement("maxScore").onclick = function (e) {
    var count = -1;
    var keepMaxLocation = 0;
    var scoreMax = scores[keepMaxLocation];

    scores.map(item => {
        count++;
        if (scoreMax < item) {
            keepMaxLocation = count;
            scoreMax = item;
        }
    });

    var showData = names[keepMaxLocation] + ": " + scoreMax;
    getElement("divHienThi").innerHTML = showData;
};

// get student have min score
getElement("minScore").onclick = function (e) {

    var count = -1;
    var keepMinLocation = 0;
    var scoreMin = scores[keepMinLocation];

    scores.map(item => {
        count++;
        if (scoreMin > item) {
            keepMinLocation = count;
            scoreMin = item;
        }
    });

    var showData = names[keepMinLocation] + ": " + scoreMin;
    getElement("divHienThi").innerHTML = showData;
};

var studentExcellent = [];
// get student excellent(score > 9)
getElement("studentEx").onclick = function () {
    studentExcellent = [];
    // averageScores();
    var count = -1;

    scores.map(item => {
        count++;
        if (item >= 8.0) {
            studentExcellent.push(count * 1);
        }
    });

    var showData = " ";
    if (studentExcellent.length > 0) {
        studentExcellent.map(index => {
            showData += names[index] + ":" + scores[index] + "<br>";
       
        });
    }
    getElement("divHienThi").innerHTML = showData;
};

// student have Score > 5
getElement("avgScoreHigh5").onclick = function () {
    
    // console.log(getElement("divHienThi").innerHTML);
    studentExcellent = [];
    console.log(studentExcellent);
    var count = -1;

    scores.map(item => {
        count++;
        if (item >= 5.0) {
            studentExcellent.push(count * 1);
        }
    });
    console.log(studentExcellent);
    var showData = " ";
    if (studentExcellent.length > 0) {
        studentExcellent.map(index => {
            showData += names[index] + ":" + scores[index] + "\n";
            console.log(showData);
        });
    }
    getElement("divHienThi").innerHTML = showData;
    console.log("after", showData);
    console.log("////////////")
  //  console.log(getElement("divHienThi").innerHTML);
};

getElement("btnDescending").onclick = function () {
    getElement("divHienThi").innerHTML = " ";
    studentExcellent = [];
    var count = -1;
    for (var i = 0; i < scores.length; i++) {
        for (var j = i + 1; i < scores.length; i++) {
            if (scores[i] > scores[j]) {
                swapIndex[i, j, scores];
                swapIndex[i, j, names];
            }
        }
    }

    var showData = " ";
    names.map(element => {
        count++;
        showData += element + ": " + scores[count] + "-";
    });

    getElement("divHienThi").innerHTML = showData;
};

function swapIndex(a, b, c) {
    var tmp = c[a];
    c[a] = c[b];
    c[b] = tmp;
}

function getElement(id) {
    return document.getElementById(id);
}
