import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../JS/actions/contact";
import "./Contact.css";

function Contact() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(true);
    const [submit, setSubmit] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        (contact.email && contact.subject && contact.message && contact.name) ===
        ""
            ? setStatus(false)
            : setStatus(true);
    };
    const handleConfirm = (e) => {
        e.preventDefault();
        handleSubmit();
        setSubmit(true);
        dispatch(addContact(contact));
        setContact({ ...contact, [e.target.name]: "" });
    };
    return (
        <section className="contact-section" id="contact">
            <div className="contact-heading">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
            </div>
            <form>
                <div className="form-group1">
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            required
                            onChange={handleChange}
                            name="name"
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            placeholder="First Name"
                            type="text"
                            required
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                </div>
                <div className="form-group2">
                    <div>
                        <label>Subject</label>
                        <input
                            className="subject-input"
                            type="text"
                            required
                            onChange={handleChange}
                            name="subject"
                        />
                    </div>
                </div>
                <div className="form-group3">
                    <div>
                        <label>Message</label>
                        <textarea
                            onChange={handleChange}
                            name="message"
                            placeholder="Message"
                            required
                        ></textarea>
                    </div>
                    {submit && (
                        <h1
                            className="about-heading"
                            style={{ color: status ? "green" : "red" }}
                        >
                            {status ? "Succes" : "Input Reqquired"}
                        </h1>
                    )}
                </div>

                <button
                    onClick={handleConfirm}
                    className="btn-submit"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;
