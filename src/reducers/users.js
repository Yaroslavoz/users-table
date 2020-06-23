const initialState = {
  users: [],
  hasErrored: false,
  isLoading: false
}

export function users(state = initialState, action){
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return {
        ...state,
        users: action.users
      }

    case 'ITEMS_IS_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading
      }
    
    case 'ITEMS_HAS_ERRORED':
      return {
        ...state,
        hasErrored: action.hasErrored
      }

    default:
      return state;
  }
}