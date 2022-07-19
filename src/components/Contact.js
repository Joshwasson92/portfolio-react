import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Contact;
