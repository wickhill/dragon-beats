import { USER_ERROR, GET_USER, USER_IS_LOADING } from "../action/userAction"

const initialState = {
    user: null,
    isLoading: false,
    error: null
}

const sessionReducer = (state = initialState, {
    type, payload
}) => {
    switch (type) {
        case GET_USER:
            return {
                ...state, user: payload
            }
        case USER_ERROR:
            return {
                ...state, error: payload
            }
        case USER_IS_LOADING:
            return {
                ...state, isLoading: !state.isLoading
            }
        default: return { ...state }
    }
}
export default sessionReducer
