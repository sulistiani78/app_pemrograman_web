// slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loginSlices = createSlice({
    name: 'login',
    initialState: {
        username: "",
        isLogin: false,
    },
    reducers: {
        login: state => {
            console.log("dispatch berhasil");
            state.username = "Admin";
            state.isLogin = true;
        },
    },
});

export const { login } = loginSlices.actions;
export default loginSlices.reducer;