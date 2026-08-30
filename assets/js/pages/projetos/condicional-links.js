
(function () {
    const urlCheck = "https://victoraccount2.pythonanywhere.com/main/login/";
    const container = document.getElementById('container-link-login');

    // O link que você deseja injetar
    const linkHTML = `
        <a href="${urlCheck}" target="_blank" class="w-full block py-3 bg-gray-50 dark:bg-gray-800 hover:bg-primary hover:text-white text-center rounded-2xl font-bold transition-all border border-gray-100 dark:border-gray-700 uppercase text-xs tracking-widest">
            Ver online
        </a>
    `;

    // Faz a tentativa de conexão
    fetch(urlCheck, {
        mode: 'no-cors', // Necessário para evitar bloqueio de CORS ao apenas testar a conexão
        cache: 'no-cache'
    })
        .then(response => {
            // Se o fetch não cair no catch, o servidor está respondendo
            container.innerHTML = linkHTML;
        })
        .catch(error => {
            console.log("O endereço está offline ou inacessível no momento.");
            // Não faz nada, o link não aparece
        });
})();
