//initializers
const content = document.querySelector('.content')
const links = document.querySelectorAll('header li')
const logo = document.querySelector('.logo')
const modal = document.querySelector('.modal')


function init() {
    //load index page
    if (window.location.hash === '') {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", './main.html')
        xhr.send()
        xhr.onload = () => {
             content.innerHTML = xhr.response
             modalCards();
        }
    }

    //add Listener on menu links
    for (link of links) {
        link.addEventListener('click', (event) => {
            loadContent(event)

        })
    }

    //addListener on Logo link
    logo.addEventListener('click', (event) => {
        loadContent(event)

    })


}


//function to load AJAX content
function loadContent(event) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", `./${event.target.id}.html`)
    xhr.send()
    xhr.onload = () => {
        content.innerHTML = xhr.response
        modalCards();
    }
    
}


//Open recepies modal
function setContentModal(event) {
    console.log('setContent called')
    let caller = event.target
    let modalContent = modal.querySelector('.modalContent')
    modalContent.innerHTML = caller.innerHTML
    let closer = document.createElement('a')
    closer.textContent= "Fechar"
    closer.addEventListener('click', closeModal, true)
    modalContent.appendChild(closer)
    showModal()

}


//Close recepies Modal
function closeModal() { 
    modal.style.display = 'none'
}

function showModal() {
    modal.style.display = 'flex'
}

//Add Listeners to cards
function modalCards() {
    let cards = document.querySelectorAll('.card')
    for (card of cards) {
        card.onclick = (event) => {
            setContentModal(event);
        }
    }
    
}


window.onload = () => {
    init()
}