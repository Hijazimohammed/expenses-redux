import { configureStore } from '@reduxjs/toolkit';
import { expenseSliceReducer } from './slices/expense-slice';

const appReduxStore = configureStore({
  reducer: expenseSliceReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

export default appReduxStore;
