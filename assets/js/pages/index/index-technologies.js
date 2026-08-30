document.addEventListener('DOMContentLoaded', () => {
    const techData = {
        javascript: {
            title: "JavaScript",
            description: "É a tecnologia que traz vida e movimento para os sites. Sabe quando você clica em um botão e algo aparece na tela sem a página recarregar? É o JavaScript que faz essa 'mágica' acontecer, tornando a navegação fluida e interativa."
        },
        python: {
            title: "Python",
            description: "Uma das linguagens mais modernas e versáteis da atualidade. Ela funciona como o 'cérebro' por trás das aplicações, sendo capaz de processar grandes volumes de informações, criar inteligências e automatizar tarefas complexas de forma eficiente."
        },
        sql: {
            title: "SQL / Bancos de Dados",
            description: "Imagine um arquivo digital extremamente organizado e seguro. O SQL é a linguagem usada para gerenciar esses arquivos, permitindo guardar, encontrar e organizar milhares de dados (como cadastros e pedidos) em milésimos de segundo."
        },
        django: {
            title: "Django",
            description: "É uma estrutura completa que oferece as peças prontas para construir sites seguros e rápidos. Pense nele como uma fundação de engenharia de alta qualidade que garante que o sistema seja robusto e protegido contra ataques desde o primeiro dia."
        },
        html5: {
            title: "HTML5",
            description: "É o esqueleto de qualquer página na internet. Ele define a estrutura básica, como onde ficam os títulos, os parágrafos e as imagens, garantindo que o navegador entenda o que é cada parte do conteúdo."
        },
        css3: {
            title: "CSS3 / Tailwind",
            description: "Se o HTML é o esqueleto, o CSS é a estética: as cores, as fontes e o design. É essa tecnologia que deixa o site elegante, profissional e garante que ele se ajuste perfeitamente tanto em monitores grandes quanto na tela do celular."
        },
        git: {
            title: "GIT / Controle de Versão",
            description: "Funciona como uma 'máquina do tempo' para o trabalho. Ele registra cada alteração feita, permitindo recuperar versões anteriores caso necessário e garantindo que o desenvolvimento seja organizado, seguro e livre de perdas de dados."
        }
    };
    const techItems = document.querySelectorAll('.tech-item');
    const infoSection = document.getElementById('tech-info');
    const infoTitle = document.getElementById('tech-info-title');
    const infoDesc = document.getElementById('tech-info-description');
    const infoIcon = document.getElementById('tech-info-icon');

    techItems.forEach(item => {
        item.addEventListener('click', () => {
            const techKey = item.getAttribute('data-tech');
            const data = techData[techKey];

            if (data) {
                // 1. Mostrar a seção
                infoSection.classList.remove('hidden');

                // 2. Pequeno delay para animação de fade-in
                setTimeout(() => {
                    infoSection.classList.add('opacity-100', 'translate-y-0');
                }, 50);

                // 3. Atualizar conteúdo
                infoTitle.textContent = data.title;
                infoDesc.textContent = data.description;

                // Copiar o ícone do grid para a seção de detalhes
                infoIcon.innerHTML = item.querySelector('div').innerHTML;

                // 4. Scroll suave até a seção de detalhes
                infoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // 5. Destacar o item clicado (opcional)
                techItems.forEach(i => i.querySelector('div').classList.remove('ring-4', 'ring-primary'));
                item.querySelector('div').classList.add('ring-4', 'ring-primary');
            }
        });
    });
});