import { MailDataRequired, MailService } from '@sendgrid/mail';
import config from '../config';

const sgMail = new MailService();
sgMail.setApiKey(config.SG_API_KEY);

const sendMail = async (options: MailDataRequired) => {
  return new Promise((resolve, reject) => {
    sgMail.send(options)
      .then(resolve)
      .catch(reject);
  });
}

export default sendMail;