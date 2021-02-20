import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { choosedCard } from '../actions/action'
import React from 'react'


function MemoryCard(props) {
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
        if (stateFirstReducer.choosedCardsId.indexOf(props.id) === -1) {
            if (stateFirstReducer.choosedCardsId.length < 2) {
                console.log(typeof props.allCard)
                console.log(eval(props.allCard))
                dispatch(choosedCard(props.id, eval(props.allCard)))
                allSpan[props.id * 2].className = 'front';
                allSpan[(props.id * 2) + 1].className = 'back flip';
            }
        }
    }




    return (
        <div>
            <article className="memory-card" id={props.id} onClick={handleClick}>
                <span className='front flip'> {props.allCard}</span>
                <span className='back' >kort</span>
            </article>

        </div>
    )
}

export default MemoryCard;
