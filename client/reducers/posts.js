// A reduceers takes in two things : 

// 1. The Actions (Info about what happened)

// 2. Copy of current state

function posts(state = [], action) {
    switch(action.type) {
        case 'Increment Likes' : 
        // return the updated state
        console.log('Incrementing likes');
        const i = action.index
        return [
            ...state.slice(0,i), // Before the one we are updating
            {...state[i], likes : state[i].likes + 1},
            ...state.slice(i + 1) , // after the one we are updating
        ]

        default : 
        return state
    }
    return state
    
}

export default posts;