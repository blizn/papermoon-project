'use strict'

var menu, close , nav, main

menu = document.querySelector('.hamburger')
close = document.querySelector('.close')
nav = document.querySelector('nav')
main = document.querySelector('#main')

nav.style.width = 0

menu.addEventListener('click', function (e) {
	e.preventDefault()
	nav.style.width = '200px'
	// main.style.transition = '1s'
	// main.style.marginRight = '250px'
	// main.style.opacity = .1
	main.style.cssText = 'transition: 1s; margin-right: 250px; opacity:.1;'
})

close.addEventListener('click', function (e) {
	e.preventDefault()
	nav.style.width = 0
	// main.style.marginRight = 0
	// main.style.opacity = 1
	main.style.cssText = 'transition: 1s; margin-right: 0; opacity:1;'
})