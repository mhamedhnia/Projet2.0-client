import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../../JS/actions/contact";
import GetContact from "./GetContact";
import { useState } from "react";

const ContactList = () => {
    const contacts = useSelector((state) => state.contactReducer.contact);
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    });
    const filtredContacts = contacts.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.subject.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "34px 40px",
            }}
        >
            <div className="header">
                <h3 className="about-heading" style={{ margin: 10 }}>
                    Contact Search
                </h3>
                <input
                    style={{ margin: 10 }}
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <table className="table">
                <tr className="table-header">
                    <th className="contact-head">Name</th>
                    <th className="contact-head">Subject</th>
                    <th className="contact-head">Email</th>
                    <th className="contact-head">Message</th>
                    <th className="contact-head">Delete</th>
                </tr>
                <tr>
                    {filtredContacts.map((contact) => (
                        <GetContact contact={contact} />
                    ))}
                </tr>
            </table>
        </div>
    );
};
export default ContactList;
