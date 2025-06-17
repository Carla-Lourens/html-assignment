# RSVP (Contact form) with Validation and Modal Confirmation
This Simple RSVP Form is build using HTMl, CSS and Javascript. The user can submit their name, email adress and a short message. Javascript is used to do real time validation and a model pops up oncde the user has successfully submitted. 

---

## Features

- Responsive RSVP form with real-time validation
- Error Messages for each field
- Modal pop-up to confirm successfull submission
- User-friendly and accessible design
- Reset form after submission

---

## How it works

The form consist of three field: 
- **Name** - required and must only contain letters and spaces
- **Email** - required and must be in valid format (e.g., 'username@emaple.com')
- **Message** - required and must contain at least 10 characters

### Form Flow: 

1. User types into each field. 
2. JavaScript listens for 'input' events and validates as the user types. 
3. Upon clicking **Submit**:
    - If all fields are valid, the modal opens showing the user's input. 
    - If not, inline error messages appear under the respective fields. 
4. The form is cleared after successful submission. 

---

## JavaScript Validation Logic:

Validation is handled using simple JavaScript. Here's the breakdown: 

### Name Validation

- Must not be empty
- Must only contain letters and spaces

'''js
/^[A-Za-z\s]+$/

### Email Validation

- Must not be empty
- Must match a typical email format

'''js
/^\S+@\S+\.\S+$/

### Message Validation

- Must not be empty
- Must contain at least 10 characters

Validation is triggered in real-time (input event), improving the user experience with immediate feedback. 


---

## Modal Interaction

The confirmation modal is implmented using a hidden div styled with CSS and controlled using JavaScript: 

- On successfull submission: 
    JavaScript populates the modal with the form data and sets modal.style.display="flex" to show it

- Closing the modal: 
    Click the Close button or press escape key. 

Once closed, the modal returns to display:none