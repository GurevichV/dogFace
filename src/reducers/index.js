const initialState = {
    sitters: [],
    userInfo: {} 
}
const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'UPDATE_SEARCH_LIST':
            return {
                ...state,
                sitters: [...action.payload]

            }
        case 'SET_USER_INFO':
            return{
                ...state,
                userInfo: {...action.payload}
            }
        case 'CLEAR_USER_INFO':
            return{
                ...state,
                userInfo: {}
            }
        default: return state
    }

}
export default reducer;