URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let box = document.querySelector("#imgBox");
let btn = document.querySelector("button");
let img = document.querySelector("#QRcode");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
     if (input.value.length > 0) {
         img.src = URL + input.value;
         box.classList.add("show-img");
  } else {
         input.classList.add("error");
      setTimeout(() => {
            input.classList.remove("error");
           }, 1000);
  }
});
