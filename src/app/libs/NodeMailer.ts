import nodemailer from 'nodemailer';

import mailConfig from '../../config/mail';

// Criando o Transport para o envio de emails com base nas credĂȘnciais do Mailtrap
export default nodemailer.createTransport(mailConfig);

