// A simple express server with Nodemailer to enable user emails from the front-end via React custom component


// setup variables

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;

const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require("path");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))
app.use("/", router);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})
app.listen(port, () => console.log("Server running!"));


// define email service
const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.ADMIN_PASSWORD
    },
});


// handle errors
contactEmail.verify((error) => {
    if (error)
    {
        console.log(error);
    }
    else 
    {
        console.log("Ready to send!");
    }

// create the post request
router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "tuukka.ervasti@gmail.com", 
        subject: "Viesti Spotlightista <3",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error)
        {
            res.json({ status: "ERROR" });
        }
        else 
        {
            res.json({ status: "Thank you for the message, I will get back to you!" });
            console.log("Email sent");
        }
    });
})

});