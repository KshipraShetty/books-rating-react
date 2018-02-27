const defaultState = {
  savedBooks: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, savedBooks: action.payload };
    case 'TOGGLE_LIKE': {
      const newState = {};

      Object.keys(state.savedBooks).forEach((author) => {
        const booksByAuthor = [];

        if (action.payload.author === author) {
          state.savedBooks[author].forEach((book) => {
            if (book.bookID === action.payload.bookID) {
              booksByAuthor.push({
                ...book,
                like: action.payload.like,
              });
            }
            if (book.bookID !== action.payload.bookID) { booksByAuthor.push(book); }
          });
        } else {
          state.savedBooks[author].forEach((book) => {
            booksByAuthor.push({
              ...book,
            });
          });
        }

        newState[author] = booksByAuthor;
      });
      // console.log(newState);
      return { ...state, savedBooks: newState };
    }

    default: return state;
  }
};

export default reducer;
