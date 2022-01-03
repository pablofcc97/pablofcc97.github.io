const navMenu=document.getElementById('nav-menu'),
toggleMenu=document.getElementById('nav-toggle'),
closeMenu=document.getElementById('nav-close')

//mostrar
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

//ocultar
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

//mover menu
const navLink= document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

//links de secciones de scroll activos
const sections = document.querySelectorAll('section[id]')//selecciona las secciones que tengan un atributo id

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight= current.offsetHeight
        const sectionTop= current.offsetTop-50
        sectionId = current.getAttribute('id')

        if(scrollY>sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active')
        }
    })
}