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
            <a href="#facts"><div class="button-wrapper"><button class="button1">more</button></div></a>
        </div>
    </div>
`;
document.getElementById("charVidContainer").innerHTML = `
    <video class="scene1" autoplay muted loop>
        <source src="${selectedChar.vid}" type="video/mp4">
    </video>
`;
document.getElementById("quoteCont").innerHTML = `
    <img class="icon1" src="public/images/icon2.svg" alt="">
            <h2>Quote</h2>
            <p> ${selectedChar.quote} </p>
`;
document.getElementById("factCont").innerHTML = `
    <img class="icon1" src="public/images/icon3.svg" alt="">
            <h2>Fact</h2>
            <p> ${selectedChar.fact} </p>
`;