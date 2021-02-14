const todoReducer = (state: any[] = [], action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, AddTodo(
                action.task
            )]
            break;

        case 'REMOVE_TODO':
            return RemoveTodos(state, action)
            break;

        case 'TOGGLE_TODO':
            return ToggleTodos(state, action)
            break;

        default:
            break;
    }
    return state;
}

export default todoReducer