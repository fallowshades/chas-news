import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit'

import bookmark from './features/bookmark/bookmarkSlice'
import userPreferences from './features/user/userSlice'

const rootReducer = combineReducers({
  bookmark,
  userPreferences,
})

import { HYDRATE, createWrapper } from 'next-redux-wrapper'

//um not sure if needed since is redux toolkit
/**
 * const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}
 */

/**NOT redux
 * const makeStore = () => {
  return createStore(combinedReducer, composeWithDevTools(applyMiddleware()))
}
 */
import thunk, { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

const initStoreWithProps = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  })
}

/**
 * @typedef {import('redux').Store} AppStore
 * @typedef {ReturnType<AppStore['getState']>} AppState
 * @typedef {import('redux-thunk').ThunkAction} ThunkAction
 * @typedef {import('redux').Action} Action
 */

export const wrapper = createWrapper(initStoreWithProps)
