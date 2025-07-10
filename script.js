/**
 * Bradley's Full JavaScript Logic
 * Executado após o carregamento completo do DOM para garantir que todos os elementos existam.
 */
document.addEventListener('DOMContentLoaded', function() {

    console.log("Bradley's complete JS is loaded and running.");

    /**
     * Função para inicializar todos os botões de 'curtir' (coração).
     * Alterna entre os ícones e a cor ao clicar.
     */
    function initLikeButtons() {
        const likeButtons = document.querySelectorAll('.like-button');
        likeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const icon = button.querySelector('i');
                // Alterna entre as classes de ícone sólido (fas) e contorno (far)
                icon.classList.toggle('far');
                icon.classList.toggle('fas');

                // Muda a cor para amarelo se o ícone for sólido (curtido)
                if (icon.classList.contains('fas')) {
                    icon.style.color = 'var(--primary-yellow)';
                } else {
                    icon.style.color = 'var(--text-muted)';
                }
            });
        });
    }

    /**
     * Função para controlar o mini-player na seção Hero.
     * Alterna o ícone entre 'play' e 'pause'.
     */
    function initMiniPlayer() {
        const playButton = document.querySelector('.mini-player .player-controls button[aria-label="Play track"]');
        if (playButton) {
            const icon = playButton.querySelector('i');
            playButton.addEventListener('click', () => {
                const isPlaying = icon.classList.contains('fa-pause');
                if (isPlaying) {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                } else {
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                }
            });
        }
    }

    /**
     * Função para inicializar as animações de fade-in ao rolar a página.
     * Usa a Intersection Observer API para performance e eficiência.
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.podcast-card-large, .upload-cta-section, .episode-item, .footer-content > div');

        // Adiciona a classe de estado inicial a todos os elementos
        animatedElements.forEach(el => el.classList.add('fade-in'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Se o elemento estiver na tela (intersecting)
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcional: para de observar o elemento após a animação para economizar recursos
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do elemento está visível
        });

        // Inicia a observação de cada elemento
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    /**
     * Função para lidar com o envio do formulário da newsletter.
     * Previne o recarregamento da página e exibe um alerta.
     */
    function initNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (event) => {
                // Previne o comportamento padrão do formulário (que é recarregar a página)
                event.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                
                if (emailInput.value) {
                    alert(`Obrigado por se inscrever, ${emailInput.value}!`);
                    emailInput.value = ''; // Limpa o campo após o envio
                } else {
                    alert('Por favor, insira um endereço de email válido.');
                }
            });
        }
    }


    // --- Chamada de todas as funções de inicialização ---
    initLikeButtons();
    initMiniPlayer();
    initScrollAnimations();
    initNewsletterForm();

});