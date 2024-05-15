const PIEDRA = "PIEDRA";
const PAPEL = "PAPEL";
const TIJERA = "TIJERA";

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

//Botones

const piedraBtn = document.getElementById("Piedra");
const papelBtn = document.getElementById("Papel");
const tijeraBtn = document.getElementById("Tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", ()=>{
    play(PIEDRA);
});
papelBtn.addEventListener("click", ()=>{
    play(PAPEL);
});
tijeraBtn.addEventListener("click", ()=>{
    play(TIJERA);
});

function play(userOption){
    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

    userImg.src = "/img/"+userOption+".png";
    machineImg.src = "/img/"+machineOption+".png";
    
    switch(result){
        case EMPATE:
            resultText.innerHTML = "¡EMPATE!";
            break;
        case GANASTE:
            resultText.innerHTML = "¡TÚ GANAS!";
            break;
        case PERDISTE:
            resultText.innerHTML = "PERDISTE";
            break;
    }
}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}

function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return EMPATE;
    }else if(userOption === PIEDRA){
        
        if(machineOption === PAPEL) return PERDISTE;
        if(machineOption === TIJERA) return GANASTE;

    }else if(userOption === PAPEL){
        
        if(machineOption === TIJERA) return PERDISTE;
        if(machineOption === PIEDRA) return GANASTE;

    }else if(userOption === TIJERA){
        
        if(machineOption === PIEDRA) return PERDISTE;
        if(machineOption === PAPEL) return GANASTE;
    }
}