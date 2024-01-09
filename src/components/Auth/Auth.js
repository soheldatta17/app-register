import { auth, provider } from "../../firebase-config.js";
import { signInWithPopup, signOut } from "firebase/auth";
// import "./auth.css";
import Cookies from "universal-cookie";
import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';

const cookies = new Cookies();

const Auth = ({ setIsAuth, setEmail, setIcon }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);


  const openModal = (sectionIndex) => {
    setSelectedSection(sectionIndex);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedSection(null);
  };

  const authenticate_check = async () => {
    try {
      await signOut(auth)
      setEmail("")
      cookies.remove("auth-token");
      setIsAuth(false)
      alert("Successfully Logged Out")
    }
    catch (err) {
      console.error(err);
    }
  }


  const authenticate = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set('auth-token', JSON.stringify({ refreshToken: result.user.refreshToken, photoURL: auth?.currentUser?.photoURL, userName: auth?.currentUser?.displayName }), { sameSite: 'None', secure: true });

      // alert(auth?.currentUser?.photoURL)
      setIcon(auth?.currentUser?.photoURL)
      setEmail(auth?.currentUser?.email)
      setIsAuth(true);
      alert("Sucessfully Signed In")
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="start">
      <h1>Welcome to Foodies</h1>
      <br />
      <div className='para'>
        <p>Let's chat is a real-time chat application created with React JS and Firebase.</p>
        <img src="https://static.thenounproject.com/png/2897100-200.png" alt="Description" className="authimage" />
        <br />
        <button onClick={authenticate}> Sign In With Google </button><br /><br />
        {/* <button onClick={authenticate_check}> Log Out </button><br />
        <button onClick={() => {
          alert(auth?.currentUser?.email)
        }}> Check </button><br /> */}
        <br />
        
      </div>
      <br />

    </div>
  );
};

export default Auth;
