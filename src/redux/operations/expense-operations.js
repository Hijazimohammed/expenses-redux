import { expenseSliceActions } from '../slices/expense-slice';

export const fetchExpenses = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        'https://react-expenses-app-9e601-default-rtdb.firebaseio.com/expenses.json'
      );
      if (!res.ok) {
        throw new Error("Could't fetch data");
      }
      const data = res.json();
      return data;
    };
    try {
      const result = await fetchData();
      const expenses = [];
      for (const key in result) {
        const expense = result[key];
        expense.id = key;
        expenses.push(expense);
      }
      dispatch(expenseSliceActions.refreshExpenses(expenses));
    } catch (error) {}
  };
};
export const storeExpense = (exp) => {
  return async (dispatch) => {
    const createExpense = async () => {
      const res = await fetch(
        'https://react-expenses-app-9e601-default-rtdb.firebaseio.com/expenses.json',
        { method: 'POST', body: JSON.stringify(exp) }
      );
      if (!res.ok) {
        throw new Error("Could't save data");
      }
      const data = res.json();
      return data;
    };
    try {
      const result = await createExpense();
      exp.id = result.name;
      dispatch(expenseSliceActions.createExpense(exp));
    } catch (error) {}
  };
};

export const deleteExpense = (id) => {
  return async (dispatch) => {
    const createExpense = async () => {
      const res = await fetch(
        `https://react-expenses-app-9e601-default-rtdb.firebaseio.com/expenses/${id}.json`,
        { method: 'DELETE' }
      );
      if (!res.ok) {
        throw new Error("Could't delete data");
      }
    };
    try {
      await createExpense();
      dispatch(expenseSliceActions.deleteExpense(id));
    } catch (error) {}
  };
};
