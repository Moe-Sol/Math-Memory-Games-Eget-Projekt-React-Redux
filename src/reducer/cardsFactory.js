



let bildRandomArray = (numberOfCards) => {
    let allUniqueCards = [];
    while (allUniqueCards.length < numberOfCards) {
        let randomNum = Math.floor(Math.random() * numberOfCards + 1);
        if (allUniqueCards.indexOf(randomNum) === -1 && randomNum !== 0) {
            allUniqueCards.push(randomNum)
        }
    }
    return allUniqueCards;
}

let numberOfSimilarPairs = 3

let allCardsInTheGame = bildRandomArray(numberOfSimilarPairs).concat(bildRandomArray(numberOfSimilarPairs));


export default allCardsInTheGame