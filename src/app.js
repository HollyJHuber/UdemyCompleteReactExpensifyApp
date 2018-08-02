import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import { sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 8500, createdAt: 0}));
store.dispatch(addExpense({ description: 'Electric bill', amount: 19000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'AMEX card', amount: 25700, createdAt: 2000 }));
store.dispatch(addExpense({ description: "Meijer Card", amount: 30000, createdAt: 1 }))
//store.dispatch(sortByAmount());
// store.dispatch(setTextFilter('bill'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('card'));
// }, 3000);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
