import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function ContactModal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !message || !phone || !firstName || !lastName) {
      return toast.error("Please fill out all form boxes.");
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
        firstName,
        lastName,
        phone,
        message,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  return (
    <div className={showHideClassName}>
      <ToastContainer position="top-center" limit={1} />
      <section className="modal-main">
        {children}
        <div className="contact-form">
          <Form onSubmit={submitHandler}>
            <Form.Control
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your name.."
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name.."
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control
              type="text"
              id="email"
              placeholder="Your email.."
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              type="tel"
              id="phone"
              required
              pattern="\d{3}[\-]\d{3}[\-]\d{4}"
              placeholder="000-000-0000"
              onChange={(e) => setPhone(e.target.value)}
            />
            <InputGroup>
              <InputGroup.Text>Enter your Message</InputGroup.Text>
              <Form.Control
                id="message"
                as="textarea"
                aria-label="With textarea"
                onChange={(e) => setMessage(e.target.value)}
              />
            </InputGroup>
          </Form>

          <Button variant="success" type="submit">
            <span className="visually-hidden">Sending...</span>
            Submit
          </Button>
          <Button variant="danger" type="button" onClick={handleClose}>
            Close
          </Button>
        </div>
      </section>
    </div>
  );
}
