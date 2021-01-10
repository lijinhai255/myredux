const loggerMiddleware = (store)=>(next)=>(action)=>{
    console.log("[⏰ -logger this  state]",store.getState());
    console.log("[⏰ -logger next]",next)
    next(action)
    console.log("[⏰ -logger action]",action)
}

export default loggerMiddleware