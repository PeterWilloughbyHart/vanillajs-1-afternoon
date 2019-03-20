let id = document.getElementById('idInput')
let color = document.getElementById('colorInput')

let setCard = () => {
    let card = document.getElementById(id.value)
    console.log(card)
    card.style.color = color.value;
}

function reset() {
    document.getElementById('idInput').value = 0;
    document.getElementById('colorInput').value = 0;
}