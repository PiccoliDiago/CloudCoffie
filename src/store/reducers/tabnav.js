export default function tabnav(state = "home", action) {
    switch (action.type) {
        case "SET_TAB":
            return action.data
        default:
            return state
    }
}