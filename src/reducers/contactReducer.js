import { v4 as uuidv4 } from "uuid";

export const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...state,
        {
          name: action.contact.name,
          email: action.contact.email,
          phone: action.contact.phone,
          type: action.contact.type,

          id: uuidv4(),
        },
      ];
    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== action.id);
    default:
      return state;
  }
};
