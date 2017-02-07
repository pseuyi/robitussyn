'use strict'

// listeners
window.addEventListener('keydown', ()=>{
  document.getElementById('header').innerHTML = ''
})

let box = document.querySelector('a-box')
let sky = document.querySelector('a-sky')
// create box entrance
box.addEventListener('click', function () {
  console.log('is this the asky', sky)
  box.getAttribute('position')
  box.setAttribute('color', 'blue')
  sky.setAttribute('src', '#')
  sky.setAttribute('color', 'black')
})
