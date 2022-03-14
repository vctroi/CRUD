import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  pessoasReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  pessoas: pessoasReducer
})

const initialState = {
  pessoas: { pessoaInfo: "" },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
