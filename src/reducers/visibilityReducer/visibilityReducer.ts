const visibilityReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return [...state, ShowAll(
        state, action
      )]
      break;

    case 'SHOW_COMPLETED':
      return [...state, ShowCompleted(
        state, action
      )]
      break;

    case 'SHOW_LEFT':
      return [...state, ShowLeft(
        state, action
      )]
      break

  }

  return state
}

export default visibilityReducer 