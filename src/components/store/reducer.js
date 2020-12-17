export const initialState={
    basket:[]
}
export const getBasketTotal = (basket)=>{
    return basket?.reduce((amount,item)=>item.price+amount,0)
    // console.log(Basket?.reduce((amount,item)=>item.price+amount,0))
}
const reducer =(state,action)=>{
    switch(action.type){
    case "ADD_TO_BASKET":
        
        return{
            ...state,
            basket:[...state.basket,action.item],
        }
    case "DELETE_FROM_BASKET":
        let remove = [...state.basket].findIndex(
            each=>(each.id===action.id)
        )
            return{
                ...state,
                basket:[...state.basket]?.filter(each=>
                    each!==state.basket[remove]
                ),
            }
        default:
            return state


}
};
export default reducer