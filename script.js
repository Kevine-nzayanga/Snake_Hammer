// Selection of all the CSS selectors
const score = document.querySelector('.score span')
const holes = document.querySelectorAll('.hole')
const start_btn = document.querySelector('.buttons .start')
const stop_btn = document.querySelector('.buttons .stop')
const cursor = document.querySelector('.hammer img')

// Here we changing our default cursor to hammer
// (e) refers to event handler
window.addEventListener('mousemove', (e) => {
	cursor.style.top = e.pageY + "px"
	cursor.style.left = e.pageX + "px"
})

// It is used to give the animation to
// our hammer every time we click it
// on our screen
window.addEventListener('click', () => {
	cursor.style.animation = 'none'
	setTimeout(() => {
		cursor.style.animation = ''
	}, 101)
})

// From this part our game starts when
// we click on the start button
start_btn.addEventListener('click', () => {
	start_btn.style.display = 'none'
	stop_btn.style.display = 'inline-block'

	let holee
	let points = 0

	const game = setInterval(() => {

		// Here we are taking a random hole
		// from where spider comes out
		let ran = Math.floor(Math.random() * 5)
		holee = holes[ran]

		// This part is used for taking the
		// spider up to the desired hole
		let set_img = document.createElement('img')
		set_img.setAttribute('src',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRd1oYDxByBja7fpHvqClD6ZsPVxQcz4_rg&usqp=CAU')
		set_img.setAttribute('class', 'spider')
		holee.appendChild(set_img)

		// This part is used for taking
		// the spider back to the hole
		setTimeout(() => {
			holee.removeChild(set_img)
		}, 700);
	}, 800)

	// It is used for adding our points
	// to 0 when we hit to the spider
	window.addEventListener('click', (e) => {
		if (e.target === holee)
			score.innerText = ++points;
	})

	// This is coded for changing the score
	// to 0 and change the stop button
	// again to the start button!
	stop_btn.addEventListener('click', () => {
		clearInterval(game)
		stop_btn.style.display = 'none'
		start_btn.style.display = 'inline-block'
		score.innerHTML = 0
	})
})
