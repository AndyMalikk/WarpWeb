import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
