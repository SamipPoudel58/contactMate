import React, { useContext } from "react";
import { ContactContext } from "../contexts/contactsContext";
import { FilterContext } from "../contexts/filterContext";

const Contacts = () => {
  const { contacts, dispatch } = useContext(ContactContext);
  const { filterWord } = useContext(FilterContext);
  const filterContacts =
    filterWord === ""
      ? null
      : contacts.filter((contact) => {
          return contact.name.toLowerCase().includes(filterWord.toLowerCase());
        });

  const finalContacts = filterContacts !== null ? filterContacts : contacts;

  // useEffect(() => {
  //   console.log(contacts);
  // });

  const handleDelete = (id, e) => {
    dispatch({ type: "DELETE_CONTACT", id: id });
    // e.className = "deletedContact";
  };

  const handleEdit = (id) => {
    return;
  };

  return (
    <div className="contacts">
      {finalContacts.length ? (
        finalContacts.map((contact) => (
          <div key={contact.id} className={`contact ${contact.type}`}>
            <h3 className="name">{contact.name}</h3>
            <span className="contactType">{contact.type}</span>
            <p>
              <i className="fas fa-envelope"></i> {contact.email}
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> {contact.phone}
            </p>

            <div className="buttons">
              <button
                onClick={() => {
                  handleEdit(contact.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  handleDelete(contact.id, e);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="disclaimer">Please Add Contacts</p>
      )}
    </div>
  );
};

export default Contacts;
