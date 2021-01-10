export default function combineReducers(reducers) {
    console.log(reducers,"reducers")
    const reducerKeys = Object.keys(reducers)
    //最后合并好的reducer
    return function combination(state = {}, action) {
        const nextState = {};
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            console.log(key)
            const reducer = reducers[key];
            console.log(reducer,"reducer")
            const previousStateForKey = state[key];
            console.log(previousStateForKey,"previousStateForKey")
            const nextStateForKey = reducer(previousStateForKey, action);
            console.log(nextStateForKey,"nextStateForKey")
            nextState[key] = nextStateForKey;
        }
        console.log(nextState)
        return nextState;
    };
}