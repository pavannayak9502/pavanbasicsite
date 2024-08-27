import React from "react";
import { useState } from "react";
import "../../Examples/Contact/Contact.css";

let Contact=()=>{
    let[Name, setName]=useState("");
    let[Email, setEmail]=useState("");
    let[feedback, setFeedback]=useState("");

    let handleSubmit=(data)=>{
        data.preventDefault();
        alert(`Details Sent \n\nName: ${Name}\nEmail: ${Email}\nFeedback: ${feedback}`);
    }
    return(
        <section id="contact" className="contact">
            <h3>Contact Me</h3>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" id="name" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name" required/>

                <label>Email: </label>
                <input type="email" id="email" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Ex: demo123@gmail.com" required/>
            
                <label>Feedback : </label>
                <textarea id="Feedback" value={feedback} onChange={(e)=>setFeedback(e.target.value)} placeholder="Your opion on my website!" required></textarea>
            
                <button type="submit">Send</button>
            </form>
        </section>
    );
};
export default Contact;