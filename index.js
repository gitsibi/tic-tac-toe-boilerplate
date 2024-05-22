const box = document.getElementsByClassName("box");
const player = document.getElementById("player_x_or_o");
const message = document.getElementById("message");
const result_js = document.getElementById("result");
const reset_button = document.getElementById("button");

let o = true;
let count = 0;
let arr = new Array(9).fill(undefined);
const winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

for (let i = 0; i < box.length; i++) {
  box[i].onclick = () => {
    arr[i] = o;
    box[i].innerText = o ? "O" : "X";
    o = !o;
    count++;
    wonFunction();
  };
}

function outputFun(msg) {
  if (msg === "draw") {
    message.innerText = "It's a Draw!";
  } else {
    player.innerText = msg;
    message.innerText = `'${msg}' has won the game`;
  }
  result_js.classList.add("active");
}

function wonFunction() {
  for (let i of winArray) {
    let [n1, n2, n3] = [arr[i[0]], arr[i[1]], arr[i[2]]];
    if (n1 === n2 && n2 === n3 && n1 !== undefined) {
      outputFun(n1 ? "O" : "X");
      return;
    }
  }
  if (count === 9) {
    outputFun("draw");
  }
}

reset_button.onclick = () => {
  arr.fill(undefined);
  for (let b of box) {
    b.innerText = "";
  }
  o = true;
  count = 0;
  result_js.classList.remove("active");
};
