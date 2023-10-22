import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark
    },
    setDarkMode: (state, action) => {
      state.isDark = action.payload
    },
  },
})

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions

export const getIsDarkMode = createSelector(
  (state) => state.darkMode.isDark,
  (isDark) => isDark,
)

export default darkModeSlice.reducer
