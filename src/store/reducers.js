import { combineReducers } from 'redux'
import page from './reducers/page.js'
import user from './reducers/user.js'

export default combineReducers({
  page,
  user
})