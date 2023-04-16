const imagens = document.querySelectorAll('.tecnologias');
const divTexto = document.querySelector('.div-texto');

const texto = {
    'imagem-1': 'HTML<br>Intermediário',
    'imagem-2': 'CSS<br>Intermédiario',
    'imagem-3': 'JavaScript<br>Iniciante',
    'imagem-4': 'GitHub<br>Intermédiario',
    'imagem-5': 'Vtex<br>Avançado',
    'imagem-6': 'Sass<br>Intermédiario',
    'imagem-7': 'React<br>Iniciante',
    'imagem-8': 'Git<br>Intermédiario',
};

imagens.forEach(imagem => {
    const id = imagem.id;
    const textoImagem = texto[id];

    imagem.addEventListener('mouseover', () => {
        divTexto.innerHTML = textoImagem;
        divTexto.style.opacity = '1';
    });

    imagem.addEventListener('mouseout', () => {
        divTexto.style.opacity = '0';
    });
});
