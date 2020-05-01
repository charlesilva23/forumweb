const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['https://blog.rodeowest.com.br/wp-content/uploads/2020/01/agricultura-sustentavel.jpg','https://images.endeavor.org.br/uploads/2017/09/Agricultura-digital_-1.png','https://abrilexame.files.wordpress.com/2018/02/valio84sl.jpg', 'https://mirandacontainer.com.br/wp-content/uploads/2018/08/232209-agricultura-sustentavel-entenda-o-conceito-e-beneficios.jpg', 'https://conexaoplaneta.com.br/wp-content/uploads/2017/03/terras-do-agronegocio-superam-areas-protegidas-imaflora-foto-broin-pixabay-.jpg', 'https://fia.com.br/blog/wp-content/uploads/2018/10/agronegocio-o-que-e-como-funciona.jpg'];

img.src = pictures[0];
let position = 0;

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);