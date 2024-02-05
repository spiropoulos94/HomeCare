// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCocktails } from 'services/cocktailService';

// initial state
const initialState = {
  cocktails: [],
  loading: 'idle'
};

export const fetchCocktails = createAsyncThunk('cocktails/fetchCocktails', async () => {
  const response = await getCocktails();
  return response;
});

// ==============================|| SLICE - cocktails ||============================== //

const cocktails = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched cocktails to the array
        state.cocktails = state.cocktails.concat(action.payload);
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectAllCocktails = (state) => state.cocktails.cocktails;
export const getCocktailsError = (state) => state.cocktails.error;
export const getCocktailsStatus = (state) => state.cocktails.status;

export default cocktails.reducer;

// export const { activeItem } = cocktails.actions;
