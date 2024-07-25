const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
const changeBtn = document.querySelector("button#btn")
const bg = document.querySelector("body");
const getRandomNum = (max) => Math.floor(Math.random() * (max));

function changeBgColor(event){
    event.preventDefault();
    const max = colors.length;
    let num1 = getRandomNum(max);
    let num2 = getRandomNum(max);
    while(num1 == num2){
        num2 = getRandomNum(max);
    }
        
    const color_01 = colors[num1];
    const color_02 = colors[num2];

    // console.log(`color_01 : ${color_01} / color_02 : ${color_02}`)
    bg.style.background = `linear-gradient(100deg, ${color_01}, ${color_02})`;
}

changeBtn.addEventListener("click", changeBgColor);