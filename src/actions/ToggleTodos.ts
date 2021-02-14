const ToggleTodos = (state: any[] = [], action) => {
    var element = state.filter(element => element.id == action.id)
    return [...state, { ...element, completed: !element.completed }]
}

export default ToggleTodos