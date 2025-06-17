export default {
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  emits: ['close'],
  template: `
    <div class="modal" @click.self="$emit('close')">
      <div class="modal-content">
        <h2>Thank you for your RSVP!</h2>
        <p><strong>Name:</strong> {{ name }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Message:</strong> {{ message }}</p>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  `
};
