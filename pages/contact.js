
import Navbar from '../components/Navbar';
import React, { useEffect, useState } from "react";
import { Html, Head, Main, NextScript } from 'next/document'
import styles from '../styles/Home.module.css';


function contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    alert(JSON.stringify(data, null, 4));
    console.log(data);
    
  };


return (

      <div className="text-center p-10">
         <Navbar></Navbar>
        
      <h1 className="font-bold text-2xl my-4 ">Contact us</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input className={styles.input}
              id="name"
              type="text"
              onChange={e => setName(e.target.value)}
            /><br></br>
            <label  className={styles.label} htmlFor="email">Email:</label>
            <input className={styles.input}
              id="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            /><br></br>
            <label htmlFor="message" className={styles.label} >Message:</label>
            <textarea
              className={styles.input}
              id="message"
              type="text"
              rows="4"
              onChange={e => setMessage(e.target.value)}
            /><br></br>
            <button type="submit" className={styles.btn}>Send</button>
        </form>
    </div>
   
  );
}

export default contact;