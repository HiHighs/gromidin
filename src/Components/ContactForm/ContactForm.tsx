import { SyntheticEvent, useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from 'emailjs-com';
import emailConfig from './emailKey';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //   async function handleSubmit(e: SyntheticEvent) {
  //     e.preventDefault();

  //     try {
  //       await axios.post('http://localhost:5000/send-email', {
  //         to: 'degroote.jonas@hotmail.com', // Adjust recipient email address
  //         subject: 'Message from Contact Form',
  //         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  //       });

  //       console.log('Email sent succesfully!');
  //       setName('');
  //       setEmail('');
  //       setMessage('');
  //     } catch (error) {
  //       console.error('Error sending email: ', error);
  //     }
  //   }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    emailjs
      .sendForm(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        e.target as HTMLFormElement,
        emailConfig.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={styles.contactForm}>
      <p>Use the contact form below to send a message to Gromidin.</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <label>
            Name
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
            />
          </label>
        </div>
        <div className={styles.formContainer}>
          <label>
            Email address
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
            />
          </label>
        </div>
        <div className={styles.formContainer}>
          <label>
            Your message*
            <textarea
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder='Enter your message'
            ></textarea>
          </label>
        </div>
        <button type='submit' className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
