const button_change_color = document.querySelector("#change-color");
let blue = "rgb(0,150,150)";
let white = "white";

button_change_color.style.backgrund = white;

setInterval(()=>{

    if(button_change_color.style.background == white){
        button_change_color.style.background = blue;
    } else{
        button_change_color.style.background = white;
    }

},2000)

