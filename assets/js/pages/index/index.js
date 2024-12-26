console.log('Dilica');

// Seleciona os elementos
const body = document.querySelector("body");
const main = document.querySelector("body > main");
//const titulo = document.querySelector("#titulo");
const main_text = document.querySelector("#text-main");
const text_apresentacao = document.querySelector(".titulo p");
const p_text = document.querySelector(".titulo p");
const nav_brand = document.querySelector(".navbar-brand");
const nav_link = document.querySelectorAll(".nav-link");
const change_color_button = document.querySelector("#change-color");

// Salva os estilos iniciais
const initialStyles = {
  p_text: getComputedStyle(p_text).color,
  bodyBackground: getComputedStyle(body).background,
  mainBackground: getComputedStyle(main).background,
  //tituloColor: getComputedStyle(titulo).color,
  //tituloBackground: getComputedStyle(titulo).background,
  mainTextColor: getComputedStyle(main_text).color,
  mainTextBackground: getComputedStyle(main_text).backgroundColor,
  textApresentacaoColor: getComputedStyle(text_apresentacao).color,
  textApresentacaoBackground: getComputedStyle(text_apresentacao).backgroundColor,
  navbarBrandColor : getComputedStyle(nav_brand).color,
   navLinkColor: Array.from(nav_link).map(link => getComputedStyle(link).color),
   changeColorBackground : getComputedStyle(change_color_button).backgroundColor
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
    //titulo.style.color = "white";
    //titulo.style.background = "black";
    
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
        //titulo.style.color = "white";
        //titulo.style.background = "black";
        
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
        //titulo.style.color = initialStyles.tituloColor;
        //titulo.style.background = initialStyles.tituloBackground;
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
const changeColorButton = document.getElementById("change-color");
changeColorButton.addEventListener("click", change_color);