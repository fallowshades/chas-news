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

const masterReducer = (state, action) => {
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

/**NOT redux
 * const makeStore = () => {
  return createStore(combinedReducer, composeWithDevTools(applyMiddleware()))
}
 */
const initStoreWithProps = () => {
  return configureStore({
    reducer: {
      reducer: masterReducer,
    },
    devTools: true,
  })
}

export const wrapper = createWrapper(initStoreWithProps)
