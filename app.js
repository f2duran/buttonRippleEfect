let btnel = document.querySelector(".btn");
btnel.addEventListener("mouseover", (event) => {
     let x = (event.pageX - btnel.offsetLeft);
     let y = (event.pageY - btnel.offsetTop);
     btnel.style.setProperty("--xPos", x + "px");
     btnel.style.setProperty("--yPos", y + "px");
})