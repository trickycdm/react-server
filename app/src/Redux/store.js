import { createStore, combineReducers } from 'redux'
import users from './users'

const reducers = combineReducers({
  users
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
