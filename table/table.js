var table = document.getElementById("table");
var tableRows = table.getElementsByTagName("tr");
for(var i = 0; i < tableRows.length; i++) {
    var row = tableRows[i];
    setMouseEvent(row);
    setButtons(row);
}

function setMouseEvent(row) {
    row.onmouseover = function() {
        this.style.backgroundColor = "#f2f2f2";
    };
    row.onmouseout = function() {
        this.style.backgroundColor = "transparent";
    };
}
function setButtons(row) {
    var tds = row.getElementsByTagName("td");
    if(tds.length == 0)
        return;
    var operations = tds[tds.length - 1].getElementsByTagName("a");
    operations[0].onclick = changeRow;
    operations[1].onclick = deleteRow;
    function changeRow() {
        var col = window.prompt("Please input which column you want to change: \n" + 
                                  "The leftmost column corresponds to column number 0.");
        tds[col].innerHTML = window.prompt("Please input the new value you want to change: ");
        window.alert("The value has been successfully changed!");
    }
    function deleteRow() {
        var confirm = window.confirm("Do you really mean to delete this row?"); 
        if(confirm) {
            row.parentElement.removeChild(row);
            window.alert("Delete successfully!");
        }
    }
}

var addBtn = document.getElementById("addbtn");
addBtn.onclick = addRow;
function addRow() {
    name = window.prompt("Please input the following information about the new student.\nname: ");
    sex = window.prompt("sex: ");
    age = window.prompt("age: ");
    major = window.prompt("major: ");
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = name;
    row.appendChild(td1);
    var td2 = document.createElement("td");
    td2.innerHTML = sex;
    row.appendChild(td2);
    var td3 = document.createElement("td");
    td3.innerHTML = age;
    row.appendChild(td3);
    var td4 = document.createElement("td");
    td4.innerHTML = major;
    row.appendChild(td4);
    var td5 = document.createElement("td");
    td5.innerHTML = "<a href='#'>Change</a>" + 
                    "<br>" +  
                    "<a href='#'>Delete</a>";
    row.appendChild(td5);
    setButtons(row);
    
    table.appendChild(row);
    window.alert("A new row has been successfully created!");
}
