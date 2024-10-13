function sendOTP() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      // Here you would send an OTP to the email (backend logic required)
      alert(`OTP has been sent to ${email}`);
  
      // Hide email/password form and show OTP form
      document.getElementById('email-section').style.display = 'none';
      document.getElementById('otp-section').style.display = 'block';
    } else {
      alert('Please enter both email and password');
    }
  }
  
  function verifyOTP() {
    const otp = document.getElementById('otp').value;
  
    if (otp === '123456') { // Replace '123456' with the actual backend OTP verification logic
      alert('OTP verified successfully. Redirecting to Admin Panel...');
      // Redirect to the admin dashboard
      window.location.href = 'admin.html';
    } else {
      alert('Invalid OTP, please try again.');
    }
  }
  