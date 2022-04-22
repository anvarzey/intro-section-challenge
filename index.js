const navMenu = document.getElementById('navigationMenu')
const navToggle = document.querySelector('.mobile-nav-toggle')
const screenOp = document.querySelector('.screen-opacity')
const featMenu = document.getElementById('featuresMenu')
const compMenu = document.getElementById('companyMenu')
const featuresBtn = document.getElementById('openFeatures')
const companyBtn = document.getElementById('openCompany')

navToggle.addEventListener('click', () => {
  const visibility = navMenu.getAttribute('data-visible')

  if(visibility === "true"){
    navMenu.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
    screenOp.setAttribute('data-visible', false)
  } else {
    navMenu.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
    screenOp.setAttribute('data-visible', true)
  }
})

function openDropdownMenu ( button , menu) {
  const open = menu.getAttribute('menu-visible')
  if (open === "true"){
    menu.setAttribute('menu-visible', false)
    button.setAttribute('menu-open', false)
  } else {
    menu.setAttribute('menu-visible', true)
    button.setAttribute('menu-open', true)
  }

}

featuresBtn.addEventListener('click', () => {
  openDropdownMenu( featuresBtn, featMenu)
})

companyBtn.addEventListener('click', () => {
   openDropdownMenu( companyBtn, compMenu)
  })