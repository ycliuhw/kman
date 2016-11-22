export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    if (!action) {
      return state;
    }
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}
