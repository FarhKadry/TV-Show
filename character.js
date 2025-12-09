let index = localStorage.getItem("localCharacters");
document.getElementById("characterDeets").innerHTML = `
<img class="characterImg" src="public/images/char1.png" alt="">
            <div class="charDetails">
                <h1>${localCharacters.name}</h1>
                <div class="charJob">
                    <h3 class="red_text">${localCharacters.job}</h3>
                    <img class="iconPos" src="${localCharacters.icon}" alt="">
                </div>
                <p>${localCharacters.bio}</p>
                <div class="socials">
                    <a href="index.html"><button class="button1 button2">Back</button></a>
                <div class="button-wrapper"><button class="button1">START</button></div>
            </div>
            </div>
`;