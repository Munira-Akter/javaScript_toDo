let task = document.querySelector("#task");
let client = document.querySelector("#client");
let date = document.querySelector("#date");
let time = document.querySelector("#time");
let add_btn = document.querySelector(".add_btn");
let delete_btn = document.querySelector("#delete_btn");
let complete_btn = document.querySelector("#complete_btn");
let feature_btn = document.querySelector("#feature_btn");
let all = document.querySelector("#all");
let complete = document.querySelector("#complete");
let feature = document.querySelector("#feature");
let clear_all = document.querySelector("#clear_all");
let table = document.querySelector("#table");
let star = document.querySelector("#star");

// This function for Progress Bar

// let progress = () => {
//     let todo_json = localStorage.getItem("todo_json");
//     let todoArr = JSON.parse(todo_json);
//
//         let h = val.time;
//         let hour = h.substring(0, 2) * 3600;
//         let min = h.substring(3, 5) * 60;
//         let sum = hour + min;
//         var end = Date.now() + sum;
//         let frame = () => {
//             var timeleft = Math.max(0, end - Date.now());
//             barStatus.style.width = (100 * timeleft) / delay + "%";
//             if (timeleft === 0) return;
//             requestAnimationFrame(frame);
//         };
//         requestAnimationFrame(frame);

//         // setInterval(() => {
//         //     sum--;
//         //     barStatus.style.width = 100 / sum + "%";
//         //     if (sec <= 80 || sec >= 70) {
//         //         barStatus.style.backgroundColor = "#99cc33";
//         //     }
//         //     if (sec <= 69 || sec >= 50) {
//         //         barStatus.style.backgroundColor = "#ffcc00";
//         //     }
//         //     if (sec <= 49 || sec >= 30) {
//         //         barStatus.style.backgroundColor = "#ff9966";
//         //     }
//         //     if (sec <= 29 || sec == 0) {
//         //         barStatus.style.backgroundColor = "#cc3300";
//         //     }
//         // }, 1000);
//     });
// };

// progress();

// Show all To Do list in Table

let showToDo = () => {
    let todo_json = localStorage.getItem("todo_json");
    let todoArr;
    let List = "";
    if (todo_json == null) {
        todoArr = [];
    } else {
        todoArr = JSON.parse(todo_json);
    }

    todoArr.map((val, index) => {
        List += `<li>
            <button>${index + 1}. ${val.task} &nbsp; &nbsp;  Client: ${
      val.client
    }  &nbsp; &nbsp; Deadline: ${val.date}  &nbsp; ${val.time} </button>
            <ul>
                <li>
                    <button onclick="deleteItem(${index})" id="delete_btn">
                    <i class="far fa-trash-alt" style="color:red;"></i>
                    </button>
                    <button id="complete_btn" onclick="completeItem(${index})"><i class="far fa-check-circle" style="color:green;"></i></button>
                    <button  id="feature_btn"  onclick="featureItem(${index})"><i class="fas fa-star" id="star" style="color:orange;"></i></button>
                </li>
            </ul>
        </li>
    <div id="progressBar">
        <div id="barStatus"></div>
    </div>
    <br><br>
        
        `;
    });

    table.innerHTML = List;
};

showToDo();

//  This Function will Exicute when Delete Button is click

let deleteItem = (index) => {
    let todo_json = localStorage.getItem("todo_json");
    let todoArr = JSON.parse(todo_json);

    todoArr.splice(index, 1);

    localStorage.setItem("todo_json", JSON.stringify(todoArr));
    showToDo();
};

//  This Function will Exicute when Feature Button is click

let featureItem = (index) => {
    let todo_json = localStorage.getItem("todo_json");
    let todoArr = JSON.parse(todo_json);

    if (todoArr[index].feature == true) {
        todoArr[index].feature = false;
    } else {
        todoArr[index].feature = true;
    }

    localStorage.setItem("todo_json", JSON.stringify(todoArr));
    showToDo();
};

//  This Function will Exicute when Feature Button is click

let completeItem = (index) => {
    let todo_json = localStorage.getItem("todo_json");
    let todoArr = JSON.parse(todo_json);

    if (todoArr[index].status == true) {
        todoArr[index].status = false;
    } else {
        todoArr[index].status = true;
    }

    localStorage.setItem("todo_json", JSON.stringify(todoArr));
    showToDo();
};

//  This Function will Exicute when Add Button is click

