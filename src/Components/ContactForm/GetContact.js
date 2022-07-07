import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../JS/actions/contact";
import "./Contact.css";
export default function GetContact({ contact }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        let result = window.confirm("are you sure to delete that?");
        if (result) {
            dispatch(deleteContact(contact._id));
        }
    };
    return (
        <>
            <div className="table-row">
                <th className="contacts-header">{contact.name}</th>
                <th className="contacts-subject">{contact.subject}</th>
                <th className="contacts-email">{contact.email}</th>
                <th className="contacts-msg">{contact.message}</th>
                <th onClick={() => handleClick()} className="contacts-msg">
                    x
                </th>
            </div>
        </>
    );
}
