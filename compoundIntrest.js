const p = document.querySelector("#p");
const r = document.querySelector("#r");
const n = document.querySelector("#n");
const t = document.querySelector("#t");
const finalAmount = document.querySelector("#finalAmount");

const slider = document.getElementById("n");
const output = document.getElementById("ans");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

p.addEventListener("input", calculate);
r.addEventListener("input", calculate);
n.addEventListener("input", calculate);
t.addEventListener("input", calculate);

function calculate() {
  const principal = Number(p.value);
  const time = Number(t.value);
  const rate = Number(r.value) / 100;
  const numPerTime = Number(n.value);
  const amount = principal * Math.pow(1 + rate / numPerTime, numPerTime * time);

  if (isNaN(amount)) {
    finalAmount.textContent = "?";
  } else {
    finalAmount.textContent = "$" + amount.toFixed(2);
  }
}
