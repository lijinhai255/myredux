let initStyate = {
    info:{
        name:"redux",
        description:"my redux"
    }

}
export default function reducer(state,actions) {
    if(!state){
        state = initStyate
    }
    switch (actions.type){
        case "SET_NAME":
        return {
            ...state,
            name:actions.name
        }
        case "DECREMENT":
            return {
                ...state,
                description:actions.description
            }
        default:
            return state    
    }

}