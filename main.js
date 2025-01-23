function getFruits() {
    let listeFruits = []

    listeFruits.push('Fruit 1')
    listeFruits.push('Fruit 2')
    listeFruits.push('Fruit 3')
    listeFruits.push('Fruit 4')
    listeFruits.push('Fruit 5')
    
    return listeFruits;
}

function displayFruits(listeFruits) {
    const ul = document.querySelector('#listeFruits')
    for (let fruit of listeFruits) {
        const li = document.createElement('li')
        li.textContent = fruit
        ul.appendChild(li)
    }
}

async function main() {
    const listeFruits = getFruits()  
    displayFruits(listeFruits)
}

main()