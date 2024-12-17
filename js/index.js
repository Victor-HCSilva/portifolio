console.log('Dilica');

// Seleciona os elementos
const body = document.querySelector("body");
const main = document.querySelector("body > main");
const titulo = document.querySelector("#titulo");
const main_text = document.querySelector("#text-main");
const text_apresentacao = document.querySelector("div.text-apresentacao");
const p_text = document.querySelector("p");
const nav_brand = document.querySelector(".navbar-brand");
const nav_link = document.querySelectorAll(".nav-link");
const change_color_button = document.querySelector("#change-color")

// Salva os estilos iniciais
const initialStyles = {
  p_text: p_text.style.color,
  bodyBackground: body.style.background,
  mainBackground: main.style.background,
  tituloColor: titulo.style.color,
  tituloBackground: titulo.style.background,
  mainTextColor: main_text.style.color,
  mainTextBackground: main_text.style.backgroundColor,
  textApresentacaoColor: text_apresentacao.style.color,
  textApresentacaoBackground: text_apresentacao.style.backgroundColor,
  navbarBrandColor : nav_brand.style.color,
  navLinkColor: Array.from(nav_link).map(link => link.style.color),
  changeColorBackground: change_color_button.style.backgroundColor
};

let isChanged = localStorage.getItem('colorPreference') === 'true';
// Aplica os estilos iniciais conforme a preferência salva
if(isChanged){
      // Aplica os novos estilos
  //body
    body.style.background = "black";
    // main background color to black
    main.style.background = "black";
    
    change_color_button.style.background = "gray"
    
    //titulo color black and background white
    titulo.style.color = "white";
    titulo.style.background = "black";
    
      //main_text color black and background white
    main_text.style.color = "white";
    main_text.style.backgroundColor = "black";
    
     //text_apresentacao color black and background white
    text_apresentacao.style.color = "white";
    text_apresentacao.style.backgroundColor = "black";
    p_text.style.color = "white";
    nav_brand.style.color ="white"
    nav_link.forEach(link => link.style.color = "white")
}

function change_color() {
    if (!isChanged) {
        // Aplica os novos estilos
      //body
      body.style.background = "gray";
        // main background color to black
        main.style.background = "black";
        
      change_color_button.style.background = "gray"
       
        //titulo color black and background white
        titulo.style.color = "white";
        titulo.style.background = "black";
        
        //main_text color black and background white
        main_text.style.color = "white";
        main_text.style.backgroundColor = "black";
        
      //text_apresentacao color black and background white
        text_apresentacao.style.color = "white";
        text_apresentacao.style.backgroundColor = "black";
        p_text.style.color = "white";
        nav_brand.style.color ="white";
         nav_link.forEach(link => link.style.color = "white")
       
    } else {
        // Restaura os estilos originais
        body.style.background = initialStyles.bodyBackground;
        main.style.background = initialStyles.mainBackground;
         change_color_button.style.background = initialStyles.changeColorBackground;
        titulo.style.color = initialStyles.tituloColor;
        titulo.style.background = initialStyles.tituloBackground;
        main_text.style.color = initialStyles.mainTextColor;
        main_text.style.backgroundColor = initialStyles.mainTextBackground;
        text_apresentacao.style.color = initialStyles.textApresentacaoColor;
        text_apresentacao.style.backgroundColor = initialStyles.textApresentacaoBackground;
       p_text.style.color = initialStyles.p_text;
        nav_brand.style.color = initialStyles.navbarBrandColor;
       nav_link.forEach((link, index) => link.style.color = initialStyles.navLinkColor[index]);
    }

    isChanged = !isChanged; // Alterna o estado
    localStorage.setItem('colorPreference', isChanged); // Salva a preferência
}

// Adiciona o evento de clique ao botão
const botao = document.getElementById("change_color");
botao.addEventListener("click", change_color);