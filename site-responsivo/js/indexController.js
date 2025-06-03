// Menu responsivo
let button = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// --- Botão "UAU!" ---
const emojiUauContainer = document.getElementById('emoji-uau');
const btnUau = document.getElementById('btn-uau');
const staticEmoji = document.getElementById('static-emoji');

// Carrega a animação Lottie
const emojiUauAnim = lottie.loadAnimation({
    container: emojiUauContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'lottie/wow-emoji.json'
});

// Ao clicar, remove o emoji estático e executa a animação
btnUau.addEventListener('click', () => {
    staticEmoji.style.display = 'none';
    emojiUauAnim.goToAndPlay(0, true);
});

// --- Botão "Gostei!" ---
const btnGostei = document.querySelector('#btn-gostei');
const iconGostei = document.querySelector('#icon-gostei');

btnGostei.addEventListener('click', () => {
    const clone = iconGostei.cloneNode(true);
    clone.classList.add('hand-clone');

    // Garante que o clone fique visível corretamente
    document.body.appendChild(clone);

    const rect = iconGostei.getBoundingClientRect();

    // Corrige posição relativa ao body
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;

    clone.style.left = `${rect.left + scrollLeft}px`;
    clone.style.top = `${rect.top + scrollTop}px`;

    // Aleatoriza inclinação (direita ou esquerda)
    const rotateDeg = Math.random() > 0.5 ? 40 : -40;

    // Define a animação com rotação dinâmica via JS
    clone.animate([
        {
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: 1
        },
        {
            transform: `translate(${rotateDeg}px, -100px) rotate(${rotateDeg}deg)`,
            opacity: 0
        }
    ], {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards'
    });

    setTimeout(() => {
        clone.remove();
    }, 1000);
});
