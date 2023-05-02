import { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import validator from 'validator';

import { addContact } from '../../JS/actions/contact';

import './Contact.css';

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [IsFirstnameValid, setIsFirstnameValid] = useState(false);
  const [FirstnameError, setFirstnameError] = useState('');
  const [FirstnameTouched, setFirstnameTouched] = useState(false);
  const [IsMailValid, setIsMailValid] = useState(false);
  const [MailTouched, setMailTouched] = useState(false);
  const [IsSubjectValid, setIsSubjectValid] = useState(false);
  const [SubjectError, setSubjectError] = useState('');
  const [SubjectTouched, setSubjectTouched] = useState(false);
  const [IsMessageValid, setIsMessageValid] = useState(false);
  const [MessageError, setMessageError] = useState('');
  const [MessageTouched, setMessageTouched] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!IsMailValid || !IsFirstnameValid || !IsSubjectValid || !IsMessageValid) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    handleSubmit();
    setSubmit(true);
    dispatch(addContact(contact));
    setContact({ ...contact, [e.target.name]: '' });
  };
  const handleFirstname = (e) => {
    if (e.target.value.length < 3) {
      setIsFirstnameValid(false);
      setFirstnameError('Firstname must be at least 3 letters');
    } else if (/[0-9]/.test(e.target.value) || /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(e.target.value)) {
      setIsFirstnameValid(false);
      setFirstnameError('Firstname must not contain symbols or numbers');
    } else {
      setIsFirstnameValid(true);
      setContact({ ...contact, [contact.name]: e.target.value });
    }
  };
  const validateEmail = (e) => {
    if (validator.isEmail(e.target.value)) {
      setIsMailValid(true);
      setContact({ ...contact, [contact.email]: e.target.value });
    } else {
      setIsMailValid(false);
    }
  };
  const handleSubject = (e) => {
    if (e.target.value.length < 6) {
      setIsSubjectValid(false);
      setSubjectError('Subject must be at least 6 letters');
    } else if (/[0-9]/.test(e.target.value) || /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(e.target.value)) {
      setIsSubjectValid(false);
      setSubjectError('Subject must not contain symbols or numbers');
    } else {
      setIsSubjectValid(true);
      setContact({ ...contact, [contact.subject]: e.target.value });
    }
  };
  const handleMessage = (e) => {
    if (e.target.value.length < 6) {
      setIsMessageValid(false);
      setMessageError('Message must be at least 6 letters');
    } else if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(e.target.value)) {
      setIsMessageValid(false);
      setMessageError('Message must not contain symbols');
    } else {
      setIsMessageValid(true);
      setContact({ ...contact, [contact.message]: e.target.value });
    }
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
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
              onChange={handleFirstname}
              onBlur={() => setFirstnameTouched(true)}
              name="name"
            />
            {FirstnameTouched && (
              <h1 className="about-heading" style={{ color: IsFirstnameValid ? 'green' : 'red' }}>
                {IsFirstnameValid ? '✅' : FirstnameError}
              </h1>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              placeholder="Email"
              type="text"
              required
              onChange={validateEmail}
              onBlur={() => setMailTouched(true)}
              name="email"
            />
            {MailTouched && (
              <h1 className="about-heading" style={{ color: IsMailValid ? 'green' : 'red' }}>
                {IsMailValid ? '✅' : 'Mail not valid'}
              </h1>
            )}
          </div>
        </div>
        <div className="form-group2">
          <div>
            <label>Subject</label>
            <input
              className="subject-input"
              placeholder="Subject"
              type="text"
              required
              onChange={handleSubject}
              onBlur={() => setSubjectTouched(true)}
              name="subject"
            />
            {SubjectTouched && (
              <h1 className="about-heading" style={{ color: IsSubjectValid ? 'green' : 'red' }}>
                {IsSubjectValid ? '✅' : SubjectError}
              </h1>
            )}
          </div>
        </div>
        <div className="form-group3">
          <div>
            <label>Message</label>
            <textarea
              onChange={handleMessage}
              name="message"
              placeholder="Message"
              required
              onBlur={() => setMessageTouched(true)}
            />
            {MessageTouched && (
              <h1 className="about-heading" style={{ color: IsMessageValid ? 'green' : 'red' }}>
                {IsMessageValid ? '✅' : MessageError}
              </h1>
            )}
          </div>
          {submit && (
            <h1 className="about-heading" style={{ color: status ? 'green' : 'red' }}>
              {status ? 'Succes' : 'Input Required'}
            </h1>
          )}
        </div>

        <button onClick={handleConfirm} className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
