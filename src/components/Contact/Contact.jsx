import React, { useState } from 'react';
import './Contact.css';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import contactUs from '../../images/contactUs.jpg';
import { Link } from 'react-router-dom';

function Contact() {

    const [message, setMessage] = useState("");

    return (
        <div className='myContact'>
            <h1 className='text-center'>Contact <span className='purple'>Me</span></h1>
            <div>
                <div className="contact-container">
                    <Link to="mailto:sachdeva.pulkit2599@gmail.com">
                        <img src={contactUs} alt="" />
                    </Link>
                    <form onSubmit={(e) => { e.preventDefault(); setMessage("I'll get back to you soon."); }}>
                        <TextField
                            required
                            variant="outlined"
                            type='text'
                            id="name"
                            label="Your Name"
                            fullWidth
                            sx={{ maxWidth: "400px", margin: "15px 0px" }}
                        />
                        <TextField
                            variant="outlined"
                            type='email'
                            id="email"
                            label="Your Email"
                            fullWidth
                            required
                            sx={{ maxWidth: "400px", margin: "15px 0px" }}
                        />
                        <TextField
                            required
                            variant="outlined"
                            type='text'
                            id="message"
                            label="Your Message"
                            fullWidth
                            sx={{ maxWidth: "400px", margin: "15px 0px" }}

                        />
                        <Button variant="contained" endIcon={<SendIcon />} color='success' type='submit'>
                            Send
                        </Button>
                        <div className="text-success">{message}</div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact