// in case of hover(click) effect - only scale card
function productCardClicked(cardNumber) {
    let currentCard = document.querySelector(`#product-card-${cardNumber}`);
    let currentCardHiddenSpan = currentCard.querySelector("span");
    currentCard.classList.add("card-hovered");
    currentCardHiddenSpan.classList.remove("long-description-none");
}

// in case of hover(click) effect - only scale card
function productCardNotClicked(cardNumber) {
    let currentCard = document.querySelector(`#product-card-${cardNumber}`);
    let currentCardHiddenSpan = currentCard.querySelector("span");
    currentCard.classList.remove("card-hovered");
    currentCardHiddenSpan.classList.add("long-description-none");
}



let modalBody = document.querySelector(".modal-body");

function openModalWithCurrentCard(cardNumber) {
    let currentCard = document.querySelector(`#product-card-${cardNumber}`);

    let imageToInsertSrc = currentCard.dataset.image;
    let titleToInsert = currentCard.dataset.title;
    let firstLiToInsert = currentCard.querySelector(".card-content").innerHTML;
    let secondLiToInsert = currentCard.dataset.secondli;
    let thirdLiToInsert = currentCard.dataset.thirdli;
    let fourthLiToInsert = currentCard.dataset.fourthli;
    //other dataToInsert

    let imgTag = `<img class="modal-product-img" src='${imageToInsertSrc}'>`;
    let titleTag = `<p class="card-heading-modal">${titleToInsert}</p>`;
    let firstLiTag = `<li class="card-li">${firstLiToInsert}</li>`;
    let secondLiTag = `<li class="card-li">${secondLiToInsert}</li>`;
    let thirdLiTag = `<li class="card-li">${thirdLiToInsert}</li>`;
    let fourthLiTag = `<li class="card-li">${fourthLiToInsert}</li>`;

    if (secondLiToInsert === undefined) {
        secondLiTag = '';
    }
    if (thirdLiToInsert === undefined) {
        thirdLiTag = '';
    }
    if (fourthLiToInsert === undefined) {
        fourthLiTag = '';
    }

    modalBody.innerHTML = `${imgTag} ${titleTag} <ul class="card-ul">${firstLiTag} ${secondLiTag} ${thirdLiTag} ${fourthLiTag}</ul>`;
}