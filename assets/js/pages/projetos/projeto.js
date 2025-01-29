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