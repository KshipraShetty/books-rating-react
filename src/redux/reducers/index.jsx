const defaultState = {
  savedBooks: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD': {
      const newSaved = {};
      Object.keys(action.payload).sort().forEach((key) => {
        newSaved[key] = action.payload;
      });
      console.log(newSaved);
      Object.keys(newSaved).forEach((bookAuthor) => {
        newSaved[bookAuthor] = action.payload[bookAuthor].sort((a, b) =>
          a.bookID - b.bookID);
      });
      console.log(newSaved);
      return { ...state, savedBooks: newSaved }; }
    case 'TOGGLE_LIKE': {
      const newState = {};
      const newSaved = {};

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
        Object.keys(newState).sort().forEach((key) => {
          newSaved[key] = newState[key];
        });
        Object.keys(newSaved).forEach((bookAuthor) => {
          newSaved[bookAuthor] = newSaved[bookAuthor].sort((a, b) =>
            a.bookID - b.bookID);
        });
      });
      // console.log(newState);
      return { ...state, savedBooks: newSaved };
    }

    default: return state;
  }
};

export default reducer;
