const visibilityReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL'

    case 'SHOW_COMPLETED':
      return 'COMPLETED'

    case 'SHOW_PENDING':
      return 'PENDING'

  }

  return 'ALL'
}

export default visibilityReducer 