import { ContactForm } from '../types';

export const validateContact = (form: ContactForm): Partial<Record<keyof ContactForm, string>> => {
  const errors: Partial<Record<keyof ContactForm, string>> = {};
  if (!form.name.trim()) errors.name = 'Please enter your name';
  if (!/^[6-9]\d{9}$/.test(form.phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number';
  if (!form.businessType) errors.businessType = 'Please select your business type';
  if (!form.service) errors.service = 'Please select a service';
  return errors;
};
