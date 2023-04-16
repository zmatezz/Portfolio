const imagens = document.querySelectorAll('.tecnologias');
const divTexto = document.querySelector('.div-texto');

const textos = {
    'imagem-1': 'Texto 1',
    'imagem-2': 'Texto 2',
    'imagem-3': 'Texto 3',
    'imagem-4': 'Texto 4',
    'imagem-5': 'Texto 5',
    'imagem-6': 'Texto 6',
    'imagem-7': 'Texto 7',
    'imagem-8': 'Texto 8'
};

imagens.forEach(imagem => {
    imagem.addEventListener('mouseover', () => {
        const id = imagem.id;
        const texto = textos[id];
        divTexto.textContent = texto;
        divTexto.style.display = 'block';
    });

    imagem.addEventListener('mouseout', () => {
        divTexto.style.display = 'none';
    });
});