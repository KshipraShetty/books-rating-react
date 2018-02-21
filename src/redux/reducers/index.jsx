const defaultState = {
  savedBooks: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, savedBooks: action.payload };
    default: return state;
  }
};

export default reducer;
