import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../../JS/actions/user";
import ContactList from "../ContactForm/ContactList";
import AddProduct from "../AddProduct";
import "./Profil.css";
import ImgProfil from "../../amy.jpg";
import ContactCard from "../ContactForm/ContactC";

const Profil = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser());
    }, []);
    const user = useSelector((state) => state.userReducer.user);
    // const dispatch = useDispatch();
    return (
        <div className="Profil">
            <div className="ProfilContainer">
                <img className="ImgProfil" src={ImgProfil} />
                <div className="ProfilContainerLeft">
                    <h1 className="ProfilTitle">{user.name}</h1>
                    <p className="ProfilText">{user.email}</p>
                    <p className="ProfilButton">Edit</p>
                </div>
            </div>
        </div>
    );
};

export default Profil;
