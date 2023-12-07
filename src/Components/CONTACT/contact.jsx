import "./contact.css";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h3 className="contact-title">Contact</h3>
          <span className="contact-divider" />
        </div>
        <p data-aos="fade-up" className="works-description">
          You can text me.
        </p>

        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-text">
              <h1>You Need</h1>
              <h3>Beautiful design for your website leave a request</h3>
            </div>
          </div>
          <div className="contact-center">
            <BsArrowRight />
          </div>
          <div className="contact-right">
            <form className="contact-form">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your name"
              />
              <textarea
                className="textarea"
                placeholder="Write your message"
                name="message"
              />
              <button className="submit-btn" type="submit">
                <span>Send</span>
                <RiSendPlaneFill />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
