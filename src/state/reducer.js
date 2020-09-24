const reducer = (state,action)=>{
    if(state === undefined){
        return {
            user:null,
            news:[]
        }
    }
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.payload
            }
        case 'SET_NEWS':
            return {
                ...state,
                news:action.payload
            }
        default:
            return state
    }

}
export default reducer