const links = document.querySelectorAll('.recipe a')

for (link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let elm = document.querySelector(`.${e.target.id}`)
        elm.classList.toggle('active')
        if(e.target.textContent === 'MOSTRAR') {
            e.target.textContent = "ESCONDER"
        } else if(e.target.textContent === 'ESCONDER') {
            e.target.textContent = "MOSTRAR"
        }

    })
}

