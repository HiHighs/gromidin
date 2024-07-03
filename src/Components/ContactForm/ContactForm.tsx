import { SyntheticEvent, useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from 'emailjs-com';
import emailConfig from './emailKey';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    setLoading(true);

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
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          setLoading(false);
          console.error(error.text);
        }
      );
  }

  return (
    <div className={styles.contactForm}>
      {!submitted ? (
        <>
          <p className={styles.message}>
            Use the contact form below to send a message to Gromidin.
          </p>
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
                  required
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
                  required
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
                  required
                ></textarea>
              </label>
            </div>
            <button type='submit' className={styles.submit} disabled={loading}>
              {loading ? <div className={styles.loader}></div> : 'Submit'}
            </button>
          </form>
        </>
      ) : (
        <div>
          <p>Your message has been successfully sent! &#10003;</p>
          <button className={styles.back} onClick={() => setSubmitted(false)}>
            Send another message
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
