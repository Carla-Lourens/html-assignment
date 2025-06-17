import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import ContactForm from './Components/ContactForm.js';
import ConfirmationModal from './Components/ConfirmationModal.js';

const app = createApp({});
app.component('contact-form', ContactForm);
app.component('confirmation-modal', ConfirmationModal);
app.mount('#app');

