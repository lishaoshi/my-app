import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reduces from '../reduce'

const store = createStore(reduces, applyMiddleware(thunk))

export default store