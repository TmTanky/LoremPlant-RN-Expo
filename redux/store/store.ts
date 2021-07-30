import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import devToolsEnhancer from 'remote-redux-devtools'

// Root Reducers
import { rootReducer } from '../reducers/rootReducer'

export const store = createStore(rootReducer, applyMiddleware(thunk))