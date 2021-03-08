import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { choosedCard } from '../actions/action'
import React from 'react'


function FormulasCards(props) {
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
        console.log(props.formulaOrResult)
        props.setFormulaOrResult(props.cartText)

        if (props.formulaOrResult !== props.cartText) {
            if (stateFirstReducer.choosedCardsId.indexOf(props.id) === -1) {
                if (stateFirstReducer.choosedCardsId.length < 2) {
                    // console.log(typeof props.theCard)
                    // console.log(eval(props.theCard))
                    dispatch(choosedCard(props.id, eval(props.theCard)))
                    allSpan[props.id * 2].className = 'front';
                    allSpan[(props.id * 2) + 1].className = 'back flip';
                }
            }
        } else alert ('choose card from the other side')
    }




    return (
        <div className={props.className}>
            <article className="memory-card" id={props.id} onClick={handleClick}>
                <span className='front flip'> {props.theCard}</span>
                <span className='back' >{props.cartText}</span>
            </article>

        </div>
    )
}

export default FormulasCards;
