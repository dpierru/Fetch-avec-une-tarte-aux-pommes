function obtenirFruit() {
    let listeFruits = []

    listeFruits.push('Fruit 1')
    listeFruits.push('Fruit 2')
    listeFruits.push('Fruit 3')
    listeFruits.push('Fruit 4')
    listeFruits.push('Fruit 5')
    
    return listeFruits
}

function afficherFruit(listeFruits) {
    const ul = document.querySelector('#listeFruits')
    for (let fruit of listeFruits) {
        const li = document.createElement('li')
        li.textContent = fruit
        ul.appendChild(li)
    }
}

function main() {
    const listeFruits = obtenirFruit()  
    afficherFruit(listeFruits)
}

main()