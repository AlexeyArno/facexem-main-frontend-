const initialState = {
  token: 0,
  data: 0,
  test_data: []
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload }
    case 'SET_DATA':
      return { ...state, data: action.payload }
    case 'SET_TEST_DATA':
      return { ...state, test_data: action.payload }
    default:
      return state;
  }
}