import React, { useState } from "react";

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form className="contact-box" onSubmit={handleSubmit}>
            <div>
                <p id="contact-paragraph">Have a question / want to participate?</p>
                <br></br>
                <br></br>
                <p id="contact-detail-paragraph">I'm always interested in photographing different people. Be in touch and let's figure it out!</p>
                <label className="formLabel" htmlFor="name" >Name</label>
                <input className="nameInput"type="text" id="name" required ></input>
            </div>
            <div>
                <label className="formLabel"htmlFor="name" >Email</label>
                <input className="nameInput"type="email" id="email" required ></input>
            </div>
            <div>
                <label className="formLabel"htmlFor="name" >Message</label>
                <textarea id="message" required></textarea>
            </div>
            <button className="submit-button" type="submit">{status}</button>
        </form>
    );
};

export default ContactForm;