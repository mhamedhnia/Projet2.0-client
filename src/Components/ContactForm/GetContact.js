/* eslint-disable no-alert */
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../JS/actions/contact';
import './Contact.css';
const GetContact = ({ contact: { id, name, subject, email, message } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const result = window.confirm('are you sure to delete that?');
    if (result) {
      dispatch(deleteContact(id));
    }
  };
  return (
    <div className="table-row">
      <th className="contacts-header">{name}</th>
      <th className="contacts-subject">{subject}</th>
      <th className="contacts-email">{email}</th>
      <th className="contacts-msg">{message}</th>
      <th onClick={() => handleClick()} className="contacts-msg">
        x
      </th>
    </div>
  );
};
export default GetContact;
