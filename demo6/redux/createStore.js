export default function createStore(
    reducer,
    initialState,
    rewriteCreateStoreFunc) {
    if(rewriteCreateStoreFunc){
        const newCreateStore = rewriteCreateStoreFunc(createStore)
        return newCreateStore(reducer,initialState)
    }    
    let state = initialState;
    let listeners = [];

    function subscribe(listener) {
        listeners.push(listener);

    }
    function getState() {
        return state;
    }
    function dispatch(action) {
        // state = newState;
        state = reducer(state, action)
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener()
        }

    }
    // 状态初始化
    dispatch({ type: Symbol() })
    return {
        subscribe,
        getState,
        dispatch,
    }
}