import { ContactForm } from '../types';
import { sendEmail } from '../services/emailService';

export const submitContactForm = async (form: ContactForm) => {
  try {
    const response = await sendEmail(form);
    return response;
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    throw error;
  }
};
