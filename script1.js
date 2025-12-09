// PRELOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preLoader").style.display = "none";
  }, 2000);
});
// PRELOADER
let navItems = [
    {
        id: "start",
        name: "START",
    },
    {
        id: "story",
        name: "Story",
    },
    {
        id: "chars",
        name: "Characters",
    },
    {
        id: "quotesSec",
        name: "Quotes",
    }
];

let navUl = document.getElementById('navArray').querySelector('ul');

for (let i = 0; i < navItems.length; i++) {
    navUl.innerHTML += `
    <li>
        <img src="public/images/headericon.svg">
        <a href="#${navItems[i].id}">
            ${navItems[i].name}
        </a>
    </li>
    `;
}
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
        <div class="charCard" onclick="openChar(${i})">
            <img class="icon" src="${charCardDeets[i].icon}">
            <img class="charImg" src="${charCardDeets[i].img}">
            <h3>${charCardDeets[i].name}</h3>
        </div>
    `;
}
function openChar(index){
    localStorage.setItem("charIndex", index);
    window.location.href = "character.html";
}

 let quote = [
    `"The price of freedom is high. It always has been. And it's a price I'm willing to pay." – Steve Rogers`,
    `"I'm with you 'til the end of the line." – Steve Rogers, Bucky Barnes`,
    `"You're not gonna put me in a prison. You're not gonna put any of us in a prison. You know why? Because you need us." – Natasha Romanoff`,
    `"The truth is a matter of circumstances; it's not all things to all people all the time. And neither am I." – Natasha Romanoff`,
    `"This isn't freedom. This is fear." – Steve Rogers`,
    `"Even when I had nothing, I had Bucky." – Steve Rogers`,
    `"There's a chance you might be in the wrong business, Rogers."- Natasha Romanoff`,
    `"The world has changed, and none of us can go back. All we can do is our best, and sometimes the best that we can do is to start over." – Peggy Carter`,
    `"I know I'm asking a lot. But the price of freedom is high. It always has been. And it's a price I'm willing to pay. And if I'm the only one, then so be it. But I'm willing to bet I'm not." – Steve Rogers`,
];
    let randomQuote = Math.floor(Math.random() * quote.length);
    document.getElementById("Quote").innerHTML = quote[randomQuote];
let funFacts = [
    `The Winter Soldier's theme music features a distinctive sound created by recording a singer's screams and then distorting them electronically.`,
    `The Russo Brothers used practical effects and real stunt work wherever possible, with Chris Evans performing many of his own stunts.`,
    `The film's famous elevator fight scene took several days to shoot and required over 30 stunt performers.`,
    `Stan Lee's cameo features him as a security guard at the Smithsonian who discovers Captain America's uniform is missing.`,
    `The film includes references to several future MCU characters including Stephen Strange, who is mentioned by name, as well as a refrence to Moon Knight in Cairo.`,
    `The movie was the first Marvel film to have a significant impact on the TV series Agents of S.H.I.E.L.D., with HYDRA's revelation affecting both storylines.`,
    `Captain America's iconic "on your left" running joke with Sam Wilson was improvised by Anthony Mackie during filming.`
];
let randomFunFacts = Math.floor(Math.random() * funFacts.length);
    document.getElementById("Facts1").innerHTML = funFacts[randomFunFacts];

let storylineText = `Steve Rogers, along with Black Widow and Falcon, must uncover the secrets hidden within S.H.I.E.L.D., while also battling a dangerous new enemy, who is only known as The Winter Soldier.`;
document.getElementById("storyline").innerHTML = storylineText;

function sub(numbers) {
  let number = document.getElementById(numbers).innerHTML;
  document.getElementById(numbers).innerHTML = --number;
};
function add(numbers) {
  let number = document.getElementById(numbers).innerHTML;
  document.getElementById(numbers).innerHTML = ++number;
};


function login(){
    let  Uname = document.getElementById("Uname").value;
    let  Upass = document.getElementById("Upass").value;
    
    let localUsers = JSON.parse(localStorage.getItem("localUsers"))
    for(let i = 0; i<localUsers.length; i++){
        if( Uname == localUsers[i].Uname && Upass == localUsers[i].Upass ){
        window.location="profile.html"
    }
    
    else{
        document.getElementById("err").innerHTML=`<h6>the password and email combination are incorrect!!</h6>`
        document.getElementById("err").style.display="inline-block"
        document.getElementById("err").style.color="var(--mainAccent)"
    }
    }
    localStorage.setItem("localName", Uname);
    localStorage.setItem("localPass", Upass);
}
document.getElementById("footerCont").innerHTML=`
<div class="flex_column footerItem">
            <h2>Always on <br> your left.</h2>
            <h3>© 2025 <br> MarveI. <br> All rights <br> reserved.</h3>
        </div>
        <div class="footer_sheildCont">
            <div>
            <img class=" rotateanim3" src="public/images/CapSheild.png" alt="">
            </div>
        </div>
        <div class="flex_column footerItem footerItem2">
            <h2>Our Socials</h2>
            <div class="socials">
                <a href="#"><img src="public/images/facebook.svg"></a>
                <a href="#"><img src="public/images/twitter.svg"></a>
                <a href="#"><img src="public/images/Vector.svg"></a>
            </div>
            <img class="logo" src="public/images/marvelLogo.svg" alt="">
        </div>
`
function openCart(){
    document.getElementById("mainCart").style.display="flex";
}
function closeCart() {
  document.getElementById('mainCart').style.display ="none";
};