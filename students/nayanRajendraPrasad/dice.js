
let dice =document.getElementById("dice");
let shownum = document.getElementById("shownum");
const images = document.getElementById("images");

function convert(){
let val=Math.floor(Math.random()*6) +1;
val = Number(val);
var audio = document. getElementById("sound"); 

switch(val){
        case 1:
            images.innerHTML=`<img src="/assets/diceImages/${val}.png" id="result">`;
            audio.innerHTML=`<audio controls autoplay><source src="/assets/diceMp3/${val}.mp3" type="audio/mpeg"></audio>`
            dice.style.display="none";
            shownum.textContent="1";
            audio. play();
            break;
        case 2:
            images.innerHTML=`<img src='/assets/diceImages/${val}.png' id="result">`;
            audio.innerHTML=`<audio controls autoplay><source src="/assets/diceMp3/${val}.mp3" type="audio/mpeg"></audio>`
            dice.style.display="none";
            shownum.textContent="2";
            audio. play();
            break;
        case 3:
            images.innerHTML=`<img src='/assets/diceImages/${val}.png' id="result">`;
            audio.innerHTML=`<audio controls autoplay><source src="/assets/diceMp3/${val}.mp3" type="audio/mpeg"></audio>`
            dice.style.display="none";
            shownum.textContent="3";
            audio. play();
            break;
        case 4:
            images.innerHTML=`<img src='/assets/diceImages/${val}.png' id="result">`;
            audio.innerHTML=`<audio controls autoplay><source src="/assets/diceMp3/${val}.mp3" type="audio/mpeg"></audio>`
            dice.style.display="none";
            shownum.textContent="4";
            audio. play();
            break;
        case 5:
            images.innerHTML=`<img src='/assets/diceImages/${val}.png' id="result">`;
            audio.innerHTML=`<audio controls autoplay><source src="/assets/diceMp3/${val}.mp3" type="audio/mpeg"></audio>`
            dice.style.display="none";
            shownum.textContent="5";
            audio. play();
            break;
        case 6:
            images.innerHTML=`<img src='/assets/diceImages/${val}.png' id="result">`;
            audio.innerHTML=`<audio controls autoplay><source src="/assets/diceMp3/${val}.mp3" type="audio/mpeg"></audio>`
            dice.style.display="none";
            shownum.textContent="6";
            audio. play();
            break;
           
    }
}
