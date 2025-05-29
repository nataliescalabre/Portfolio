const express = require('express'); //to work server
const cors = require('cors') //when backend blocks your front-end
const nodemailer = require('nodemailer') //required for gMaik
const dotenv = require('dotenv'); //required for .env file

dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(5000, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post('/contact', (req, res) => {
    const name = req.body.firstName + ' ' + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: 'Contact Form Submission - Portfolio',
        html: `<p>Name: ${name}</p>
        <p>Emai: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error)
        } else {
            res.json({code: 200, status: 'Message Sent'});
        }
    });
});