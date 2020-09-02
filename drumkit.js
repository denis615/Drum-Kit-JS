let clap=document.querySelectorAll("[data-key='65']");

let hihat=document.querySelectorAll("[data-key='83']")

let kick=document.querySelectorAll("[data-key='68']")

let openHat=document.querySelectorAll("[data-key='70']")

let boom=document.querySelectorAll("[data-key='71']")

let ride=document.querySelectorAll("[data-key='72']")

let snare=document.querySelectorAll("[data-key='74']")
let tom=document.querySelectorAll("[data-key='75']")

let tink=document.querySelectorAll("[data-key='76']")
  
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA') {
        
        clap[1].currentTime=0;
        clap[1].play();
       
        clap[0].classList.add('playing');
        setTimeout(function(){
            clap[0].classList.remove(`playing`)
        },100)
       
    }
    if (event.code==`KeyS`){
        hihat[1].currentTime=0;
        hihat[1].play();
        hihat[0].classList.add('playing');
        setTimeout(function(){
            hihat[0].classList.remove(`playing`)
        },100)
    }

    if(event.code==`KeyD`){
        kick[1].currentTime=0;
        kick[1].play();
        kick[0].classList.add('playing');
        setTimeout(function(){
            kick[0].classList.remove(`playing`)
        },100)
    }

    if(event.code==`KeyF`){
        openHat[1].currentTime=0;
        openHat[1].play();
        openHat[0].classList.add('playing');
        setTimeout(function(){
            openHat[0].classList.remove(`playing`)
        },100)

    }

    if(event.code==`KeyG`){
        boom[1].currentTime=0;
        boom[1].play();
        boom[0].classList.add('playing');
        setTimeout(function(){
            boom[0].classList.remove(`playing`)
        },100)
    }
    if(event.code==`KeyH`){
        ride[1].currentTime=0;
        ride[1].play();
        ride[0].classList.add('playing');
        setTimeout(function(){
            ride[0].classList.remove(`playing`)
        },100)
    }
    if(event.code==`KeyJ`){
        snare[1].currentTime=0;
        snare[1].play();
        snare[0].classList.add('playing');
        setTimeout(function(){
            snare[0].classList.remove(`playing`)
        },100)
    }
    if(event.code==`KeyK`){
        tom[1].currentTime=0;
        tom[1].play();
        tom[0].classList.add('playing');
        setTimeout(function(){
            tom[0].classList.remove(`playing`)
        },100)
    }

    if(event.code==`KeyL`){
        tink[1].currentTime=0;
        tink[1].play();
        tink[0].classList.add('playing');
        setTimeout(function(){
            tink[0].classList.remove(`playing`)
        },100)
    }
  });
  