add_btn.onclick = () => {
    let task_val = document.querySelector("#task").value;
    let client_val = document.querySelector("#client").value;
    let date_val = document.querySelector("#date").value;
    let time_val = document.querySelector("#time").value;
    let todo_json = localStorage.getItem("todo_json");
    let todoArr;

    if (todo_json == null) {
        todoArr = [];
    } else {
        todoArr = JSON.parse(todo_json);
    }

    if (task_val == "" || client_val == "" || date_val == "" || time_val == "") {
        alert("All Fields are required");
    } else {
        todoArr.push({
            task: task_val,
            client: client_val,
            date: date_val,
            time: time_val,
            trash: false,
            feature: false,
            status: false,
        });
        localStorage.setItem("todo_json", JSON.stringify(todoArr));
    }

    task.value = "";
    client.value = "";
    date.value = "";
    time.value = "";
    showToDo();
};

//This function will Exicute when All Button is clicked

all.onclick = () => {
    showToDo();
};

//This function will Exicute when Complete list Button is clicked

let complteList = () => {
    let todo_json = localStorage.getItem("todo_json");
    let todoArr = JSON.parse(todo_json);
    let complete_task = document.querySelector("#complete_task");
    let complete_arr = [];
    let complete_list = "";

    todoArr.map((val, index) => {
        if (val.status == true) {
            complete_arr.push(val);
            complete_arr.map((val, index) => {
                complete_list += `<li>
                    <button>${index + 1}. ${val.task} &nbsp; &nbsp;  Client: ${
          val.client
        }  &nbsp; &nbsp; Deadline: ${val.date}  &nbsp; ${val.time} </button>
                    <ul>
                        <li>
                            <button onclick="deleteItem(${index})" id="delete_btn">
                            <i class="far fa-trash-alt"></i>
                            </button>
                            <button id="complete_btn" onclick="completeItem(${index})"><i class="far fa-check-circle"></i></button>
                            <button  id="feature_btn"  onclick="featureItem(${index})"><i class="fas fa-star" id="star"></i></button>
                        </li>
                    </ul>
                </li>
            <div id="progressBar">
                <div id="barStatus"></div>
            </div>
            <br><br>
                
                `;
            });
        }
    });

    table.innerHTML = complete_list;
};

complete.onclick = () => {
    complteList();
};

//This function will Exicute when Complete list Button is clicked

let featureList = () => {
    let todo_json = localStorage.getItem("todo_json");
    let todoArr = JSON.parse(todo_json);
    let feature_arr = [];
    let feature_list = "";

    todoArr.map((val, index) => {
        if (val.feature == true) {
            feature_arr.push(val);
            feature_arr.map((val, index) => {
                feature_list += `<li>
                    <button>${index + 1}. ${val.task} &nbsp; &nbsp;  Client: ${
          val.client
        }  &nbsp; &nbsp; Deadline: ${val.date}  &nbsp; ${val.time} </button>
                    <ul>
                        <li>
                            <button onclick="deleteItem(${index})" id="delete_btn">
                            <i class="far fa-trash-alt"></i>
                            </button>
                            <button id="complete_btn" onclick="completeItem(${index})"><i class="far fa-check-circle"></i></button>
                            <button  id="feature_btn"  onclick="featureItem(${index})"><i class="fas fa-star" id="star"></i></button>
                        </li>
                    </ul>
                </li>
            <div id="progressBar">
                <div id="barStatus"></div>
            </div>
            <br><br>
                
                `;
            });
        }
    });

    table.innerHTML = feature_list;
};

feature.onclick = () => {
    featureList();
};

//This function will Exicute for pending task
let checkStatus = () => {
    let todo_json = localStorage.getItem("todo_json");
    let todoArr = JSON.parse(todo_json);
    let panding_task = document.querySelector("#pending_task");

    let pending_arr = [];

    todoArr.map((val) => {
        if (val.status == false) {
            pending_arr.push(val.status);
            panding_task.innerHTML = `Pendind Task: ${pending_arr.length}`;
        }
    });
    showToDo();
};

checkStatus();

//This function will Exicute for Complete task
let complete_arr;
let checkComplte = () => {
    let todo_json = localStorage.getItem("todo_json");
    let todoArr = JSON.parse(todo_json);
    let complete_task = document.querySelector("#complete_task");
    let complete_arr = [];

    todoArr.map((val) => {
        if (val.status == true) {
            complete_arr.push(val.status);
        }
        complete_task.innerHTML = `Complete Task: ${complete_arr.length}`;
    });

    showToDo();
};

checkComplte();

clear_all.onclick = () => {
    let todo_json = localStorage.getItem("todo_json");
    let todoArr = JSON.parse(todo_json);
    todoArr = [];
    localStorage.setItem("todo_json", JSON.stringify(todoArr));
    showToDo();
    checkStatus();
    checkComplte();
};