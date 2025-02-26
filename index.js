let months = document.getElementsByClassName("month");
let i;

const listView = () => {
  for (let i = 0; i < months.length; i++) {
    months[i].style.width = "100%";
  }
};

const gridView = () => {
  for (let i = 0; i < months.length; i++) {
    months[i].style.width = "50%";
  }
};

let container = document.getElementById("btnContainer");
let btns = container.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
