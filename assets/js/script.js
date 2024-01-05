function clicarMenu() {
    let menuMob = document.querySelector('.menu-op');
    let menu = document.querySelector('.menu');

    menuMob.addEventListener('click', () => {
        menu.style.display = "flex";
    });
}
