import 'boxicons';
import * as Helper from './helper/getSibling.js';

const btnOpenMenu = document.querySelector('.nav__toggle-menu')
const btnOpenChildMenu = document.querySelectorAll('.nav__link--open-child')
const nav = document.querySelector('nav')
const navUl = nav.querySelector('.nav__ul')
const dividerMenu = ['divide-y', 'divide-gray-400'] //ini class buat nambah border ke menu
const classToOpenNavItemHasChild = 'nav__item-has-child--open'
const pageUrl = window.location.pathname
const elementOnHeaderExceptNav = document.querySelectorAll('header nav + *')

function closeNav() {
    nav.classList.remove('nav--open')
    navUl.classList.remove(...dividerMenu)
}

function openNav() {
    nav.classList.add('nav--open')
    navUl.classList.add(...dividerMenu)
}

function closeAllMenu() {
    const allChild =  document.querySelectorAll('.nav__item-has-child--open');
    
    allChild.forEach(child => {
        child.classList.remove('nav__item-has-child--open')
    });

    closeNav();
}

btnOpenMenu.addEventListener('click', () => {
    if (nav.classList.contains('nav--open')) {
        closeNav()
    }
    else {
        openNav()
    }
});

btnOpenChildMenu.forEach(openChild => {
    const parentOfBtnOpenChild = openChild.parentNode.classList

    openChild.addEventListener('click', (e) => {
        e.preventDefault()

        const siblingsChild = Helper.getSiblings(openChild.parentNode);

        siblingsChild.forEach(eachSibling => {
            if (eachSibling.classList.contains(classToOpenNavItemHasChild)) {
                eachSibling.classList.remove(classToOpenNavItemHasChild);
            }
        });

        if (parentOfBtnOpenChild.contains(classToOpenNavItemHasChild)) {
            parentOfBtnOpenChild.remove(classToOpenNavItemHasChild)
        }
        else {
            parentOfBtnOpenChild.add(classToOpenNavItemHasChild)
        }
    })

});

if (elementOnHeaderExceptNav.length > 0) {
    document.querySelector('header nav + *').addEventListener('click', () => {
        closeAllMenu();
    });
}

document.querySelector('main').addEventListener('click', () => {
    closeAllMenu();
});

if (pageUrl === '/') {
    document.querySelector('header, main').classList.remove('bg-gray-100');

    //jika lg di landing page dan di mode tablet keatas, icon menu ganti warna jd putih
    if (window.screen.width > 768) {
        document.querySelectorAll('.nav .container > .nav__ul > .nav__item > .nav__link > .child-dropdown-icon')
        .forEach(dropdownIcon => {
            dropdownIcon.setAttribute('color', '#fff');
        });
    }
}