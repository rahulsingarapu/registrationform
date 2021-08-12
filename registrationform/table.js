var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Firstname"] = document.getElementById("Firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["fathername"] = document.getElementById("fathername").value;
    formData["mothername"] = document.getElementById("mothername").value;
    formData["adharnumber"] = document.getElementById("adharnumber").value;
    formData["phonenumber"] = document.getElementById("phonenumber").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("formlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fathername;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.mothername;
    cell5 = newRow.insertCell(1);
    cell5.innerHTML = data.adharnumber;
    cell6 = newRow.insertCell(1);
    cell6.innerHTML = data.phonenumber;
     
}

function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("fathername").value = "";
    document.getElementById("mothername").value = "";
    document.getElementById("adharnumber").value = "";
    document.getElementById("phonenumber").value = "";
    selectedRow = null;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.fathername;
    selectedRow.cells[3].innerHTML = formData.mothername;
    selectedRow.cells[4].innerHTML = formData.adharnumber;
    selectedRow.cells[5].innerHTML = formData.phonenumber;
}


function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}