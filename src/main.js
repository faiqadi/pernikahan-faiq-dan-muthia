import {home} from "./js/home.js";
import {bride} from "./js/bride.js";
import {time} from "./js/time.js";
import {galeri} from "./js/galeri.js";
import {wishas} from "./js/wishas.js";
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js";
import {story} from "./js/story.js";

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.querySelector('.bride').classList.add('ios-device');
}
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.querySelector('.time').classList.add('ios-device');
}
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.querySelector('.wishas').classList.add('ios-device');
}

// load content
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    welcome();
    navbar();
    home();
    bride()
    time();
    story();
    galeri();
    wishas();
});