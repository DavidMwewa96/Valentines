var YesButton = document.getElementById('v-button-1');
var NoButton = document.getElementById('v-button-2');
var Message = document.getElementById('message');
var image = document.getElementById('v-img');

var btn1_wdth = 80;
var btn1_hght = 55;
var btn1_margin = 10;
var btn1_fontSize = 20;
var Index = 0;
var MessageIndex = 0;
var ImageIndex = 0;

const phrases = [
    "No",
    "Are you sure?",
    "What if I asked really nicely?",
    "Pretty please",
    "With a chocolate rice cake on top",
    "What about a matcha frostie",
    "PLEASE POOKIE",
    "But :*(",
    "I am going to die",
    "Yep im dead",
    "ok ur talking to David's ghost",
    "please babe",
    ":((((",
    "PRETTY PLEASE",
    "Estoy muerto",
    "No :(",
];

const messages = [
    "Will you be my Valentine?",
    "WOOOOOO!!! I love you pookie!! ;))"
];

const ImgLinks = [
    "./assets/images/Gojo.gif",
    "./assets/images/14th.gif",
];

NoButton.addEventListener('click', () => {
    if (Index < phrases.length - 1) {
        Index++;
    }

    // Increase size of Yes button
    btn1_wdth += 24;
    btn1_hght += 24;
    btn1_fontSize += 8;

    YesButton.style.width = `${btn1_wdth}px`;
    YesButton.style.height = `${btn1_hght}px`;
    YesButton.style.margin = `${btn1_margin}px`;
    YesButton.style.fontSize = `${btn1_fontSize}px`;

    SetText(Index);
});

YesButton.addEventListener('click', () => {
    SetMessage(1);
    SetImage(1);
    NoButton.style.display = 'none'
    YesButton.style.display = 'none'
});

function SetText(index) {
    NoButton.innerText = phrases[index];
}

function SetMessage(index) {
    Message.innerText = messages[index];
}

function SetImage(index) {
    image.src = ImgLinks[index];
}

// Initialize text and image
SetImage(ImageIndex);
SetMessage(MessageIndex);
SetText(Index);
