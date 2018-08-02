import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Expenses Actions
const addExpense = (
  {
    description = '', 
    note = '',
    amount = 0, 
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description, 
    note,
    amount, 
    createdAt
  }
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// Filter Actions
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) =>  id !== action.id);
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.endDate
    }
    default: 
      return state;
  }
};
// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// Display State
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// Do Action, passing an object
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 50000, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'AMEX', amount: 500, createdAt: 1000}));
const expenseThree = store.dispatch(addExpense({ description: 'water', amount: 2500, createdAt: 100}));
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5000, note: 'new Note', description: 'July AMEX'}));
 //store.dispatch(setTextFilter('amex'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate());
 //store.dispatch(setEndDate(1001));
