import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isAuth: false,
    loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuth = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload; 
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveUser, removeUser, setLoading} = userSlice.actions

export default userSlice.reducer