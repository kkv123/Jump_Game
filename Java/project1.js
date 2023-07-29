




console.log("Kuldeep Kumar Vishwakarma")

let sc = 0;
let p = 0;
let con = 1;
high = 0;
let audio1 = new Audio("music/background-sound.mp3");
document.onkeyup = function (e) {
    console.log("hi", e.keyCode);
    if (p == 0) {

        audio1.play();
        p = 1;
        audio1.loop= true;
    }
    if (e.keyCode == 38) {
        let p = document.querySelector(".obj");
        p.classList.add("animate");
        console.log("Working ");
        setTimeout(() => {
            let p = document.querySelector(".obj");
            p.classList.remove("animate");
        }, 700);
        // p.style.top="40px"
    } else if (e.keyCode == 37) {
        let obj = document.querySelector(".obj");
        left = parseInt(window.getComputedStyle(obj, null).getPropertyValue('left'));
        obj.style.left = left - 100 + "px";
    } else if (e.keyCode == 39) {
        let obj = document.querySelector(".obj");
        left = parseInt(window.getComputedStyle(obj, null).getPropertyValue('left'));
        obj.style.left = left + 100 + "px";
    }
}

let intr = setInterval(() => {
    obj = document.querySelector(".obj");
    dra = document.querySelector(".dragon");
    game = document.querySelector(".gameOver");
    dx1 = parseInt(window.getComputedStyle(obj, null).getPropertyValue('left'));
    dy1 = parseInt(window.getComputedStyle(obj, null).getPropertyValue('top'));
    dx2 = parseInt(window.getComputedStyle(dra, null).getPropertyValue('left'));
    dy2 = parseInt(window.getComputedStyle(dra, null).getPropertyValue('top'));
    dx = Math.abs(dx1 - dx2);
    dy = Math.abs(dy1 - dy2);
    console.log(dx);

    console.log(dy);
    document.querySelector(".score").innerHTML = `Score : ${sc}`;
    if (dx < 100 && dy < 100) {
        console.log("hi");
        dra.classList.remove("dragonAnimate");
        game.style.visibility = "visible";
        clearInterval(intr);
        let audio = new Audio("music/death.mp3");
        audio.play();
        audio1.pause();
     
       let srq= document.querySelector(".score");
       let gameq= document.querySelector(".gameOver");
        document.querySelector(".newscore").innerHTML=gameq.innerHTML;
        // `Score : ${sc}`;
        gameq.innerHTML=srq.innerHTML;
         gameq.style.fontSize="50px";
         srq.style.visibility='hidden';
         gameq.style.fontSize='bold';
    //    sr.style.display="";
    //    sr.style.margin='center';

    }
    if (dx < 150 && con) {
        sc++;
        high = Math.max(high, sc);
        con = 0;
        setTimeout(() => {
            con = 1;
        }, parseFloat(window.getComputedStyle(dra, null).getPropertyValue('animation-duration')));



        setTimeout(() => {
            let dur = parseFloat(window.getComputedStyle(dra, null).getPropertyValue('animation-duration'));
            console.log("Duration is", dur);
            dur = dur - 0.01;
            dra.style.animationDuration = dur + 's';
        }, 800)

    }


}, 100)






 