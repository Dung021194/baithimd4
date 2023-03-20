let arrDepartment;
window.onload = findAll();

function findAll() {
    $.ajax({
        url: "http://localhost:8080/employees",
        type: "GET",
        success(data) {
            let arr = data
            let context = ` <h1>List Employee</h1> 
                            <table border="1"><tr>
                            <th>EmployeeCode</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Department</th>
                            <th colspan="2">Action</th>
                            </tr>`
            for (let i = 0; i < arr.length; i++) {
                context += `<tr>                       
                            <td>${arr[i].code}</td>
                            <td>
                            <a class="button" onclick="detail(${arr[i].id})">${arr[i].name}</a>
                            </td>
                            <td>${arr[i].age}</td>
                            <td>${arr[i].salary}</td>
                            <td>${arr[i].department.name}</td>
                            <td><button onclick="updateForm(${arr[i].id})">Update</button></td>
                            <td><button onclick="deleteProduct(${arr[i].id})">Delete</button></td>
                            </tr>`
            }
            context += `</table>`
            document.getElementById("displayEmployee").innerHTML = context
            $("#form").hide()
            $("#displayEmployee").show()
            $("#detail").hide()

        }
    })
}

function createForm() {
    let content = `<label><select required id="department"></label>`
    for (let i = 0; i < arrDepartment.length; i++) {
        content += `<option value="${arrDepartment[i].id}">${arrDepartment[i].name}</option>`
    }
    content += `</select>`
    document.getElementById("departmentList").innerHTML = content
    $("#code").val("")
    $("#name").val("")
    $("#age").val("")
    $("#salary").val("")
    document.getElementById("title").innerHTML = "Create Employee"
    $("#form").show()
    document.getElementById("action").setAttribute("onclick", "createEmployee()")
    document.getElementById("action").innerHTML = "Create"
    $("#displayEmployee").hide()
}

window.onload = getDepartments();

function getDepartments() {
    $.ajax({
        url: "http://localhost:8080/employees/departments",
        type: "GET",
        success(data) {
            arrDepartment = data
        }
    })
}

function createEmployee() {
    let employee = {
        code: $("#code").val(),
        name: $("#name").val(),
        age: $("#age").val(),
        salary: $("#salary").val(),
        department: {
            id: $("#department").val()
        }
    }
    $.ajax({
        url: "http://localhost:8080/employees",
        type: "POST",
        contentType: "application/json",
        accept: "application/json",
        data: JSON.stringify(employee),
        success() {
            alert("Create successfully")
            findAll()
        }
    })
    event.preventDefault()
}

function updateForm(id) {
    sessionStorage.setItem("update", id)
    let content = `<label><select id="department"></label>`
    for (let i = 0; i < arrDepartment.length; i++) {
        content += `<option value="${arrDepartment[i].id}">${arrDepartment[i].name}</option>`
    }
    content += `</select>`
    document.getElementById("departmentList").innerHTML = content
    $.ajax({
        url: `http://localhost:8080/employees/${id}` ,
        type: "GET",
        success(data) {
            $("#code").val(data.code)
            $("#name").val(data.name)
            $("#age").val(data.age)
            $("#salary").val(data.salary)
            document.getElementById("title").innerHTML = "Update Employee"
            $("#form").show()
            document.getElementById("action").setAttribute("onclick", `updateEmployee(${id})`)
            document.getElementById("action").innerHTML = "Update"
            $("#displayEmployee").hide()
        }
    })
}

function updateEmployee(id) {
    let employee = {
        id: sessionStorage.getItem("update"),
        code: $("#code").val(),
        name: $("#name").val(),
        age: $("#age").val(),
        salary: $("#salary").val(),
        department: {
            id: $("#department").val()
        }
    }
    $.ajax({
        url: "http://localhost:8080/employees",
        type: "POST",
        contentType: "application/json",
        accept: "application/json",
        data: JSON.stringify(employee),
        success() {
            alert("Update ok")
            findAll()
        }
    })
    event.preventDefault()
}

function deleteProduct(id) {
    if (confirm("Do you want to delete?")) {
        $.ajax({
            url: "http://localhost:8080/employees/" + id,
            type: "DELETE",
            success() {
                alert("delete ok")
                findAll()
            }
        })
    }
}

function back() {
    $("#form").hide()
    $("#displayEmployee").show()
    $("#detail").hide()

    event.preventDefault()
}
function detail(id){
    $.ajax({
        url: "http://localhost:8080/employees/detail/" + id,
        type: "GET",
        success(data) {
            showDetail(data)
            $("#detail").show()
        }
    })
}
function showDetail(data){
    let context = ` <h1>Employee Detail</h1> 
                  <p>EmployeeCode: ${data.code} </p><br>
                  <p>Name: ${data.name} </p><br>
                  <p>Salary: ${data.salary} </p><br>
                  <p>Age: ${data.age} </p><br>
                  <p>Department:${data.department.name} </p><br>
                  <button onclick="back()">Back</button>
                 `
    document.getElementById("detail").innerHTML = context
    $("#form").hide()
    $("#displayEmployee").hide()

}
