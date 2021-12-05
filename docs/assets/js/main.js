/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })

}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== HOME SWIPER ====================*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 50,
    loop: "true",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 10000,
    //   },
});

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL REVEAL ANIMATION ====================*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true,
})

sr.reveal('.home-swiper, .search__container, .footer_links, .footer__content')
sr.reveal('.category__data, .footer__social-link', {interval: 100})
sr.reveal('.about__data, .footer__description', {origin: "left"})
sr.reveal('.about__img, .footer__logo', {origin: "right"})

/*==================== POPUP INFORMATION CARD ====================*/ 
/*==================== SHOW MODAL ====================*/ 
// const showModal = (openButton) => {
//     const openBtn = document.getElementById(openButton),
//                     modalContainer = document.getElementById("modal-container");

//     if (openBtn && modalContainer) {
//         openBtn.addEventListener('click', () => {
//             modalContainer.classList.add('show-modal')
//         })
//     }
// }


let modalShown = false


function closeModal() {
    const modalContainer = document.getElementById("modal-container")
    modalContainer.classList.remove("show-modal")
    modalShown = false
}

const showModal = async (character_id) => {
    if (modalShown) {
        return
    }

    $.getJSON("assets/data/test.json", function(characters) {
        modalContainer = document.getElementById("modal-container")
        char = characters.find(el => el.id == character_id)

        html = `
        <div class="modal__content">
                    <div class="modal__close close-modal" title="Close" onclick="closeModal()">
                        <i class='bx bx-x'></i>
                    </div>

                    <div class="modal__description">
                        <div class="modal__intro">
                            <img src="assets/img/wiki_imgs/${char.filename}.jpg" alt="" class="modal__img">
                            <h1 class="modal__title">${char.name.replace("(Earth-616)", "")}</h1>
                            <h1 class="modal__alias">[${char.alias}]</h1>
                        </div>

                        <div class="modal__stats">
                            <div class="modal__stat">
                                # Teams: ${char.number_teams}
                            </div>
                            <div class="modal__stat">
                                # Quotes: ${char.number_quotes}
                            </div>
                            <div class="modal__stat">
                                Lexical richness: ${char.lexical_richness}
                            </div>
                            <div class="modal__stat">
                                Overall Category: ${char.overall_category}
                            </div>
                            <div class="modal__stat">
                                # Links: ${char.number_links}
                            </div>
                            <div class="modal__stat">
                                Degree: ${char.degree}
                            </div>
                        </div>
                    </div>
    
                    <div class="modal__buttons">
                        <button class="modal__button modal__button-width">
                            View Graph
                        </button>
        
                        <button class="modal__button-link close-modal" onclick="closeModal()">
                            Close
                        </button>
                    </div>
                </div>
        `

        modalContainer.innerHTML = html
        modalContainer.classList.add("show-modal")
        modalShown = true
    });
}
// showModal("0")

/*==================== CLOSE MODAL ====================*/ 
const closeBtn = document.querySelectorAll(".close-modal")



closeBtn.forEach(b => b.addEventListener('click', closeModal))
