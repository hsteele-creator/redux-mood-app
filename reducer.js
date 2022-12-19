const moodReducer = (state, action) => {
    switch(action.type) {
        case "HAPPY":
        return {
            ...state, 
            image: action.payload      
        }

        case "SAD":
        return {
            ...state, 
            image: action.payload      
        }

        case "ANGRY":
        return {
            ...state, 
            image: action.payload      
        }
        
        case "CONFUSED":
        return {
            ...state, 
            image: action.payload      
        }

    }

}

const store = Redux.createStore(moodReducer)

