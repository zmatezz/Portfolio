const imagens = document.querySelectorAll('.tecnologias');
const divTexto = document.querySelector('.div-texto');

const texto = {
    'imagem-1': 'HTML<br>Intermediário',
    'imagem-2': 'CSS<br>Intermédiario',
    'imagem-3': 'JavaScript<br>Iniciante',
    'imagem-4': 'GitHub<br>Intermédiario',
    'imagem-5': 'VTEX<br>Intermédiario',
    'imagem-6': 'Sass<br>Intermédiario',
    'imagem-7': 'React<br>Iniciante',
    'imagem-8': 'Git<br>Intermédiario',
};

imagens.forEach(imagem => {
    const id = imagem.id;
    const textoImagem = texto[id];

    const eventoMouseOver = (evento) => {
        if (evento.type === 'mouseover' || evento.type === 'touchstart' || evento.type === 'click') {
            divTexto.innerHTML = textoImagem;
            divTexto.style.opacity = '1';
        }
        if (evento.type === 'mouseout') {
            divTexto.style.opacity = '0';
        }
    };

    imagem.addEventListener('mouseover', eventoMouseOver);
    imagem.addEventListener('touchstart', eventoMouseOver);
    imagem.addEventListener('click', eventoMouseOver);
    imagem.addEventListener('mouseout', eventoMouseOver);
});


const imagens2 = document.querySelectorAll('.tecnologias');
const divTexto2 = document.querySelector('.div-texto2');

const texto2 = {
    'imagem-1': 'Linguagem de marcação, faz parte da tríade para qualquer aplicação web, com uma boa estrutura podemos criar páginas excelentes.',
    'imagem-2': 'Linguagem de estilização, faz parte da tríade web, é utilizado para estilizar elementos escritos em uma linguagem de marcação como HTML.',
    'imagem-3': 'Linguagem de programação, fecha a tríade de tecnologias web, onde as três são utilizados em quase toda web, realizando páginas interativas. ',
    'imagem-4': 'Plataforma para hospedagem de códigos, possibilitando gerenciamento de projetos, registros e colaborações entre a equipe.',
    'imagem-5': 'Plataforma SaaS, fornece a estrutura para funcionar uma loja e-commerce e possibilita o gerenciamento de atividades de manutenção em massa.',
    'imagem-6': 'Linguagem que potencializa o Css, é um pré-processador css que permite a escrita em uma sintaxe mais simples e depois compila esse código. ',
    'imagem-7': 'React é uma biblioteca JavaScript que permite criar excelentes interfaces para usuários em aplicações web e móveis.',
    'imagem-8': 'Sistema de controle de versão, bastante utilizada no desenvolvimento de software, gerenciamento do código-fonte ao longo do tempo.',
};

imagens2.forEach(imagems => {
    const id = imagems.id;
    const textoImagem2 = texto2[id];

    const eventoMouseOver = (evento) => {
        if (evento.type === 'mouseover' || evento.type === 'touchstart' || evento.type === 'click') {
            divTexto2.innerHTML = textoImagem2;
            divTexto2.style.opacity = '1';
        }
        if (evento.type === 'mouseout') {
            divTexto2.style.opacity = '0';
        }
    };

    imagems.addEventListener('mouseover', eventoMouseOver);
    imagems.addEventListener('touchstart', eventoMouseOver);
    imagems.addEventListener('click', eventoMouseOver);
    imagems.addEventListener('mouseout', eventoMouseOver);
});
