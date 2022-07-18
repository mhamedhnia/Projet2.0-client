/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-alert */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import amy from '../../amy.jpg';
import { deleteContact } from '../../JS/actions/contact';
const ContactC = ({ contact: { _id: id, name, subject } }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    const result = window.confirm('are you sure to delete that?');
    if (result) {
      dispatch(deleteContact(id));
    }
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="contact-card" onClick={handleShow}>
      <div className="contacts">
        <div className="contact">
          <img className="img-contact" src={amy} alt="contact" />
          <div className="contact-details">
            <h2 className="contact-name">{name}</h2>
            <p className="contact-subject">{subject}</p>
            <button onClick={handleClick} className="" type="submit">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactC;
