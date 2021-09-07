export default function notifications(state = [], action) {
    switch (action.type) {
        case "SET_NOTIFICATIONS":
            return action.data
        case "ADD_NOTIFICATION":
            return [action.data, ...state]
        default:
            return state
    }
}