export default function createStore(reducer,initialState){
    let state = initialState;
    let listeners = [];
    function subscribe(listener){
        listeners.push(listener);

    }
    function getState(){
        return state;
    }
    function dispaction(action){
        // state = newState;
        state = reducer(state,action)
        for(let i = 0; i < listeners.length; i++){
            const listener = listeners[i];
            listener()
        }

    }
    return {
        subscribe,
        getState,
        dispaction,
    }
}