
import allCardsInTheGame from './cardsFactory';


// console.log(allCardsInTheGame)

const initialState = {
    allCards: allCardsInTheGame,
    choosedCardsId: [],
    choosedCardsValue: [],
    allSameCards: [],
    gameFinished: false
};


const firstReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'choosedCardsId':
            // console.log(state.choosedCardsId)

            return {
                ...state,
                choosedCardsId: [...state.choosedCardsId, action.id],
                choosedCardsValue: [...state.choosedCardsValue, action.value],
            }

        case 'differentCards':
            return {
                ...state,
                choosedCardsId: [],
                choosedCardsValue: [],
            };

        case 'sameCards':

            // if (state.allSameCards.indexOf(action.data) === -1) {
            //     console.log(state.allSameCards)

            return {
                ...state,
                choosedCardsId: [],
                choosedCardsValue: [],
                allSameCards: [...state.allSameCards, action.firstCardId, action.secondCardId]
            }

        // }

        // else { return state }

        case 'gameFinished':

            return {
                ...state,
                allSameCards: [],
                gameFinished: action.data
            }



        default:
            return state
    }




}

export default firstReducer;


