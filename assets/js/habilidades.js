const imagens = document.querySelectorAll('.tecnologias');
const divTexto = document.querySelector('.div-texto');

const texto = {
    'imagem-1': 'Html<br>Intermediário',
    'imagem-2': 'CSS<br>Intermédiario',
    'imagem-3': 'JavaScript<br>Iniciante',
    'imagem-4': 'GitHub<br>Intermédiario',
    'imagem-5': 'Vtex<br>Intermédiario',
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


const imagens2 = document.querySelectorAll('.tecnologias');
const divTexto2 = document.querySelector('.div-texto2');

const texto2 = {
    'imagem-1': 'Html<br>Intermediário',
    'imagem-2': 'CSS<br>Intermédiario',
    'imagem-3': 'JavaScript<br>Iniciante',
    'imagem-4': 'GitHub<br>Intermédiario',
    'imagem-5': 'Vtex<br>Intermédiario',
    'imagem-6': 'Sass<br>Intermédiario',
    'imagem-7': 'React<br>Iniciante',
    'imagem-8': 'Git<br>Intermédiario',
};

imagens2.forEach(imagems => {
    const id = imagems.id;
    const textoImagem2 = texto2[id];

    imagems.addEventListener('mouseover', () => {
        divTexto2.innerHTML = textoImagem2;
        divTexto2.style.opacity = '1';
    });

    imagems.addEventListener('mouseout', () => {
        divTexto2.style.opacity = '0';
    });
});
