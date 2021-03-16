


function choosedFormulasCards(id, value) {
    return {
        type: 'choosedFormulasCards',
        id: id,
        value: value
    }
}
function choosedResultsCards(id, value) {
    return {
        type: 'choosedResultsCards',
        id: id,
        value: value
    }
}


function differentCards() {
    return {
        type: 'differentCards',
    }
}


function sameCards(firstCardId, secondCardId) {
    return {
        type: 'sameCards',
        firstCardId: firstCardId,
        secondCardId: secondCardId,
    }
}

function gameFinished(data) {
    return {
        type: 'gameFinished',
        data: data,
    }
}



function multiplicationNumber(number) {
    return {
        type: 'setMultiNumber',
        number: number,
    }


}

function allCards(allCards) {
    return {
        type: 'getAllCards',
        data: allCards,
    }
}


function setTimer(gameTime,currentTime) {
    return {
        type: 'setTimer',
        gameTime: gameTime,
        currentTime:currentTime
    }
}
function removeAccess() {
    return {
        type: 'removeAccess',
     
    }
}

export { choosedFormulasCards, choosedResultsCards, sameCards, gameFinished, differentCards, multiplicationNumber, allCards ,setTimer,removeAccess}