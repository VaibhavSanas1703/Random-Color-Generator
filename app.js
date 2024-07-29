
const generateColor = () => {
   const randomNumber = Math.floor(Math.random() * 16777215)
   const colorHexCode = `#${randomNumber.toString(16)}`;
   
   const colorShow = document.querySelector("#color-code");
   colorShow.innerHTML = colorHexCode;

   const toastMsg = document.getElementById("toast");
   document.querySelector(".color-container").style.backgroundColor = colorHexCode;

   colorShow.addEventListener("click",() => {
      navigator.clipboard.writeText(colorHexCode);
      toastMsg.classList.add("toggle-msg")
      toastMsg.style.color = colorHexCode;
      setTimeout(() => {
         toastMsg.classList.remove("toggle-msg")
      },1000)
   })
}

document.getElementById("btn").addEventListener("click",generateColor)
generateColor();