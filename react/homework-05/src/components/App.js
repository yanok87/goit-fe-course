/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenceForm';
import ExpensesTable from './ExpencesTable';
import Values from './Values';
import * as budgetSelectors from '../redux/Budget/budgetSelectors';
import * as budgetActions from '../redux/Budget/budgetAction';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({
  budget,
  expenses,
  balance,
  expensesLength,
  totalExpenses,
  saveBudget,
  addExpense,
  removeExpense,
}) => {
  return (
    <Container>
      <BudgetForm onSave={saveBudget} />
      <Values budget={budget} expenses={totalExpenses} balance={balance} />
      <ExpenseForm onSave={addExpense} />
      {expensesLength > 0 && (
        <ExpensesTable items={expenses} onRemove={removeExpense} />
      )}
    </Container>
  );
};

const MSTP = store => ({
  budget: budgetSelectors.getBudget(store),
  expenses: budgetSelectors.getExpenses(store),
  totalExpenses: budgetSelectors.totalExpenses(store),
  balance: budgetSelectors.getBalance(store),
  expensesLength: budgetSelectors.getExpensesLength(store),
});

const MDTP = dispatch => ({
  saveBudget: budget => dispatch(budgetActions.saveBudget(budget)),
  addExpense: obj => dispatch(budgetActions.addExpense(obj)),
  removeExpense: id => dispatch(budgetActions.removeExpense(id)),
});

export default connect(
  MSTP,
  MDTP,
)(App);
