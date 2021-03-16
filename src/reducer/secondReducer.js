
const initialState = {
    gameTime: '',
    currentTime:'',
    checkAccess:''
};


const secondReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setTimer':

            return {
                ...state,
                gameTime: action.gameTime,
                currentTime: action.currentTime,
                checkAccess:true,

            }
        case 'removeAccess':

            return {
                ...state,
                checkAccess:false,

            }



        default:
            return state
    }
}

export default secondReducer;


