import React, { useState, useContext } from "react";
import { ContactContext } from "../contexts/contactsContext";

const ContactForm = () => {
  //   console.log(useContext(ContactContext));
  const { dispatch } = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Personal",
  });

  const { name, email, phone, type } = contact;

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", contact: contact });
  };
  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <h2 className="title">Add Contacts</h2>
      <input
        required
        name="name"
        value={name}
        type="text"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        required
        name="email"
        value={email}
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        required
        name="phone"
        value={phone}
        type="text"
        placeholder="Phone Number"
        onChange={handleChange}
      />
      <div id="typeContainer">
        <h4>Contact Type</h4>
        <div className="form__radio-group">
          <input
            className="form__radio-input"
            id="Personal"
            value="Personal"
            type="radio"
            name="type"
            checked={type === "Personal"}
            onChange={handleChange}
          />
          <label for="Personal" class="form__radio-label">
            <span class="form__radio-button radio_personal"></span>
            Personal
          </label>
        </div>

        <div className="form__radio-group">
          <input
            id="Professional"
            className="form__radio-input"
            value="Professional"
            type="radio"
            name="type"
            checked={type === "Professional"}
            onChange={handleChange}
          />
          <label for="Professional" class="form__radio-label">
            <span class="form__radio-button radio_professional"></span>
            Professional
          </label>
        </div>
      </div>
      <input type="submit" value="Add Contact" />
    </form>
  );
};

export default ContactForm;
