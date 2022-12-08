import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    users: [],
    error: null,
    loading: false,
    token: localStorage.getItem('token'),
    id: localStorage.getItem("id")
}
export const fetchUsers = createAsyncThunk('users/get', async (data, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3110/users')

        const users = await res.json()
        return thunkAPI.fulfillWithValue(users)


    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)

    }
})

export const SignUp = createAsyncThunk('users/add', async (data, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3110/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ login: data.login, password: data.password })
        })
        const user = await res.json()

        thunkAPI.fulfillWithValue(user)

    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})
export const SignIn = createAsyncThunk("login/getToken", async (data, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3110/login", {
            method: 'POST',
            body: JSON.stringify({ login: data.login, password: data.password }),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const {token, id} = await res.json()

        localStorage.setItem('token', token)
        localStorage.setItem("id", id)

    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, actio) => {
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(SignUp.fulfilled, (state, action) => {
            })
    }
}
)

export default userSlice.reducer