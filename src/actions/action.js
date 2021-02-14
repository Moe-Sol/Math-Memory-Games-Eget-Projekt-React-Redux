


function  choosedCard (id,value)  {
    return {
        type: 'choosedCardsId',
        id: id,
        value:value
    }
}


function differentCards (){
    return {
        type: 'differentCards',
    }
}


function sameCards (firstCardId,secondCardId){
    return {
        type: 'sameCards',
        firstCardId:firstCardId,
        secondCardId:secondCardId,
    }
}

function gameFinished (data){
    return {
        type: 'gameFinished',
        data:data,
    }
}
export { choosedCard,sameCards,gameFinished,differentCards }