import React from 'react';
import emailjs from 'emailjs-com'
import './mailer.css'
import { func } from 'prop-types';
const mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_xy3v8u6',
            'template_yraik3v',
            e.target,
            'user_tkFfz8Paq4GBRKXYdCi1K'
        ).then(res => {
            alert('Mensagem enviada com sucesso')
        }).catch(err => console.log(err));
    }

    return (
        <div className='container border bodyform'>
            <div>Contact Form</div>
            <form className='row' onSubmit={sendEmail}>
                <label>Name:</label>
                <input type='text' name='name' className='form-control' />

                <label>Email:</label>
                <input type='email' name='user_email' className='form-control' />

                <label>Message:</label>
                <textarea name='message' rows='4' className='form-control' />
                <input type='submit' value='Send' className='form-control btn btn-primary btn-send' />

            </form>
        </div>
    )
}
export default mailer;