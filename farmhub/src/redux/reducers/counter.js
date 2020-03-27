let COUNTER_STATE = {
    angka : 10,
    name : ''
}

//  REDUCER FUNCTION YANG NGE RETURN OBJECT

export const counterReducer = (state = COUNTER_STATE , action) => {
    if(action.type === 'A'){
        return {...state,angka : state.angka + 1}
    }else if(action.type === 'DECREMENT'){
        return {...state,angka : state.angka -1}
    }else if(action.type === 'ACTIONWITHPAYLOAD'){
        return {...state,name : action.payload}
    }
    else{
        return state
    }
}



