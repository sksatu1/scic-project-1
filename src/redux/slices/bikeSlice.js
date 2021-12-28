import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'


// First, create the thunk------------------------------------
export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async () => {
        const response = await fetch('http://localhost:5000/books').then(res => res.json())
        return response;
    }
)

export const fetchSingleBook = createAsyncThunk(
    'singleBook/fetchSingleBook',
    async (id) => {
        const response = await fetch(`http://localhost:5000/books/${id}`).then(res => res.json())
        console.log(response);
        return response;
    }
)

export const bikeSlice = createSlice({
    name: 'bikes',
    initialState: {
        allCollections: [],
        selectedBook: [],
        myOrders: [],
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            // Add user to the state array
            state.allCollections = action.payload;
        })
        builder.addCase(fetchSingleBook.fulfilled, (state, action) => {
            // Add user to the state array
            state.selectedBook = action.payload;
        })

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = bikeSlice.actions;

export default bikeSlice.reducer;