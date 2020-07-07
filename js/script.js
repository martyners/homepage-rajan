{
    const welcome = () => {
        console.log(" Łapa!");
    };

    const hideImageClick = () => {
        const profilePicture = document.querySelector(".js-profilePicture");
        profilePicture.classList.toggle("js-profilePictureDisappear");
        const hideImageButton = document.querySelector(".js-hideImageButton");
        hideImageButton.innerText = profilePicture.classList.contains("js-profilePictureDisappear") ? "Pojawiam się" : "Znikam"
    };

    const transformYogaPicture = () => {
        const yogaPicture = document.querySelector(".js-yogaPicture")
        yogaPicture.classList.toggle("js-yogaTransform");
    };


    const whatDoing = () => {
        const whatDoingResponse = document.querySelector(".js-whatDoingResponse");
        const date = new Date();
        const time = date.getHours();
        if (time < 8 || time > 21) {
            whatDoingResponse.innerText = "Śpię, jest teraz " + time;
        } else if (time > 10 && time < 13) {
            whatDoingResponse.innerText = "Odpoczywam po śniadaniu, jest teraz " + time;
        } else if (time > 15 && time < 19) {
            whatDoingResponse.innerText = "Odpoczywam po obiedzie, jest teraz " + time;
        } else {
            whatDoingResponse.innerText = "Obchód dzielni, jest teraz " + time;
        }
    };


    const init = () => {
        const hideImageButton = document.querySelector(".js-hideImageButton");
        hideImageButton.addEventListener("click", (hideImageClick));

        const yogaButton = document.querySelector(".js-yogaButton");
        yogaButton.addEventListener("click", (transformYogaPicture));


        const whatDoingButton = document.querySelector(".js-whatDoingButton");
        whatDoingButton.addEventListener("click", (whatDoing));

        welcome();
    };

    init();







};