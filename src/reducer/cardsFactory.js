



let reverseOperatorFun = (operator)=> {
    
    if ( operator ==='+') return '-'
    if ( operator ==='-') return '+'
    if ( operator ==='*') return '/'
    if ( operator ==='/') return '*'
    // else return 0

}





let operator = '*';

let reverseOperator = reverseOperatorFun(operator)

console.log(reverseOperator)





/* العدد الذي سيتم الضرب به كمثال جدول الخمسة */
let multiplicationFactor = 5;  
 /* عدد البطاقات الفريدة ، نضربه ب 2 لنحصل على عدد  جميع الاوراق */
let numberOfSimilarPairs = 10  

/* الفانكشن التي تقوم بالترتيب تلقائي لاي مصفوفة */
let shuffle = (array) => array.sort(() => Math.random() - 0.5);

// ---------------------------------------------------------------
let bildArrayForResults = (numberOfCards) => {

    let arrayForResults = [];
    while (arrayForResults.length < numberOfCards) {
        let randomNum = Math.ceil(Math.random() * 10);
        // console.log('randomNum', randomNum)
        // let product = multiplicationFactor * randomNum
        let product = eval(`${multiplicationFactor}${operator} ${randomNum}`)

        if (arrayForResults.indexOf(product) === -1 && randomNum !== 0) {
            // console.log('the number ', randomNum)
            // console.log('the number * multiplicationFactor', product)
            arrayForResults.push(product)
        }

    }

    return arrayForResults

}


let arrayForResults = bildArrayForResults(numberOfSimilarPairs)
console.log('arrayForResults', arrayForResults)


let bildArrayForFormulas = () => {
    // console.log(arrayForResults)
    let arrayForFormulas = [];
    for (let i = 0; i < arrayForResults.length; i++) {
        // console.log(arrayForResults[i])
        arrayForFormulas.push(` ${ eval( `${arrayForResults[i]} ${reverseOperator} ${multiplicationFactor}`)}${operator}${multiplicationFactor}`)
    }
    return arrayForFormulas
}


let arrayForFormulas = bildArrayForFormulas()
shuffle(arrayForFormulas )
console.log('arrayForFormulas  ', arrayForFormulas)

let allCardsInTheGame = arrayForResults.concat(arrayForFormulas);



console.log(allCardsInTheGame)

// arrayForResults

// let allCardsInTheGame = [1, 2, 3, 4, 5, 6]

export default allCardsInTheGame

// export { arrayForResults, arrayForFormulas }





/*  */














// المشكلة التي علينا علاجها هي ان اللعبة تقوم ببناء نفس الارقام دائماً وتعيد ترتيبها بشكل عشوائي
// علينا ضرب الرقم راندوم بعشرة في فانكشن تشكيل ناتج الضرب حيث سنحصل على عامل ضرب الرقم عشرة 

// لكن علينا القيام بالجزء الثاني  الذي يشكل ارقام عوامل الضرب بالطريقة الثانية عن طريق فور لوب للمجموعة الاولى بحيث نضمن اننا سنحص ل على نفس الارقام الاولى



// ---------------------------------------------------------------
// الحل الثالث 
/* هذه تقوم باعداد بانشاء مصفوفة مؤلفة من عوامل ضرب عدد معين حتى الرقم المختار للكروت */
// لم تنفع لاننا نحتاح نفس قيم الكروت المنشأة لمصفوفة ناتج الضرب او العملية الحسابية ولا يمكن الحصول على قيم راندوم هنا 
// let bildarrayForFormulas  = (numberOfCards) => {
//     let arrayForFormulas  = [];
//     while (arrayForFormulas .length < numberOfCards) {
//         let randomNum = Math.ceil(Math.random() * numberOfCards);
//         let multiFactors = `${randomNum}*${multiplicationFactor}`
//         if (arrayForFormulas .indexOf(multiFactors) === -1 && randomNum !== 0) {
//             arrayForFormulas .push(multiFactors)
//         }
//     } return arrayForFormulas 
// }


// let arrayForFormulas  = bildarrayForFormulas (numberOfSimilarPairs)
// console.log('arrayForFormulas  ',arrayForFormulas )
// ---------------------------------------------------------------


/* الحل الثاني
مشكلته ارقام عوامل الضرب غير مفرطعة

let multiplicationFactor = 2;
let numberOfSimilarPairs = 3



let bildarrayForResults = (numberOfCards) => {

    let arrayForResults = [];
    while (arrayForResults.length < numberOfCards) {
        let randomNum = Math.ceil(Math.random() * numberOfCards);
        let product = multiplicationFactor * randomNum
        if (arrayForResults.indexOf(product) === -1 && randomNum !== 0) {
            console.log('the number ', randomNum)
            console.log('the number * multiplicationFactor', product)
            arrayForResults.push(product)
        }

    }

    return arrayForResults

}


let arrayForResults= bildarrayForResults(numberOfSimilarPairs)
console.log( arrayForResults)


let bildarrayForFormulas  = () => {

    let arrayForFormulas  = [];
    for (let i = 0; i < arrayForResults.length; i++) {
        console.log(arrayForResults[i])
        arrayForFormulas .push(`${arrayForResults[i]/2}*${multiplicationFactor}`)
    }
    return arrayForFormulas
}


let arrayForFormulas  = bildarrayForFormulas ()
console.log( arrayForFormulas )
 */














/* الحل الاول للارقام فقط  */
// let bildRandomArray = (numberOfCards) => {
//     let allUniqueCards = [];
//     while (allUniqueCards.length < numberOfCards) {
//         let randomNum = Math.floor(Math.random() * numberOfCards + 1);
//         if (allUniqueCards.indexOf(randomNum) === -1 && randomNum !== 0) {
//             allUniqueCards.push(randomNum)
//         }
//     }
//     return allUniqueCards;
// }

// let numberOfSimilarPairs = 3

// let allCardsInTheGame = bildRandomArray(numberOfSimilarPairs).concat(bildRandomArray(numberOfSimilarPairs));


// export default allCardsInTheGame