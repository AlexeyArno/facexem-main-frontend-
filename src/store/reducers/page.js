const initialState = {
  year: 22
}

export default function page(state = initialState, action) {
  
   switch (action.type) {
    case 'SET_YEAR':
      return { ...state, year: action.payload }
    default:
      return state;
  }
}