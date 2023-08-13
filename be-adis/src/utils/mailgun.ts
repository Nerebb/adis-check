import config from '../config';
import Mailgun, { Interfaces, MailgunMessageData } from 'mailgun.js';

const sendMail = async (options: MailgunMessageData) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const formData = require('form-data');
  const mailgun = new Mailgun(formData);
  const mg: Interfaces.IMailgunClient = mailgun.client({
    username: 'api',
    key: config.MAILGUN_API_KEY,
  });
  return new Promise((resolve, reject) => {
    mg.messages.create(config.MG_DOMAIN, options).then(resolve).catch(reject);
  });
};

export default sendMail;
