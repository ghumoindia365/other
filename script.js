document.addEventListener('DOMContentLoaded', () => {
  // Booking Form Submission
  const bookingForm = document.querySelector('.booking-form form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = bookingForm.querySelector('button');
      button.textContent = 'Processing...';
      button.disabled = true;

      // Simulate API call
      setTimeout(() => {
        button.textContent = 'Confirm & Book Now';
        button.disabled = false;
        const confirmationSection = document.querySelector('.confirmation');
        if (confirmationSection) {
          confirmationSection.scrollIntoView({ behavior: 'smooth' });
        }
        alert('Booking submitted successfully! Reference ID: URB-5X9T2M');
      }, 2000);
    });
  }

  // Enquiry Form Submission
  const enquiryForm = document.querySelector('.enquiry-form form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = enquiryForm.querySelector('button');
      button.textContent = 'Processing...';
      button.disabled = true;

      // Simulate API call
      setTimeout(() => {
        button.textContent = 'Submit';
        button.disabled = false;
        alert('Enquiry submitted successfully!');
        enquiryForm.reset();
      }, 1500);
    });
  }

  // Booking Confirmation Button
  const confirmationButton = document.querySelector('.confirmation button');
  if (confirmationButton) {
    confirmationButton.addEventListener('click', () => {
      alert('Thank you for booking with Urbango Cabs!');
      confirmationButton.closest('section').style.display = 'none';
    });
  }

  // AI Assistant Toggle
  const aiAssistant = document.querySelector('.ai-assistant');
  const aiOptions = document.querySelectorAll('.ai-assistant ul li a');
  if (aiAssistant && aiOptions) {
    // Show AI assistant after a delay
    setTimeout(() => {
      aiAssistant.classList.add('active');
    }, 3000);

    aiOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const optionText = option.textContent.trim();
        const responseContainer = document.querySelector('.ai-assistant p:last-child');

        // Simple responses for each option
        switch (optionText) {
          case '📍 Delhi to Agra':
            responseContainer.textContent = 'The Delhi to Agra trip costs approx ₹3,500 for a sedan. Book now or check the itinerary!';
            break;
          case '💰 Fare Info':
            responseContainer.textContent = 'Our fares start at ₹15/km for sedans. Select your vehicle for a detailed quote.';
            break;
          case '🧳 Travel Itineraries':
            responseContainer.textContent = 'Explore popular routes like Delhi to Jaipur or Shimla. Check our itineraries section!';
            break;
          case '🤝 Partner With Us':
            responseContainer.textContent = 'Join our network for zero commission and steady bookings. Visit our partner section!';
            break;
          default:
            responseContainer.textContent = 'How else can I assist you?';
        }
      });
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
