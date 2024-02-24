import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fontSize: 'medium',
  reduceAnimations: false,
}

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    setFontSize: (state, action) => {
      state.fontSize = action.payload
    },
    setReduceAnimations: (state, action) => {
      state.reduceAnimations = action.payload
    },
  },
})

export const { setFontSize, setReduceAnimations } = userPreferencesSlice.actions

export default userPreferencesSlice.reducer
