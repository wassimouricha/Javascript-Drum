// L'objet window représente une fenêtre contenant un document DOM ;
//  la propriété document pointe vers le document DOM chargé dans cette fenêtre. 


function playSound(e) {
   
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        if(!audio) return; //empeche les fonctions de toutes s'enclencher en meme temps 
        audio.currentTime = 0 ; // va remettre l'audio au debut 
        audio.play(); //play enclenche l'audio associé au data-key
        key.classList.add('playing');
    
        console.log(key);
   
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; 
    //étape pouvant etre passé si il n'y a pas de transform
   this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend' , removeTransition));
window.addEventListener('keydown', playSound);