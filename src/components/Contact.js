import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function ContactModal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !message || !phone || !name) {
      return toast.error("Please fill out all form boxes.");
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
        name,
        phone,
        message,
      });
      setLoading(false);
      toast.success(data.message);
      handleClose();
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
    <div>
      <ToastContainer position="top-center" limit={1} />

      <div className={showHideClassName}>
        <section data-aos="fade-up" className="modal-main">
          {children}
          <div className="contact-form">
            <Form>
              <Form.Control
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your name.."
                onChange={(e) => setName(e.target.value)}
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

            <Button
              disabled={loading}
              variant="success"
              onClick={submitHandler}
              type="submit"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
            <Button variant="danger" type="button" onClick={handleClose}>
              Close
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
