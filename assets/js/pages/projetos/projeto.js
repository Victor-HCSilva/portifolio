console.log('Projetos \nprojetos.html')
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


document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('projectModalLabel');
  const modalDescription = document.getElementById('modal-description');
  const modalLink = document.getElementById('modal-link');
  const modalCode = document.getElementById('modal-code');


  projectCards.forEach(card => {
      card.addEventListener('click', function() {
          const imageUrl = this.getAttribute('data-image');
          const title = this.getAttribute('data-title');
          const description = this.getAttribute('data-description');
          const link = this.getAttribute('data-link');
          const code = this.getAttribute('data-code')

          modalImage.src = imageUrl;
          modalTitle.textContent = title;
          modalDescription.textContent = description;
           // Define a visibilidade e o href do botão de "Ver"
          if (link) {
              modalLink.href = link;
              modalLink.style.display = 'inline-block';
          } else {
              modalLink.style.display = 'none';
          }

          // Define a visibilidade e o href do botão de "Código"
           if (code) {
              modalCode.href = code;
              modalCode.style.display = 'inline-block';
           } else{
              modalCode.style.display = 'none';
           }


          $(modal).modal('show');
      });
  });
});

document.addEventListener('DOMContentLoaded',() => {
  const dj_tag = document.querySelector(".django");
  const dj_descricao = document.querySelector("#descricao_dj");
  const js_descricao = document.querySelector("#descricao_js");
  const js_tag = document.querySelector(".js");
  const json_descricao = document.querySelector("#descricao_json");
  const json_tag = document.querySelector(".json");
  const py_descricao = document.querySelector("#descricao_py");
  const py_tag = document.querySelector(".python");
  const html_descricao = document.querySelector("#descricao_html");
  const html_tag = document.querySelector(".html");
  const css_descricao = document.querySelector("#descricao_css");
  const css_tag = document.querySelector(".css");

  /*dj */
  function show_descricao_dj(){
    dj_descricao.style = "display:inline;";
  }
  function hide_descricao_dj(){
    dj_descricao.style = "display:none;";
  }
  //js
  function show_descricao_js(){
    js_descricao.style = "display:inline;";
  }
  function hide_descricao_js(){
    js_descricao.style = "display:none;";
  } 
  //json 
  function hide_descricao_json(){
    json_descricao.style = "display:none;";
  }
  function show_descricao_json(){
    json_descricao.style = "display:inline;";
  }
  //py
  function hide_descricao_py(){
    py_descricao.style = "display:none;";
  }
  function show_descricao_py(){
    py_descricao.style = "display:inline;";
  }
  //html
  function hide_descricao_html(){
    html_descricao.style = "display:none;";
  }
  function show_descricao_html(){
    html_descricao.style = "display:inline;";
  }
  //css
  function hide_descricao_css(){
    css_descricao.style = "display:none;";
  }
  function show_descricao_css(){
    css_descricao.style = "display:inline;";
  }

  /*django*/
  dj_tag.addEventListener("mouseover", show_descricao_dj);
  dj_tag.addEventListener("mouseout", hide_descricao_dj);
  /*js*/
  js_tag.addEventListener("mouseover", show_descricao_js);
  js_tag.addEventListener("mouseout", hide_descricao_js);
  //json
  json_tag.addEventListener("mouseover", show_descricao_json);
  json_tag.addEventListener("mouseout", hide_descricao_json);
  //py
  py_tag.addEventListener("mouseover", show_descricao_py);
  py_tag.addEventListener("mouseout", hide_descricao_py);
  //html
  html_tag.addEventListener("mouseover", show_descricao_html);
  html_tag.addEventListener("mouseout", hide_descricao_html);
  //css
  css_tag.addEventListener("mouseover", show_descricao_css);
  css_tag.addEventListener("mouseout", hide_descricao_css);

})
