async function obtenirListeFruits() {
    const reponse = await fetch("listeFruits.json")
    const listeFruits = await reponse.json()
    
    return listeFruits
}

function afficherListeFruits(listeFruits) {
    const ul = document.querySelector('#listeFruits')
    for (let fruit of listeFruits) {
        const li = document.createElement('li')
        li.textContent = fruit
        ul.appendChild(li)
    }
}

async function main() {
    const listeFruits = await obtenirListeFruits()
    afficherListeFruits(listeFruits)
}

main()