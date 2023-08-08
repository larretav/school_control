import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface LayoutState {
  sidebarOpen: boolean
}

// Define the initial state using that type
const initialState: LayoutState = {
  sidebarOpen: false,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {

    setSidebarOpen: (state, action:PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },

    layoutReset: () => initialState
  },
})

export const {
  setSidebarOpen,

  layoutReset
} = layoutSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSidebarOpen = (state: RootState) => state.layout.sidebarOpen;

export default layoutSlice.reducer