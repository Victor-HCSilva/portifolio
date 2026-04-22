document.addEventListener('DOMContentLoaded', function () {
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('projectModalLabel');
  const modalDescription = document.getElementById('modal-description');
  const modalLink = document.getElementById('modal-link');
  const modalCode = document.getElementById('modal-code');

  function openModal(data) {
    modalImage.src = data.imageUrl;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    // Visibility for Link
    if (data.link && data.link !== "#") {
      modalLink.href = data.link;
      modalLink.classList.remove('hidden');
    } else {
      modalLink.classList.add('hidden');
    }

    // Visibility for Code
    if (data.code) {
      modalCode.href = data.code;
      modalCode.classList.remove('hidden');
    } else {
      modalCode.classList.add('hidden');
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scroll
  }

  window.closeModal = function() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  projectCards.forEach(card => {
    card.addEventListener('click', function () {
      const data = {
        imageUrl: this.getAttribute('data-image'),
        title: this.getAttribute('data-title'),
        description: this.getAttribute('data-description'),
        link: this.getAttribute('data-link'),
        code: this.getAttribute('data-code')
      };
      openModal(data);
    });
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});