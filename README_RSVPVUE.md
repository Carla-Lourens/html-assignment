# RSVP Contact Form with Vue.js

## Overview

This is a reusable Vue.js contact form component designed to collect RSVP information with real-time validation and a confirmation modal. It demonstrates component-based architecture, form validation, and user interaction using Vue 3.

---

## Structure & Vue Components

- **`rsvp.html`**  
  The main HTML entry point that loads the Vue app and mounts the root component.

- **`rsvp.js`**  
  Main JavaScript file that creates the Vue application instance, registers components globally, and mounts the app on the DOM element with id `app`.

- **`ContactForm.js`**  
  - Vue component representing the contact form itself.  
  - Props: customizable placeholders for inputs and button label.  
  - Manages form state (`name`, `email`, `message`).  
  - Provides **real-time validation** using computed properties.  
  - Displays validation errors dynamically with `v-if`.  
  - Handles form submission and triggers the modal confirmation.

- **`ConfirmationModal.js`**  
  - A reusable Vue modal component.  
  - Receives submitted form data via props.  
  - Displays a thank you message and the user's input.  
  - Emits a `close` event when the modal backdrop or close button is clicked, allowing the parent to hide the modal.

- **`rsvp.css`**  
  Styles for the form and modal, designed to reflect an elegant and clean portfolio look.

---

## Validation & Modal Interaction

- **Validation Logic:**  
  Implemented in the `ContactForm` component as computed properties:  
  - **Name:** Must be non-empty and contain letters and spaces only.  
  - **Email:** Must be non-empty and match a basic email regex pattern.  
  - **Message:** Must be non-empty and at least 10 characters long.

- **User Feedback:**  
  Validation errors are shown immediately as the user types, using Vue's `v-if` directive for dynamic rendering.

- **Submit Button:**  
  Disabled until all validations pass, preventing invalid submissions.

- **Modal Confirmation:**  
  On successful submission, the form data is saved to a separate object (`submitted`) before clearing input fields. The modal then displays the submitted data.  
  The modal can be closed by clicking the backdrop or the Close button, emitting a `close` event caught by the parent component to toggle visibility.

---

## Testing Notes

- **Validation Tested:**  
  - Empty fields correctly show required field errors.  
  - Name rejects numbers and special characters.  
  - Email requires correct format (`example@domain.com`).  
  - Message length enforces minimum 10 characters.  
  - Submit button toggles disabled state appropriately.

- **Modal Tested:**  
  - Shows submitted data correctly without being cleared prematurely.  
  - Closes properly on backdrop and button clicks.  
  - Form resets after submission.

---

## Challenges & Resolutions

- **Issue:** Form input values were cleared before modal displayed, causing modal to show empty data.  
  **Resolution:** Introduced a separate `submitted` object to store form data at submission time and passed that to the modal, while clearing the form inputs separately.

- **Issue:** Directly opening the `rsvp.html` file with `file://` protocol caused the Vue components not to load due to ES module import restrictions.  
  **Resolution:** Configured project to be served via a local development server (e.g., VS Code Live Server or Python HTTP server) so module imports work correctly.

- **Challenge:** Passing placeholder text and button labels as props for component reusability.  
  **Resolution:** Leveraged Vue props and dynamic binding (`:placeholder` and interpolation) to make the form customizable for different contexts.

---
