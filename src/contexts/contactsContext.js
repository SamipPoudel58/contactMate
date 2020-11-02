import React, { createContext, useReducer } from "react";
import { contactReducer } from "../reducers/contactReducer";

export const ContactContext = createContext();

const ContactContextProvider = (props) => {
  const [contacts, dispatch] = useReducer(contactReducer, [
    {
      name: "Samip Poudel",
      email: "samip@gmail.com",
      phone: "987654321",
      type: "Personal",
      id: 9999,
    },
    {
      name: "Michael",
      email: "mike@gmail.com",
      phone: "9999999",
      type: "Professional",
      id: 9979,
    },
  ]);

  return (
    <ContactContext.Provider value={{ contacts, dispatch }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
