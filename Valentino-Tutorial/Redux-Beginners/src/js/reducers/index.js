import { ADD_ARTICLE } from "../constants/action-types";

// src/js/reducers/index.js

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      // state.articles.push(action.payload); # BAD!, MUTABLE
      // return state;

      // return { ...state, articles: state.articles.concat(action.payload) } # Keep inital array immutable
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;