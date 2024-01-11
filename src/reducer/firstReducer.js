


const initialState = {
    allCards: [],
    choosedCardsId: [],
    choosedCardsValue: [],
    allSameCards: [],
    gameFinished: false,
    MultiplicationNumber: '',
};


const firstReducer = (state = initialState, action) => {
    switch (action.type) {


        case 'getAllCards':
            return {
                ...state,
                allCards: action.data
            }

        case 'choosedFormulasCards':
            let value = action.value;
            let firstNumber, secondNumber, result;
            firstNumber = `${value.charAt(0)}${value.charAt(1)}`
            secondNumber = `${value.charAt(4)}${value.charAt(5)}${value.charAt(6)}`
         
  
            result = firstNumber * secondNumber;
            ;
            return {
                ...state,
                choosedCardsId: [...state.choosedCardsId, action.id],
                choosedCardsValue: [...state.choosedCardsValue, result],
            }


        case 'choosedResultsCards':
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
            return {
                ...state,
                choosedCardsId: [],
                choosedCardsValue: [],
                allSameCards: [...state.allSameCards, action.firstCardId, action.secondCardId]
            }

        case 'gameFinished':
            return {
                ...state,
                choosedCardsId: [],
                choosedCardsValue: [],
                allSameCards: [],
                gameFinished: action.data
            }


        case 'setMultiNumber':
            return {
                ...state,
                MultiplicationNumber: action.number
            }


        default:
            return state
    }




}

export default firstReducer;


