const initialState = {
    sitters: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_LIST':
            return {
                ...state,
                sitters: [...action.payload]

            }
        default: return state

    }
}
export default reducer;