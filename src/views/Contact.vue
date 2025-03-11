<template>
  <div>
    <div class="contact">
      <h1>Contact Us</h1>
      <div class="cards">
        <ContactCard
          :icon="singleIcon"
          header1="Got questions?"
          header2="We will answer questions you have about our technologies"
          buttonLabel="Contact"
          gradientStart="#158bc2"
          gradientEnd="#6788c8"
          @open-modal="showModal = true"
        />
        <ContactCard
          :icon="doubleIcon"
          header1="Partner with us!"
          header2="We are always looking for new and exciting collaborations!"
          buttonLabel="Partner"
          gradientStart="#1F1CD0"
          gradientEnd="#AAB7D2"
          @open-modal="showModalB = true"
        />
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <!-- Close button -->
        <button class="close-icon" @click="showModal = false">×</button>

        <h2>Got Questions?</h2>
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <div>
            <!-- Gradient submit button -->
            <GradientButton
              label="Submit"
              :gradientStart="'#158bc2'"
              :gradientEnd="'#6788c8'"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>

    <div v-if="showModalB" class="modal-overlay">
      <div class="modal-content">
        <button class="close-icon" @click="showModalB = false">×</button>

        <h2>Join us on our journey!</h2>
        <form @submit.prevent="handlePartnerSubmit">
          <div>
            <label for="partner-name">Name</label>
            <input
              type="text"
              id="partner-name"
              v-model="partnerForm.name"
              required
            />
          </div>
          <div>
            <label for="partner-email">Email</label>
            <input
              type="email"
              id="partner-email"
              v-model="partnerForm.email"
              required
            />
          </div>
          <div>
            <label for="partner-message">Message</label>
            <textarea
              id="partner-message"
              v-model="partnerForm.message"
              required
            ></textarea>
          </div>
          <div>
            <GradientButton
              label="Submit"
              :gradientStart="'#1F1CD0'"
              :gradientEnd="'#AAB7D2'"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import ContactCard from "@/components/Contact/ContactCard.vue";
import GradientButton from "@/components/Buttons/GradientButton.vue";
import Footer from "@/components/General/Footer.vue";
import singleIcon from "@/assets/HARPResearchLockUps/Icons/SingleIcon.png";
import doubleIcon from "@/assets/HARPResearchLockUps/Icons/doubleIcon.png";
import { ref } from "vue";

const showModal = ref(false);
const showModalB = ref(false);

// Form data
const form = ref({
  name: "",
  email: "",
  message: "",
});

const partnerForm = ref({
  name: "",
  email: "",
  message: "",
});

// Handle form submission
const handleSubmit = () => {
  alert("Form submitted!");
  showModal.value = false;
};

const handlePartnerSubmit = () => {
  alert("Partner form submitted!");
  showModalB.value = false;
};
</script>

<style scoped>
@import "../components/Contact/Contact.css";
</style>
