import React, { useState } from "react";
import amy from "../../amy.jpg";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../JS/actions/contact";
function ContactC({ contact }) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClick = () => {
        let result = window.confirm("are you sure to delete that?");
        if (result) {
            dispatch(deleteContact(contact._id));
        }
    };
    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <>
            <div className="contact-card" onClick={handleShow}>
                <div className="contacts">
                    <div className="contact">
                        <img className="img-contact" src={amy} alt="contact" />
                        <div className="contact-details">
                            <h2 className="contact-name">{contact.name}</h2>
                            <p className="contact-subject">{contact.subject}</p>
                            <button onClick={handleClick} className="">
                                x
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactC;
