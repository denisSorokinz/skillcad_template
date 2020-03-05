function viewButtonHovered(blockNumber) {
    let currentBlockSpan = document.querySelector(`.data-span-${blockNumber}`);
    currentBlockSpan.classList.remove("data-span");
    currentBlockSpan.classList.add("span-hovered");
}

function viewButtonNotHovered(blockNumber) {
    let currentBlockSpan = document.querySelector(`.data-span-${blockNumber}`);
    currentBlockSpan.classList.remove("span-hovered");
    currentBlockSpan.classList.add("data-span");
}