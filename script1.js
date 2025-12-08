let charCardDeets = [
    {
        name: "Captain America",
        img: "public/images/charImg01.png",
        icon: "public/images/stariconwhite.svg",
    },
    {
        name: "Winter sodier",
        img: "public/images/charImg02.png",
        icon: "public/images/hydraicon.png",
    },
    {
        name: "Black widow",
        img: "public/images/charImg03.png",
        icon: "public/images/stariconwhite.svg",
    },
    {
        name: "THE FALCON",
        img: "public/images/charImg04.png",
        icon: "public/images/stariconwhite.svg",
    }
]
let charCardFlex = document.getElementById("charCardFlex");

for (let i = 0; i < charCardDeets.length; i++) {
    charCardFlex.innerHTML += `
        <div class="charCard">
            <img class="icon" src="${charCardDeets[i].icon}">
            <img class="charImg" src="${charCardDeets[i].img}">
            <h3>${charCardDeets[i].name}</h3>
        </div>
    `;
}