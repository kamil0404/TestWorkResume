const nav = document.querySelector('#nav')
const navButton = document.querySelector('#nav-button')
const navBtnImg = document.querySelector('#nav-button-img')

navButton.onclick = () => {
    if(nav.classList.toggle('open')) {
        navBtnImg.src = './images/social-icons/close-svgrepo-com.svg'
    } else {
        navBtnImg.src = './images/social-icons/menu-hamburger-svgrepo-com.svg'
    }
}
