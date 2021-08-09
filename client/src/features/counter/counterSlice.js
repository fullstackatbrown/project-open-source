import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'counter',
  initialState: {
    authenticated: false,
    isAdmin: false
  },
  reducers: {
    authenticate: (state, action) => {
        if (action.payload) {
            state.authenticated = true;
        } else {
            state.authenticated = false;
        }
    },
    logout: (state) => {
        state.authenticated = false;
        state.isAdmin = false;
    },
    selected: (state, action) => {
      console.log(action.payload)
    },
    admin: (state, action) => {
      state.isAdmin = action.payload;
    }
  },
})

export const { authenticate, logout, admin } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default slice.reducer;