// subjectSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookmarks: [],
}

export const subjectSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload)
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== action.payload.id
      )
    },
    clearBookmarks: (state) => {
      state.bookmarks = []
    },
  },
})

export const { addBookmark, removeBookmark, clearBookmarks } =
  subjectSlice.actions

export default subjectSlice.reducer
