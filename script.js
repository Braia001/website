// Carrega mais conteudo na pagina
const loadmore = document.querySelector('.load-more');
let currentItems = 3;
loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.post-list article')];
    for (let i = currentItems; i < currentItems + 3; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
    }
    currentItems += 3;

    //O botão vai esconder depois de completar a página.
    if (currentItems >= elementList.length) {
        event.target.style.display = 'none';
    }
})

const trigger = document.querySelector('.menu-trigger'),
    addclass = document.querySelector('.site');
trigger.addEventListener('click', function() {
    addclass.classList.toggle('showmenu');
    document.body.classList.toggle('overflowme')
})

// arrumando o header
const nav = document.querySelector('.site > header');
function fixednav() {
    // vai adicionar class .fixed assim que rolar 1000 pixels
    if (window.scrollY > 1000) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}
window.addEventListener('scroll', fixednav)

// Filtro (Pesquisar)
const search = document.querySelector('.search-trigger'),
    close = document.querySelector('.search-close'),
    theclass = document.querySelector('.site');
search.addEventListener('click', function() {
    theclass.classList.toggle('showsearch')
})
close.addEventListener('click', function() {
    theclass.classList.remove('showsearch')
})

