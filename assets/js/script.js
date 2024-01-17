let menuMobile = document.querySelector('.menu-op');
let menuNav = document.querySelector('.nav');

menuMobile.addEventListener('click', () => {
    if (menuNav.style.display == 'none' ) {
        menuNav.style.display= 'flex'
    } else {
        menuNav.style.display= 'none'
    }
})