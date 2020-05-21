const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// Drop-down menu for toogle button
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Current indicator for tabs
$(document).on('click', '.navbar-links li', function(){
  $(this).addClass('active').siblings().removeClass('active')
})

