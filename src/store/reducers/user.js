import { DEFAULT_USER_STRUCT } from '../../helper'

export default function user(state = DEFAULT_USER_STRUCT, action) {
    switch (action.type) {
        case "SET_USER":
            return action.data
        default:
            return state
    }
}