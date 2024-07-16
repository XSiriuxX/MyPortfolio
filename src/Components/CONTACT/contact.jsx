import "./contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import imagen from "../../Extras/foto.png";

const Contact = () => {
  const form = useRef();
  const [boton, setBoton] = useState("Send Mail");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBoton("Sending...");

    emailjs
      .sendForm(
        "default_service",
        "template_39wlour",
        form.current,
        "HbCdo5vgMxB0clZAd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setBoton("Send Mail");
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setBoton("Send Mail");
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h3 className="contact-title">Contact</h3>
          <span className="contact-divider" />
        </div>

        <div className="contact2">
          <section className="left2">
            <div className="image">
              <img data-aos="fade-up" alt="me" src={imagen} />
            </div>
          </section>

          <section data-aos="fade-up" className="contact-content">
            <h1>You Need</h1>
            <h3>Beautiful design for your website leave a request</h3>

            <div className="contact-right">
              <form
                className="contact-form"
                ref={form}
                onSubmit={handleFormSubmit}
              >
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@email.com"
                  required
                />
                <textarea
                  className="textarea"
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  required
                />
                <button className="submit-btn" id="button" type="submit">
                  <span>{boton}</span>
                  <RiSendPlaneFill />
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
