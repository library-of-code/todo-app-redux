const RemoveTodos = (state: any[] = [], action) => {
    let index = state.findIndex(element => element.id = action.id)
    return [
        ...state.slice(0, index),
        ...state.slice(index)
    ]
}

export default RemoveTodos