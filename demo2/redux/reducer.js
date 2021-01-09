export default function reducer(state,actions) {
    switch (actions.type){
        case "INCREMENT":
        return {
            ...state,
            count: state.count +1
        }
        case "DECREMENT":
            return {
                ...state,
                count: state.count -1
            }
        default:
            return state    
    }

}