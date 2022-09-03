import { createSlice } from '@reduxjs/toolkit';

const initialState = { expenses: [] };
const expenseSlice = createSlice({
  name: 'expenses-slice',
  initialState: initialState,
  reducers: {
    refreshExpenses(state, action) {
      state.expenses = action.payload;
    },
    createExpense(state, action) {
      state.expenses = [action.payload, ...state.expenses];
    },
    deleteExpense(state, action) {
      state.expenses = state.expenses.filter(
        (exp) => exp.id !== action.payload
      );
    },
  },
});

export const expenseSliceReducer = expenseSlice.reducer;
export const expenseSliceActions = expenseSlice.actions;
