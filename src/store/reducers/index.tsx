import { EnthusiasmAction,INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM,USER_INFO } from '../actions/index';
import { Test } from '../types/index';

export function enthusiasm(state: Test, action: EnthusiasmAction): Test {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, number: state.number + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, number: Math.max(1, state.number - 1) };
    case USER_INFO:
      return { ...state, userInfo: action.userInfo };
  }
  return state;
}
