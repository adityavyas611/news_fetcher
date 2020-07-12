import sgMail from '@sendgrid/mail';
import { SG_MAIL_APIKEY } from '../constants';

sgMail.setApiKey(SG_MAIL_APIKEY);

export const sendMail = (msgObject) => {
  sgMail.send(msgObject);
};
