



let multiplicationFactor = 2;
let numberOfSimilarPairs = 6

// ---------------------------------------------------------------
let bildArrayForProduct = (numberOfCards) => {

    let arrayForProduct = [];
    while (arrayForProduct.length < numberOfCards) {
        let randomNum = Math.ceil(Math.random() * 10);
        // console.log('randomNum', randomNum)
        let product = multiplicationFactor * randomNum
        if (arrayForProduct.indexOf(product) === -1 && randomNum !== 0) {
            // console.log('the number ', randomNum)
            // console.log('the number * multiplicationFactor', product)
            arrayForProduct.push(product)
        }

    }

    return arrayForProduct

}


let arrayForProduct = bildArrayForProduct(numberOfSimilarPairs)
console.log('arrayForProduct', arrayForProduct)


let bildArrayForMultiFactors = () => {
    // console.log(arrayForProduct)
    let arrayForMultiFactors = [];
    for (let i = 0; i < arrayForProduct.length; i++) {
        // console.log(arrayForProduct[i])
        arrayForMultiFactors.push(`${arrayForProduct[i] / 2}*${multiplicationFactor}`)
    }
    return arrayForMultiFactors
}


let arrayForMultiFactors = bildArrayForMultiFactors()
console.log('arrayForMultiFactors ', arrayForMultiFactors)



let allCardsInTheGame = arrayForProduct.concat(arrayForMultiFactors);

let shuffle = (array) => array.sort(() => Math.random() - 0.5);

shuffle(allCardsInTheGame)


console.log(allCardsInTheGame)



// let allCardsInTheGame = [1, 2, 3, 4, 5, 6]

export default allCardsInTheGame



// المشكلة التي علينا علاجها هي ان اللعبة تقوم ببناء نفس الارقام دائماً وتعيد ترتيبها بشكل عشوائي
// علينا ضرب الرقم راندوم بعشرة في فانكشن تشكيل ناتج الضرب حيث سنحصل على عامل ضرب الرقم عشرة 

// لكن علينا القيام بالجزء الثاني  الذي يشكل ارقام عوامل الضرب بالطريقة الثانية عن طريق فور لوب للمجموعة الاولى بحيث نضمن اننا سنحص ل على نفس الارقام الاولى


// ---------------------------------------------------------------
// الحل الثالث 
/* هذه تقوم باعداد بانشاء مصفوفة مؤلفة من عوامل ضرب عدد معين حتى الرقم المختار للكروت */
// لم تنفع لاننا نحتاح نفس قيم الكروت المنشأة لمصفوفة ناتج الضرب او العملية الحسابية ولا يمكن الحصول على قيم راندوم هنا 
// let bildArrayForMultiFactors = (numberOfCards) => {
//     let arrayForMultiFactors = [];
//     while (arrayForMultiFactors.length < numberOfCards) {
//         let randomNum = Math.ceil(Math.random() * numberOfCards);
//         let multiFactors = `${randomNum}*${multiplicationFactor}`
//         if (arrayForMultiFactors.indexOf(multiFactors) === -1 && randomNum !== 0) {
//             arrayForMultiFactors.push(multiFactors)
//         }
//     } return arrayForMultiFactors
// }


// let arrayForMultiFactors = bildArrayForMultiFactors(numberOfSimilarPairs)
// console.log('arrayForMultiFactors ',arrayForMultiFactors)
// ---------------------------------------------------------------


/* الحل الثاني
مشكلته ارقام عوامل الضرب غير مفرطعة

let multiplicationFactor = 2;
let numberOfSimilarPairs = 3



let bildArrayForProduct = (numberOfCards) => {

    let arrayForProduct = [];
    while (arrayForProduct.length < numberOfCards) {
        let randomNum = Math.ceil(Math.random() * numberOfCards);
        let product = multiplicationFactor * randomNum
        if (arrayForProduct.indexOf(product) === -1 && randomNum !== 0) {
            console.log('the number ', randomNum)
            console.log('the number * multiplicationFactor', product)
            arrayForProduct.push(product)
        }

    }

    return arrayForProduct

}


let ArrayForProduct= bildArrayForProduct(numberOfSimilarPairs)
console.log( ArrayForProduct)


let bildArrayForMultiFactors = () => {

    let arrayForMultiFactors = [];
    for (let i = 0; i < ArrayForProduct.length; i++) {
        console.log(ArrayForProduct[i])
        arrayForMultiFactors.push(`${ArrayForProduct[i]/2}*${multiplicationFactor}`)
    }
    return arrayForMultiFactors
}


let arrayForMultiFactors = bildArrayForMultiFactors()
console.log( arrayForMultiFactors)
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