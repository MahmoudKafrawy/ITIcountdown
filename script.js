const dashEL = document.getElementById("dash");
const ha = document.getElementById("ha");
const nt = document.getElementById("nt");
const node = document.createElement("div");
const mabrook = document.createElement("div");

const newDate = new Date("jul 27 22 15:30:59").getTime();
const countdown = setInterval(() => {
  const date = new Date().getTime();
  const diff = newDate - date;
  dashCounter = diff / 100000;
  var a = "ـ";
  node.innerText = a.repeat(dashCounter);
  mabrook.innerText = "روح ابدأ في البروجكت 😜";

  if (dashCounter == 0) {
    dashEL.appendChild(mabrook);
    ha.classList.add("hidden");
    nt.classList.add("hidden");
  } else {
    dashEL.appendChild(node);
  }
  const month = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12))
  );
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.querySelector(".hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.querySelector(".days").innerHTML = days < 10 ? "0" + days : days;
  document.querySelector(".months").innerHTML = month < 10 ? "0" + month : month;
  if (diff === 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = "مبروووووك";
  }
}, 1000);
