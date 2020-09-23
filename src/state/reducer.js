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
        default:
            return state
    }

}
export default reducer