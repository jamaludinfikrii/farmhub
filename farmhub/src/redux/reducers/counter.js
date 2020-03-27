let COUNTER_STATE = {
    angka : 10
}

//  REDUCER FUNCTION YANG NGE RETURN OBJECT

export const counterReducer = (state = COUNTER_STATE , action) => {
    if(action.type === 'A'){
        return {angka : state.angka + 1}
    }else{
        return state
    }
}



