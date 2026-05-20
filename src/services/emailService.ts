import emailjs from '@emailjs/browser';
import { ContactForm } from '../types';

export const sendEmail = async (form: ContactForm) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS credentials are not properly configured.');
  }

  const templateParams = {
    from_name: form.name,
    phone_number: form.phone,
    business_type: form.businessType,
    service_interested: form.service,
    message: form.message,
  };

  return await emailjs.send(serviceId, templateId, templateParams, publicKey);
};
