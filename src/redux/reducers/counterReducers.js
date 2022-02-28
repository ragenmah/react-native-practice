import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../constants/counterConstants';

const initialState = {countValue: 10};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        countValue: state.countValue + 1,
      };
    case DECREMENT_COUNTER:
      return {
        countValue: state.countValue - 1,
      };
    default:
      return state;
  }
};
