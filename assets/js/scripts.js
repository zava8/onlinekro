var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

var font_selektr = document.querySelector('#fontselectid');
var font_selektr_mobaIl = document.querySelector('#fontselectidmobile');
font_selektr.onchange = function() {
    document.body.style.fontFamily = font_selektr.value;
    document.footer.style.fontFamily = font_selektr.value;
    // if ( this.value === "Hnskrit")
    if ( ['HinDi', 'Hnskrit'].includes(this.value) )
    {
        document.body.style.fontSize = "xx-large";
        document.footer.style.fontSize = "xx-large";
    }
}
font_selektr_mobaIl.onchange = function() {
    document.body.style.fontFamily = font_selektr_mobaIl.value;
    document.footer.style.fontFamily = font_selektr_mobaIl.value;
    if ( ['HinDi', 'Hnskrit'].includes(this.value) )
    {
        document.body.style.fontSize = "xx-large";
        document.footer.style.fontSize = "xx-large";
    }
}
