console.log('Dilica');

// Seleciona os elementos
const body = document.querySelector("body");
const main = document.querySelector("#body > main");
const titulo = document.querySelector("#titulo");
const main_text = document.querySelector("#text-main");
const text_apresentacao = document.querySelector("#body > main > div.text-apresentacao");

// Salva os estilos iniciais
const initialStyles = {
  bodyBackground: body.style.background,
  mainBackground: main.style.background,
  tituloColor: titulo.style.color,
  tituloBackground: titulo.style.background,
  mainTextColor: main_text.style.color,
  mainTextBackground: main_text.style.backgroundColor,
  textApresentacaoColor: text_apresentacao.style.color,
  textApresentacaoBackground: text_apresentacao.style.backgroundColor
};

let isChanged = localStorage.getItem('colorPreference') === 'true';
// Aplica os estilos iniciais conforme a preferência salva
if(isChanged){
      // Aplica os novos estilos
  //body
    body.style.background = "black";
    // main background color to black
    main.style.background = "black";
  
    //titulo color black and background white
    titulo.style.color = "black";
    titulo.style.background = "white";
  
      //main_text color black and background white
    main_text.style.color = "black";
    main_text.style.backgroundColor = "white";
  
     //text_apresentacao color black and background white
    text_apresentacao.style.color = "black";
    text_apresentacao.style.backgroundColor = "white";
}

function change_color() {
    if (!isChanged) {
        // Aplica os novos estilos
      //body
        body.style.background = "black";
        // main background color to black
        main.style.background = "black";
      
        //titulo color black and background white
        titulo.style.color = "black";
        titulo.style.background = "white";
        
        //main_text color black and background white
        main_text.style.color = "black";
        main_text.style.backgroundColor = "white";
      
      //text_apresentacao color black and background white
       text_apresentacao.style.color = "black";
        text_apresentacao.style.backgroundColor = "white";
    } else {
        // Restaura os estilos originais
        body.style.background = initialStyles.bodyBackground;
        main.style.background = initialStyles.mainBackground;
        titulo.style.color = initialStyles.tituloColor;
        titulo.style.background = initialStyles.tituloBackground;
        main_text.style.color = initialStyles.mainTextColor;
        main_text.style.backgroundColor = initialStyles.mainTextBackground;
        text_apresentacao.style.color = initialStyles.textApresentacaoColor;
        text_apresentacao.style.backgroundColor = initialStyles.textApresentacaoBackground;
    }

    isChanged = !isChanged; // Alterna o estado
  localStorage.setItem('colorPreference', isChanged); // Salva a preferência
}

// Adiciona o evento de clique ao botão
const botao = document.getElementById("change_color");
botao.addEventListener("click", change_color);