
console.log('Olá :D \npag index\n')

// Seleciona os elementos
const body = document.querySelector("body");
const change_color_button = document.querySelector("#change-color");
const seta = document.querySelector("#seta")

let isChanged = localStorage.getItem('colorPreference') === 'true';

// Aplica o tema salvo no carregamento
if(isChanged){
    body.classList.add('dark-mode');
}

function change_color() {
    body.classList.toggle('dark-mode');
    isChanged = !isChanged; // Alterna o estado
    localStorage.setItem('colorPreference', isChanged); // Salva a preferência
}


// Adiciona o evento de clique ao botão
const changeColorButton = document.getElementById("change-color");
changeColorButton.addEventListener("click", change_color);

seta.style.color = "red"
seta.style.fontSize = '1.6rem'

setInterval(()=>{
        if (seta.style.color == "red"){
            seta.style.color = 'green';
        } else if(seta.style.color == 'green') {
            seta.style.color = 'red';
        }    
},1000)

