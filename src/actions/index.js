export const updateSearchList = (searchResult) => {
    return {
        type: 'UPDATE_SEARCH_LIST',
        payload: searchResult
    }
}

export const setUserInfo = (user) => {
    return {
        type: 'SET_USER_INFO',
        payload: user
    }
}

export const clearUserInfo = () => {
    return{
        type: 'CLEAR_USER_INFO'
    }
}
   