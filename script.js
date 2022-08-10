const btnDanger = document.querySelector(".btn-danger");
const btnPrimary = document.querySelector(".btn-primary");
btnPrimary.addEventListener("click", function () {
  div.innerHTML = "";
  div.innerHTML =
    "      <h2>Thấy chưa, ai cũng có hối tiếc cả thôi, bịp vl</h2>";
});
btnDanger.addEventListener("click", move);

function move() {
  let pos = Math.trunc(Math.random() * 400) + 10;
  let pos2 = Math.trunc(Math.random() * 400) + 10;
  btnDanger.style.left = pos + "px";
  btnDanger.style.bottom = pos2 + "px";
  btnDanger.textContent = "Lêu lêu. Đố bắt được, ko bắt được làm chó";
}
