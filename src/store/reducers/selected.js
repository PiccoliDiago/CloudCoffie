export default function selected(state = false, action) {
    switch (action.type) {
        case "SET_SELECTED":
            return action.data
        default:
            return state
    }
}