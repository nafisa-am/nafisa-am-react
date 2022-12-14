import React, { useState } from "react";

// Importing helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Creates a state variable for the fields in the form
  
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input 
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state for  email/username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (refreshing the page)
    e.preventDefault();

    // Email validator
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
     
      return;
      // If email not valid this throws an error
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

   
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="get-in-touch" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Get In Touch</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3> {userName}</h3>

          <p>Want to get in touch?</p>
          <address>
            Birmingham UK
             <br />
            Tel: <a href="tel:079.615.41152">079 615 41152</a>
            <br />
            @ : {" "}
            <a href="mailto://nafisa.am91@gmail.com">
               nafisa.am91@gmail.com
            </a>
            
          </address>
          <p>
            <strong>Please leave your feedback here</strong>
          </p>
        </div>

        {/* contact form section  */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}
            <label for="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
