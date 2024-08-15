import emailjs from '@emailjs/browser';
export default function sendEmail (data) {
  let emailProcess = new Promise((resolve, reject) => {
    emailjs
          .send(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, data, {
            publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
          })
          .then(
            () => {
              resolve('Your Request Is Sent');
            },
            (error) => {
              reject('FAILED...', error.text);
            },
          );
  }); 
  return emailProcess
}