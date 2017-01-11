import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import contacts from './contacts'

const App = combineReducers({
  contacts,
  form
})

export default App