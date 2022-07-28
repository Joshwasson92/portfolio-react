import React, { useState } from "react";
import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import "./Contact.css";

const ContactModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="contact-form">
          <Form>
            <Form.Control
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <Form.Control
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <Form.Control
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
            />
            <Form.Control
              type="tel"
              id="phone"
              required
              pattern="\d{3}[\-]\d{3}[\-]\d{4}"
              placeholder="000-000-0000"
            />
            <InputGroup>
              <InputGroup.Text>Enter your Message</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Form>
          <Button variant="success" type="submit">
            {/* <Spinner
              as="span"
              animation="border"
              size="small"
              role="status"
              aria-hidden="true"
            /> */}
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
};

export default ContactModal;
