export default {
  props: {
    namePlaceholder: String,
    emailPlaceholder: String,
    messagePlaceholder: String,
    buttonLabel: String
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: {
        name: '',
        email: '',
        message: ''
      },
      showModal: false
    };
  },
  computed: {
    nameError() {
      if (!this.name) return 'Name is required.';
      if (!/^[A-Za-z\s]+$/.test(this.name)) return 'Name must contain only letters.';
      return '';
    },
    emailError() {
      if (!this.email) return 'Email is required.';
      if (!/^\S+@\S+\.\S+$/.test(this.email)) return 'Invalid email address.';
      return '';
    },
    messageError() {
      if (!this.message) return 'Message is required.';
      if (this.message.length < 10) return 'Message must be at least 10 characters.';
      return '';
    },
    isFormValid() {
      return !this.nameError && !this.emailError && !this.messageError;
    }
  },
  methods: {
    handleSubmit() {
      if (this.isFormValid) {
        this.submitted = {
          name: this.name,
          email: this.email,
          message: this.message
        };
        this.showModal = true;
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  },
  template: `
    <form @submit.prevent="handleSubmit" novalidate>
      <label>Name:</label>
      <input v-model="name" type="text" :placeholder="namePlaceholder" />
      <div v-if="nameError" class="error">{{ nameError }}</div>

      <label>Email:</label>
      <input v-model="email" type="email" :placeholder="emailPlaceholder" />
      <div v-if="emailError" class="error">{{ emailError }}</div>

      <label>Message:</label>
      <textarea v-model="message" rows="5" :placeholder="messagePlaceholder"></textarea>
      <div v-if="messageError" class="error">{{ messageError }}</div>

      <button :disabled="!isFormValid" type="submit">{{ buttonLabel }}</button>

      <confirmation-modal
        v-if="showModal"
        :name="submitted.name"
        :email="submitted.email"
        :message="submitted.message"
        @close="showModal = false"
      />
    </form>
  `
};
