const input = document.getElementById("inputText");
const todoList = document.querySelector(".box2 ul");

function addTodo() {
    const task = input.value.trim();
    if (task === "") return;

    const li = document.createElement("li"); 

    // dấu tích
    const checkBtn = document.createElement("span");
    checkBtn.classList.add("check")
    checkBtn.addEventListener("click", () => { 
        checkBtn.classList.toggle("complete");
        if (checkBtn.classList.contains("complete")) {
            dropFlower();
        }
    });

    // nội dung
    const taskText = document.createElement("span");
    taskText.classList.add("taskText")
    taskText.textContent = task;
    taskText.title = task;

    // dấu hủy
    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => { 
        li.classList.add("removing");
        setTimeout(() => {
            li.remove();
        },400);
    });

    li.appendChild(checkBtn);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    // thêm vào
    todoList.appendChild(li);
    input.value= "";
}

input.addEventListener("keyup", (e) => { 
    if (e.key == "Enter")
        addTodo();
});

function dropFlower() {
  let count = 0;
  const interval = setInterval(() => {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.width = "30px";
    flower.style.height = "30px";
    flower.style.backgroundImage = "url('img/sakura.png')";
    flower.style.backgroundSize = "contain";
    flower.style.backgroundRepeat = "no-repeat";

    // tốc độ rơi random
    const duration = Math.random() * 3 + 2; // 2s - 5s
    flower.style.animationDuration = duration + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, duration * 1000);

    count++;
    if (count >= 50) clearInterval(interval); 
  }, 100);
}

