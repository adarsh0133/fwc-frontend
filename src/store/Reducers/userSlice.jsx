import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // Set loading state
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveUser, removeUser, setLoading} = userSlice.actions

export default userSlice.reducer