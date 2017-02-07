'use strict'

// listeners
window.addEventListener('keydown', ()=>{
  document.getElementById('header').innerHTML = ''
})
// create black box
const box = document.querySelector('a-box')
const sky = document.querySelector('a-sky')

box.addEventListener('click', function () {
  box.setAttribute('color', 'blue')
  sky.setAttribute('src', '#')
  sky.setAttribute('color', 'black')
})
