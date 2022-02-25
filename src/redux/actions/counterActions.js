import {INCREMENT_COUNTER, DECREMENT_COUNTER} from "../constants/counterConstants"

export const increaseNumber=()=>{
    return {
        type:INCREMENT_COUNTER,
    }
}

export const decreaseNumber=()=>{
    return {
        type:DECREMENT_COUNTER,
    }
}