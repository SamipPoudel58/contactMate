// import { v4 as uuidv4 } from "uuid";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER":
      return action.word;

    default:
      return state;
  }
};
