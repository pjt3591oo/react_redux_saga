const initialState = 0

const INCREMENT = "COUNTER/INCREMENT"
const DECREMENT = "COUNTER/DECREMENT"

export const ASYNC_INCREMENT_REQUEST = "COUNTER/ASYNC_INCREMENT_REQUEST"
export const ASYNC_DECREMENT_REQUEST = "COUNTER/ASYNC_DECREMENT_REQUEST"
export const ASYNC_INCREMENT_SUCCESS = "COUNTER/ASYNC_INCREMENT_SUCCESS"
export const ASYNC_DECREMENT_SUCCESS = "COUNTER/ASYNC_DECREMENT_SUCCESS"
export const ASYNC_INCREMENT_FAIL = "COUNTER/ASYNC_INCREMENT_FAIL"
export const ASYNC_DECREMENT_FAIL = "COUNTER/ASYNC_DECREMENT_FAIL"

export const onIncrement = () => dispatch => {
  dispatch({
    type: INCREMENT
  })
}

export const onDecrement = () => dispatch => {
  dispatch({
    type: DECREMENT
  })
}

export const counter = function(state = initialState, action) {
  switch (action.type) {

    case INCREMENT:
      return state + 1
    
    case DECREMENT:
      return state - 1

    case ASYNC_INCREMENT_SUCCESS:
      return state + 1
    
    case ASYNC_DECREMENT_SUCCESS:
      return state - 1

    default:
      return state;
  }
};
