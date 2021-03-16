import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { choosedResultsCards } from '../../actions/action'
import styles from './resultsCards.module.scss'
import React from 'react'


function ResultsCards(props) {
    const dispatch = useDispatch()
    const stateFirstReducer = useSelector(state => {
        return state.firstReducer;
    })

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         let x = new Date().toLocaleTimeString()
    //         // console.log(x)
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);




    function handleClick() {
        let allSpan = document.querySelectorAll('span')
        // console.log(props.formulaOrResult)
        props.setFormulaOrResult(props.cartText)

        if (props.formulaOrResult !== props.cartText) {
            if (stateFirstReducer.choosedCardsId.indexOf(props.id) === -1) {
                if (stateFirstReducer.choosedCardsId.length < 2) {
                    // console.log(typeof props.theCard)
                    // console.log(eval(props.theCard))
                    dispatch(choosedResultsCards(props.id, props.theCard))
                    allSpan[props.id * 2].className = `${styles.front} `;
                    allSpan[(props.id * 2) + 1].className = `${styles.back} ${styles.flip}`;
                    props.textMessage('')
                }
            }
        } else props.textMessage('Choose card from the other side!' )
    }

    // 'front flip'


    return (
        <div className={styles.classResults}>
            <article className={styles.memoryCard} id={props.id} onClick={handleClick}>
                <span className={`${styles.front} ${styles.flip}`} > {props.theCard}</span>
                <span className={styles.back}>{props.cartText}</span>
            </article>

        </div>
    )
}

export default ResultsCards;
