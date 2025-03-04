console.log('Minhas informações\nsobre.html')
function applyTheme(theme) {
  const body = document.body;
  if (theme === 'dark') {
      body.classList.add('dark-mode');
  } else {
      body.classList.remove('dark-mode');
  }
}

function change_color() {
  const body = document.body;
  const currentTheme = localStorage.getItem('theme') || (body.classList.contains('dark-mode') ? 'dark' : 'light');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
}

// Aplica o tema salvo ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      applyTheme(savedTheme);
  }
});
//-------Minha imagem------//
//
const myImage = document.querySelector("#my-image")

let cores = [
    "FireBrick", "Crimson", "Red", "OrangeRed", "Tomato",
    "DarkOrange", "Coral", "Salmon", "LightSalmon", "Orange",
    "Gold", "Yellow", "LightYellow", "LemonChiffon", "PaleGoldenrod",
    "Khaki", "Moccasin", "PeachPuff", "Bisque", "NavajoWhite",
    "Wheat", "BurlyWood", "Tan", "RosyBrown", "SandyBrown",
    "Peru", "Chocolate", "Sienna", "SaddleBrown", "Brown",
    "Maroon", "DarkRed", "IndianRed", "LightCoral", "DarkSalmon",
    "Pink", "LightPink", "HotPink", "DeepPink", "PaleVioletRed",
    "MediumVioletRed", "Orchid", "Violet", "Plum", "Thistle",
    "LavenderBlush", "MistyRose", "AntiqueWhite", "Beige", "Linen",

    "WhiteSmoke", "Gainsboro", "LightGray", "Silver", "DarkGray",
    "Gray", "DimGray", "LightSlateGray", "SlateGray", "DarkSlateGray",
    "Black", "LightSteelBlue", "LightBlue", "SkyBlue", "LightSkyBlue",
    "DeepSkyBlue", "DodgerBlue", "CornflowerBlue", "SteelBlue", "RoyalBlue",
    "Blue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue",
    "Cyan", "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise",
    "MediumTurquoise", "DarkTurquoise", "CadetBlue", "Teal", "DarkCyan",
    "Aqua", "MediumAquamarine", "MediumSeaGreen", "SeaGreen", "ForestGreen",
    "Green", "DarkGreen", "LimeGreen", "Lime", "SpringGreen",
    "MediumSpringGreen", "LawnGreen", "Chartreuse", "GreenYellow", "YellowGreen",
    "OliveDrab", "Olive", "DarkOliveGreen", "DarkKhaki", "PaleGreen",
    "LightGreen", "Honeydew", "MintCream", "Azure", "AliceBlue",

    "GhostWhite", "Snow", "Ivory", "FloralWhite", "OldLace",
    "Lavender", "LightSlateGray", "SlateGray", "DarkSlateGray", "MidnightBlue",
    "Cornsilk", "SeaShell", "PapayaWhip", "BlanchedAlmond", "OldLace",
    "Bisque", "PeachPuff", "Moccasin", "NavajoWhite", "LemonChiffon",
    "LightGoldenrodYellow", "LightYellow", "Ivory", "WhiteSmoke", "Gainsboro",
    "LightGrey", "Silver", "DarkGrey", "Grey", "DimGrey",
    "LightSteelBlue", "LightSlateGrey", "SkyBlue", "LightSkyBlue", "DeepSkyBlue",
    "DodgerBlue", "CornflowerBlue", "SteelBlue", "RoyalBlue", "Blue",
    "MediumBlue", "DarkBlue", "Navy", "MidnightBlue", "Cyan",
    "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise", "MediumTurquoise",
    "DarkTurquoise", "CadetBlue", "Teal", "DarkCyan", "Aqua",
    "MediumAquamarine", "MediumSeaGreen", "SeaGreen", "ForestGreen", "Green",
    "DarkGreen", "LimeGreen", "Lime", "SpringGreen", "MediumSpringGreen",
    "LawnGreen", "Chartreuse", "GreenYellow", "YellowGreen", "OliveDrab",
    "Olive", "DarkOliveGreen", "DarkKhaki", "PaleGreen", "LightGreen",
    "Honeydew", "MintCream", "Azure", "AliceBlue", "GhostWhite"
  ];

let listaDeCoresComBorda = cores.slice(0, 50).map(cor => `border: 4px solid ${cor}`)
let indice = 0;

myImage.style.fontSize = '1.6rem'
myImage.style.border = 'red'

setInterval(()=>{
   // console.log("Borda:",myImage.style.border)//
    indice+=1
    myImage.style = listaDeCoresComBorda[indice]
    if(indice == listaDeCoresComBorda.length){
        indice = 0;
    }
},300)

