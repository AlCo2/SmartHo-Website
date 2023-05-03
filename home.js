let openNav = document.getElementById('openNav');
let navbar = document.getElementById('navbar');
let closeNav = document.getElementById('closeNav');

function handleNavbarState() {
    if (window.innerWidth <= 600) {
      navbar.style.transform = 'translateX(100%)';
      closeNav.style.display = 'block';
    } else {
      navbar.style.transform = 'translateX(0%)';
      closeNav.style.display = 'none';
    }
  }

handleNavbarState();
window.addEventListener('resize', handleNavbarState);

openNav.onclick = ()=>{
    navbar.style.transform = 'translateX(0)'
    closeNav.style.display = 'block'
}
closeNav.onclick = ()=>{
    navbar.style.transform = 'translateX(100%)'
    closeNav.style.display = 'none'
}