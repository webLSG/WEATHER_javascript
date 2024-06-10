setInterval(() => {
  const date = new Date();
  const time = document.querySelector(".time");
  time.innerText = date.toLocaleString().split(" ")[4];
}, 1000);
