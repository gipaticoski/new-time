// ===================================
// Animação de Glitch no Botão
// ===================================

function applyGlitchEffect(button) {
    let interval;
    
    button.addEventListener('mouseenter', () => {
        const originalText = button.textContent;
        interval = setInterval(() => {
            const glitchText = originalText.split('').map(char => {
                // 40% de chance de substituição por um caractere aleatório
                if (Math.random() < 0.4) {
                    return String.fromCharCode(33 + Math.floor(Math.random() * 94));
                }
                return char;
            }).join('');
            button.textContent = glitchText;
        }, 80);
    });

    button.addEventListener('mouseleave', () => {
        clearInterval(interval);
        button.textContent = 'Descubra a Lenda';
    });
}

// ===================================
// Inicialização do Script
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa o efeito glitch no botão (Seção 1)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        applyGlitchEffect(ctaButton);
    }
});