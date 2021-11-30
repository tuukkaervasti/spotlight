import React from "react";
import ContactForm from "../components/ContactForm";



const Contact = () => {
    return (
        
        <div 
            style={{
                display: "flex",
                justifyContent: "Center",
                alignItems: "Center",
                height: "20vh"
            }}>
            <h1>Send me a message!</h1>
            <ContactForm />
            </div>
           
            
            
    );
};

export default Contact;