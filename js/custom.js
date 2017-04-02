var more = $('.more'), buttonShow = $('.show-more'), visible = false

more.hide()

buttonShow.on('click', function () {
	more.slideToggle('fast')
	if (!visible) {
		buttonShow.html('Read less...')
	}else{
		buttonShow.html('Read more...')
	}
	visible = !visible
})
















