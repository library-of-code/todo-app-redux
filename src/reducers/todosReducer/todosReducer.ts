const todoReducer = (state: any[] = [], action: any) => {
    switch (action.type) {
        case "ADD_TODO":
            var findCurrentId = state.reduce((acc, currentObj) => currentObj.id + 1)
            return [
                ...state,
                { id: findCurrentId, task: action.task, completed: false },
            ];

        case "REMOVE_TODO":
            let index = state.findIndex((element) => (element.id == action.id));
            let stateAfterRemove = [...state.slice(0, index), ...state.slice(index + 1)]
            return stateAfterRemove;

        case "TOGGLE_TODO":
            var element = state.filter((e) => e.id == action.id)[0];
            console.log(element)
            let stateAfterToggle = [...state.filter(e => e != element), { ...element, completed: !element.completed }];
            console.log(stateAfterToggle)
            return stateAfterToggle;
        // return [...state];

        default:
            return state;
    }
};

export default todoReducer;
