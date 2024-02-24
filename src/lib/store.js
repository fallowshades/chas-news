import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit'

import bookmark from './features/bookmark/bookmarkSlice'
import userPreferences from './features/user/userSlice'

const combinedReducer = combineReducers({
  bookmark,
  userPreferences,
})

import { HYDRATE, createWrapper } from 'next-redux-wrapper'

/**NOT redux
 * const makeStore = () => {
  return createStore(combinedReducer, composeWithDevTools(applyMiddleware()))
}
 */
const initStoreWithProps = () => {
  return configureStore({
    reducer: {
      bookmark,
      userPreferences,
    },
    devTools: true,
  })
}

export const wrapper = createWrapper(initStoreWithProps)
