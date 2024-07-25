const clockTitle = document.querySelector(".js-clock");

function setChritsmasEve(Eve, today) {
  Eve.setDate(24);
  Eve.setMonth(11);
  Eve.setHours(0);
  Eve.setMinutes(0);
  Eve.setSeconds(0);
  if (
    // 크리스마스 이브 자정 +1초부터 내년 1월 전까지
    today.getMonth() == 11 &&
    today.getDate() >= 24 &&
    today.getHours() >= 0 &&
    today.getMinutes() >= 0 &&
    today.getSeconds() > 0
  ) {
    Eve.setFullYear(Eve.getFullYear() + 1);
    return Eve;
  } else return Eve;
}

function untilChritsmasEve() {
  const today = new Date();

  today.setDate(24);
  today.setMonth(11);
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(11);

  const Eve = setChritsmasEve(new Date, today);
  
  const untilTime = Eve.getTime() - today.getTime();
  const untilDay = String(Math.ceil(untilTime / (1000 * 60 * 60 * 24))).padStart(3, "0");
  const untilSec = String(Math.floor(untilTime / 1000) % 60).padStart(2, "0");
  const untilMin = String(Math.floor(((untilTime / 1000) * 60) % 60)).padStart(2, "0");
  const untilHour = String(Math.floor(untilTime / (1000 * 60 * 60)) % 60).padStart(2, "0");

  clockTitle.innerText = `${untilDay} d ${untilHour} h ${untilMin} m ${untilSec} s`;
}

untilChritsmasEve();
setInterval(untilChritsmasEve, 1000);
