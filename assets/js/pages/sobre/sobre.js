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
let red = "4px solid red";
let gold = "4px solid gold";
let blue = "4px solid royalblue";
myImage.style.border = red

myImage.style.fontSize = '1.6rem'

setInterval(()=>{
        if (myImage.style.border == red){
            myImage.style.border = gold;
        } else if(myImage.style.border == gold ){
            myImage.style.border = blue;
        }
    myImage.style.border = red;
       
},1000)

