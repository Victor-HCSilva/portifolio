document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('change-color');
    const colorPicker = document.getElementById('color-picker');
    const body = document.body;
    const textChangeColor = document.querySelector(".text-change-color")
    

    // Cores padrão
    const themeColors = {
        light: {
            '--background-color': 'gray',
            '--color-text': 'white',
            '--main-background': 'black',
            '--navbar-brand': 'black',
            '--title-color': 'purple',
            '--text-color': 'aliceblue',
            '--select-color': 'purple',
        },
        dark: {
            '--background-color': '#1a1a1a',
            '--color-text': 'white',
            '--main-background': '#333',
            '--navbar-brand': 'white',
            '--title-color': '#333',
            '--text-color': 'white',
            '--select-color': '#333',
        },
    };

    // Função para aplicar as cores
    function applyThemeColors(theme, customColor = null) {
        const colors = themeColors[theme];

         if (customColor) {
            document.documentElement.style.setProperty('--select-color', customColor);
           } else{
            document.documentElement.style.setProperty('--select-color', colors['--select-color']);
           }


        for (const property in colors) {
            document.documentElement.style.setProperty(property, colors[property]);
            
        }
    }

    function applyInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        const savedColor = localStorage.getItem('customColor');
    
        /*
        if(savedTheme === 'dark'){
            body.classList.add('dark-mode');
             textChangeColor.innerText = 'Light Mode'
        }
        else{
            body.classList.remove('dark-mode');
            textChangeColor.innerText = 'Dark Mode'
        }*/

          
    
        applyThemeColors(savedTheme || 'light', savedColor || '#ffffff'); 
         colorPicker.value = savedColor || '#ffffff';
     }
   

    // Evento para mudar o tema
    changeColorButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
       
      
        if(isDarkMode){
            textChangeColor.innerText = 'Light Mode'
        }
        else{
            textChangeColor.innerText = 'Dark Mode'
        }
        
        
        applyThemeColors(isDarkMode ? 'dark' : 'light', colorPicker.value);
      
    
    
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      
    });
    
      colorPicker.addEventListener('input', function() {
        const customColor = this.value;
        const isDarkMode = body.classList.contains('dark-mode');
    
        applyThemeColors(isDarkMode ? 'dark' : 'light', customColor);
        localStorage.setItem('customColor', customColor);
      });
     

    applyInitialTheme();

    
});