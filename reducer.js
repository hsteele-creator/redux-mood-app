const moodReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_MOOD":
        return {
            ...state, 
            image: action.payload      
        }
        default:
            return state
    }

}

const store = Redux.createStore(moodReducer)

