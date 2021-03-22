
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { allCards } from '../actions/action';

function CardsFactory() {


    const history = useHistory();
    const dispatch = useDispatch()

  

    const MultiplicationNumber = useSelector(state => {
        return state.firstReducer.MultiplicationNumber;
    })

    let reverseOperatorFun = (operator) => {
        if (operator === '+') return '-'
        if (operator === '-') return '+'
        if (operator === '*') return '/'
        if (operator === '/') return '*'
        // else return 0
    }

    let operator = '*';
    let reverseOperator = reverseOperatorFun(operator)
    let shuffle = (array) => array.sort(() => Math.random() - 0.5);




    let multiplicationFactor = MultiplicationNumber;
    let numberOfSimilarPairs = 12


    // ---------------------------------------------------------------
    let bildArrayForResults = (numberOfCards) => {
        let arrayForResults = [];
        while (arrayForResults.length < numberOfCards) {
            let randomNum = Math.ceil(Math.random() * numberOfSimilarPairs);
    
            let product = eval(`${multiplicationFactor}${operator} ${randomNum}`)

            if (arrayForResults.indexOf(product) === -1 && randomNum !== 0) {
         
                arrayForResults.push(product)
            }
        }
        return arrayForResults
    }


    let arrayForResults = bildArrayForResults(numberOfSimilarPairs)


    let bildArrayForFormulas = () => {
        let arrayForFormulas = [];
        for (let i = 0; i < arrayForResults.length; i++) {
            arrayForFormulas.push(`${eval(`${arrayForResults[i]}${reverseOperator}${multiplicationFactor}`)} X ${multiplicationFactor}`)
        }
        return arrayForFormulas
    }


    let arrayForFormulas = bildArrayForFormulas();

    //   shuffle(arrayForFormulas)

    let allCardsInTheGame = arrayForResults.concat(arrayForFormulas);

    dispatch(allCards(allCardsInTheGame.reverse()))


    useEffect(()=>{
        history.push(`/multiplication/${MultiplicationNumber}-times-table`)
    }, [])

    return (
        <div>

        </div>
    );
}

export default CardsFactory;



