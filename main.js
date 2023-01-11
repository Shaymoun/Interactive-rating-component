const buttons = document.querySelectorAll('.card__rating button')
const rating = document.querySelector('.rating span')
const ratingCard = document.querySelector('.card')
const thankYouCard = document.querySelector('.card.ty-page')
const submitButton = document.querySelector('.submit')

let selectedRating = 0
buttons.forEach(button =>
	button.addEventListener('click', e => {
		selectedRating = e.target.innerText
		rating.textContent = selectedRating
	})
)

submitButton.addEventListener('click', () => {
    if(selectedRating != "") {
        ratingCard.style.display = 'none'
        thankYouCard.style.display = 'flex'
    }
})
