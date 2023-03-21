let data_todo = ["Pay Bills","Go Shoping"]
let data_complete = ["See the Doctor"]

$("#update_btn").hide()

function display_todo() {
    let txt = ""
    let cnt = 0;
    let body = document.getElementById("incomplete-tasks");
    data_todo.forEach(element => {
        txt+=`<li><input type="checkbox" onclick="check(${cnt})"><label>${element}</label><input type="text"><button class="edit" onclick="edit1(${cnt})">Edit</button><button class="delete" onclick="delete1(${cnt++})">Delete</button></li>`
    });
    body.innerHTML = txt
}
display_todo()

function display_complete() {
    let txt1 = ""
    let cnt1 = 0;
    let body1 = document.getElementById("completed-tasks");
    data_complete.forEach(element => {
        txt1+=`<li><input type="checkbox" onclick="uncheck(${cnt1})"checked><label>${element}</label><input type="text"><button class="delete" onclick="delete2(${cnt1++})">Delete</button></li>`
    });
    body1.innerHTML = txt1
}
display_complete()

function add() {
    let a = document.getElementById("new-task").value;
    if (a){
        data_todo.push(a)
        display_todo()
    }
    else{
        alert("Fill the Field")
    }
}

function check(val) {
    data_complete.push(data_todo[val])
    data_todo.splice(val,1)
    display_todo()
    display_complete()
}

function uncheck(val) {
    data_todo.push(data_complete[val])
    data_complete.splice(val,1)
    display_todo()
    display_complete()
}

function delete1(val) {
    data_todo.splice(val,1)
    display_todo()
}

function delete2(val) {
    data_complete.splice(val,1)
    display_complete()
}

let global_val = 0 
function edit1(val) {
    document.getElementById("new-task").value = data_todo[val]
    $("#update_btn").show()
    $("#add_btn").hide()
    global_val = val
}

function update() {
    data_todo[global_val] = document.getElementById("new-task").value
    display_todo()
    $("#update_btn").hide()
    $("#add_btn").show()
}
