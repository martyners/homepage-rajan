console.log(" Łapa!");

let hideImageButton = document.querySelector(".js-hideImageButton");
let profilePicture = document.querySelector(".js-profilePicture");

hideImageButton.addEventListener("click", () => {
    profilePicture.classList.toggle("js-profilePictureDisappear");
    hideImageButton.innerText = profilePicture.classList.contains("js-profilePictureDisappear") ? "Pojawiam się" : "Znikam"
})

let yogaButton = document.querySelector(".js-yogaButton");
let yogaPicture = document.querySelector(".js-yogaPicture")

yogaButton.addEventListener("click", () => {
    yogaPicture.classList.toggle("js-yogaTransform");
})

let whatDoingButton = document.querySelector(".js-whatDoingButton");
let whatDoingResponse = document.querySelector(".js-whatDoingResponse");
let date = new Date();
let time = date.getHours();


whatDoingButton.addEventListener("click", () => {
    if (time < 8 || time > 21) {
        whatDoingResponse.innerText = "Śpię, jest teraz " + time;
    } else if (time > 10 && time < 13) {
        whatDoingResponse.innerText = "Odpoczywam po śniadaniu, jest teraz " + time;
    } else if (time > 15 && time < 19) {
        whatDoingResponse.innerText = "Odpoczywam po obiedzie, jest teraz " + time;
    } else {
        whatDoingResponse.innerText = "Obchód dzielni, jest teraz " + time;
    }
});
