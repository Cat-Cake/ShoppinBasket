let item = document.getElementById('item')
let shop = document.getElementById('test')
let price = document.getElementById("price")
let delivery = document.getElementById("delivery")
let ttc = document.getElementById("ttc")
let total = document.querySelector(".total")
let shopCardContainer = document.getElementById("shop-card-container")
let image = document.querySelector(".img")
console.log(total);

let shopping = document.getElementById('a-basket').addEventListener('click', function() {
    item.style.display= 'none'
    shop.style.display= 'block'
})

let logo = document.getElementById('a-logo').addEventListener('click', function() {
    item.style.display= 'block'
    shop.style.display= 'none'
})


fetch("./assets/js/data.json")
    .then(res=> res.json())
    .then((res) =>
		res.forEach((element) => {
			createCard(element.name, element.tome, element.editeur, element.description, element.prix, element.img);
		})
	);


function createCard(name, tome, editeur, description, prix, img) {
    const main = document.querySelector("#item-main")
//article
    let article = document.createElement("article")
    article.classList.add("card")
    main.appendChild(article)
// div img-container
    let divImage = document.createElement("div")
    divImage.classList.add("img-container")
    let imageInDiv = document.createElement("img")
    imageInDiv.classList.add("img")
    imageInDiv.src = `${img}`// ajouter la source de l'image (fetch)
    article.appendChild(divImage)
    divImage.appendChild(imageInDiv)
//div text-container
    let divText = document.createElement("div")
    divText.classList.add("text-container")
    article.appendChild(divText)
//div text-container h1
    let h1 = document.createElement("h1")
    h1.classList.add("title")
    h1.innerHTML = `${name}`
    divText.appendChild(h1)
//div text-container p author
    let pAuthor = document.createElement("p")
    pAuthor.classList.add("author")
    pAuthor.innerHTML = `${editeur}`
    divText.appendChild(pAuthor)
//div text-container p tome
    let pTome = document.createElement("p")
    pTome.classList.add("tome")
    pTome.innerHTML = `Tome ${tome}`
    divText.appendChild(pTome)
//div text-container p description
    let pDescription = document.createElement("p")
    pDescription.classList.add("description")
    pDescription.innerHTML = `${description}`
    divText.appendChild(pDescription)
//div cost-container
    let divCost = document.createElement("div")
    divCost.classList.add("cost-container")
    divText.appendChild(divCost)
//div cost-container p prix
    let pCost = document.createElement("p")
    pCost.classList.add("prix")
    pCost.innerHTML = `${prix}`
    divCost.appendChild(pCost)
//div cost-container p button
    let button = document.createElement("button")
    button.classList.add("button-cost")
    button.innerHTML = 'Ajouter au panier'
    button.setAttribute('onclick', 'addToList(this)')
    divCost.appendChild(button)
//div cost-container  button img
    let imageInDivCost = document.createElement("img")
    imageInDivCost.classList.add("basket-img")
    imageInDivCost.src = `./assets/image/shopping-mobile.png` // ajouter la source de l'image (fetch)
    button.appendChild(imageInDivCost)


// section panier et prix

price.innerHTML = `Panier : <span>${prix}€</span>`
delivery.innerHTML = `Frais de livrasison estimés : `
ttc.innerHTML= `Total (TVA incluse) : `
    }



function addToList(item) {
    // console.log(item.parentNode.parentNode.parentNode.children);
let cardShop = []
let cardInShop = cardShop.push(item.parentNode.parentNode.parentNode.innerText.split('\n\n'))
let cardDescription = []
let cardInDescription = cardDescription.push(item.parentNode.parentNode.parentNode.children)
// console.log(cardDescription);
console.log(cardShop);
// shopCardContainer.append(cardInShop)

// card in shop
let articleShop = document.createElement("article")
articleShop.classList.add("card")
shopCardContainer.appendChild(articleShop)






// img container
let divImage2 = document.createElement("div")
divImage2.classList.add("img-container")
let imageInDIv2 = document.createElement("img")
imageInDIv2.classList.add("img")
imageInDIv2.textContent = `${image}`
articleShop.appendChild(divImage2)
divImage2.appendChild(imageInDIv2)










// second container
let secondContainer = document.createElement("div")
secondContainer.classList.add("second-container")
articleShop.appendChild(secondContainer)
//text container
let textContainer = document.createElement("div")
textContainer.classList.add("text-container")
secondContainer.appendChild(textContainer)
// text container h1
let h1inTextContainer = document.createElement("h1")
h1inTextContainer.classList.add("title")
h1inTextContainer.innerHTML = `${cardShop[0][0]}`
textContainer.appendChild(h1inTextContainer)
// text container p author
let pAuthor2 = document.createElement("p")
pAuthor2.classList.add("author")
pAuthor2.innerHTML = `${cardShop[0][1]}`
textContainer.appendChild(pAuthor2)
// text container p tome
let pTome2 = document.createElement("p")
pTome2.classList.add("tome")
pTome2.innerHTML = `${cardShop[0][2]}`
textContainer.appendChild(pTome2)
// text container p description
let pDescription2 = document.createElement("p")
pDescription2.classList.add("description")
pDescription2.innerHTML = `${cardShop[0][3]}`
textContainer.appendChild(pDescription2)
// cost-container
let costContainer = document.createElement("div")
costContainer.classList.add("cost-container")
textContainer.appendChild(costContainer)
// cost container p prix
let pPrix = document.createElement("p")
pPrix.classList.add("prix")
pPrix.innerHTML= `${cardShop[0][4]}`
costContainer.appendChild(pPrix)
// cost container input
let input = document.createElement("INPUT");
input.setAttribute("id", "browser")
input.setAttribute("name", "browser");
input.setAttribute("placeholder", "Quantités")
costContainer.appendChild(input)


}
