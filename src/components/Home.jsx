import React from "react";
import ContactForm from "./ContactForm";
import RightGrid from "./RightGrid";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <ContactForm />
        <RightGrid />
      </div>
    </div>
  );
};

export default Home;
