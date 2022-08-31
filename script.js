let scrollUp = document.getElementsByClassName("scroll")[0]
let scrolBtn = document.querySelector('.scrol-btn')
let topNav = document.getElementsByClassName("top")[0]

const scrollToTop = () => {
    document.body.scrollTop = 0    // for safari
    document.documentElement.scrollTop = 0  // firefox,edge,opera
}

window.onscroll = () => {
    if (document.body.scrollTop >= 400  ||
         document.documentElement.scrollTop >= 400 ) {
            scrolBtn.style.display = "block";
            topNav.classList.add("navbar-bg-onscroll")
    } else {
        scrolBtn.style.display = 'none';
        topNav.classList.remove('navbar-bg-onscroll')
        topNav.classList.add('navbar-bg-transparent')
    }
}
