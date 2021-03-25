const cards = document.querySelectorAll('.card')

var count = 0;
for (card of cards) {
    card.id = `${count}`
    card.addEventListener('click', (e) => {
        window.location.href= `recipe/${e.target.id}`
    })
    count++
}