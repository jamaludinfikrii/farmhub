export let increment = () => {
    return {
        type : "A"
    }
}


export let decrement = () => {
    return {
        type : "DECREMENT"
    }
}


export let actionWithPayload = () => {
    return {
        type : "ACTIONWITHPAYLOAD",
        payload : 'fikri'
    }
}

export let actionWithPayloadParameter = (data) => {
    return {
        type : "BEBAS",
        payload : data
    }
}