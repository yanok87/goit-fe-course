import { Type } from './budgetAction';

export const budgetReducer = (prevState = 0, action) => {
  switch (action.type) {
    case Type.SAVE_BUDGET:
      return action.payload.budget;

    default:
      return prevState;
  }
};

export const expensesReducer = (prevState = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_EXPENSE:
      return [...prevState, payload.expenseObject];

    case Type.REMOVE_EXPENSE:
      return prevState.filter(el => el.id !== payload.id);

    default:
      return prevState;
  }
};
