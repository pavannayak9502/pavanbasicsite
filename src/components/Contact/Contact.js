import React from "react";
import "../Contact/Contact.css";

let Contact=()=>{

    return(
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form>
                <label>Name: </label>
                <input type="text" id="name" required/>

                <label>Email: </label>
                <input type="email" id="email" required/>

                <label>Message: </label>
                <textarea id="message" placeholder="Feedback..." required/>

                <button type="submit">Send</button>
            </form>
        </section>
    );

};

export default Contact;