import React, { useRef } from "react";
import { useState, useHistory } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [forme, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...forme,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_5t5pkom",
        "template_gpiyyjr",
        form.current,
        "qbFbZxKnJe3gn9Jlm"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            user_name: "",
            user_email: "",
            message: "",
          });
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          alert("Ahh, something went wrong. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Send your FeedBack and Query Related App</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb3">
          <label htmlFor="name" className="formlabel">
            Enter your name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="user_name"
            value={forme.user_name}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb3">
          <label htmlFor="email" className="formlabel">
            Email address
          </label>
          <input
            className="input"
            type="email"
            name="user_email"
            value={forme.user_email}
            onChange={handleChange}
            id="email"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb3">
          <label className="formlabel" htmlFor="desc">
            Elaborate your concern/Want to connect us Drop your Email
          </label>
          <textarea
            className="input"
            value={forme.message}
            onChange={handleChange}
            name="message"
            id="desc"
          />
        </div>
        <button type="submit" value="send" className="btn">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
