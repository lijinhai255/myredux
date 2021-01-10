let initStyate = {
    count:0,

}
export default function reducer(state,actions) {
    if(!state){
        state = initStyate
    }
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