function productCardClicked(cardNumber) {
    let currentCard = document.querySelector(`#product-card-${cardNumber}`);
    let currentCardHiddenSpan = currentCard.querySelector("span");
    currentCard.classList.add("card-hovered");
    currentCardHiddenSpan.classList.remove("long-description-none");
}

function productCardNotClicked(cardNumber) {
    let currentCard = document.querySelector(`#product-card-${cardNumber}`);
    let currentCardHiddenSpan = currentCard.querySelector("span");
    currentCard.classList.remove("card-hovered");
    currentCardHiddenSpan.classList.add("long-description-none");
}


let imageToInsert = document.createElement("img");
let modalBody = document.querySelector(".modal-body");

function openModalWithCurrentCard(cardNumber) {


    fillModalWindow(cardNumber);
}

function fillModalWindow(cardNumber) {
    let currentCard = document.querySelector(`#product-card-${cardNumber}`);
    //other dataToInsert

    imageToInsert.src = `${currentCard.dataset.image}`;
    modalBody.appendChild(imageToInsert);
}
