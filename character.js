let index = localStorage.getItem("charIndex");
let charDetails = JSON.parse(localStorage.getItem("localCharacters"));
let selectedChar = charDetails[index];

document.getElementById("characterDeets").innerHTML = `
    <img class="characterImg" src="${selectedChar.img}" alt="">
    <div class="charDetails">
        <h1>${selectedChar.name}</h1>
        <div class="charJob">
            <h3 class="red_text">${selectedChar.job}</h3>
            <img class="iconPos" src="${selectedChar.icon}" alt="">
        </div>
        <p>${selectedChar.bio}</p>
        <div class="socials">
            <a href="index.html"><button class="button1 button2">Back</button></a>
            <div class="button-wrapper"><button class="button1">START</button></div>
        </div>
    </div>
`;