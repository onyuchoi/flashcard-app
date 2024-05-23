const flashcards = [
    { word: "Word 1", definition: "Definition 1" },
    { word: "Word 2", definition: "Definition 2" },
    { word: "Word 3", definition: "Definition 3" },
];

let currentCardIndex = 0;

function showCard(index) {
    const front = document.getElementById('front');
    const back = document.getElementById('back');
    front.textContent = flashcards[index].word;
    back.textContent = flashcards[index].definition;
    document.getElementById('flashcard').classList.remove('flip');
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flip');
}

function nextCard() {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        showCard(currentCardIndex);
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showCard(currentCardIndex);
    }
}

window.onload = function() {
    showCard(currentCardIndex);
}
