const initialState = {
    sitters: [],
    user_info: {} 
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
                user_info: {...action.payload}
            }
        case 'CLEAR_USER_INFO':
            return{
                ...state,
                user_info: {}
            }
        default: return state

    }
}
export default reducer;