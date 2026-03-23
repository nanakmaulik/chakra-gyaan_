function showMessage() {
    alert("Booking feature abhi next step me banayenge.");
  }
  
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");
const authMessage = document.getElementById("authMessage");

function showLoginForm() {
  if (!loginForm || !signupForm || !loginTab || !signupTab) return;

  loginForm.classList.add("active-form");
  signupForm.classList.remove("active-form");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  if (authMessage) authMessage.textContent = "";
}

function showSignupForm() {
  if (!loginForm || !signupForm || !loginTab || !signupTab) return;

  signupForm.classList.add("active-form");
  loginForm.classList.remove("active-form");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  if (authMessage) authMessage.textContent = "";
}

if (loginTab) {
  loginTab.addEventListener("click", showLoginForm);
}

if (signupTab) {
  signupTab.addEventListener("click", showSignupForm);
}

if (goSignup) {
  goSignup.addEventListener("click", showSignupForm);
}

if (goLogin) {
  goLogin.addEventListener("click", showLoginForm);
}

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const mobile = document.getElementById("signupMobile").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (!name || !email || !mobile || !password || !confirmPassword) {
      authMessage.textContent = "Please fill all signup fields.";
      authMessage.style.color = "#ff8f8f";
      return;
    }

    if (password !== confirmPassword) {
      authMessage.textContent = "Passwords do not match.";
      authMessage.style.color = "#ff8f8f";
      return;
    }

    const userData = {
      name,
      email,
      mobile,
      password
    };

    localStorage.setItem("chakraUser", JSON.stringify(userData));

    authMessage.textContent = "Signup successful. Please login now.";
    authMessage.style.color = "#7affae";

    signupForm.reset();
    showLoginForm();
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("chakraUser"));

    if (!savedUser) {
      authMessage.textContent = "No account found. Please signup first.";
      authMessage.style.color = "#ff8f8f";
      return;
    }

    if (
      loginEmail === savedUser.email &&
      loginPassword === savedUser.password
    ) {
      authMessage.textContent = `Welcome, ${savedUser.name}! Login successful.`;
      authMessage.style.color = "#7affae";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    } else {
      authMessage.textContent = "Invalid email or password.";
      authMessage.style.color = "#ff8f8f";
    }
  });
}
const serviceType = document.getElementById("serviceType");
const selectedServiceText = document.getElementById("selectedServiceText");
const selectedPrice = document.getElementById("selectedPrice");
const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

const servicePrices = {
  "Kundli Analysis": 299,
  "Audio Call Consultation": 999,
  "Video Call Session": 2999,
  "Negativity Removal Session": 4999
};

if (serviceType) {
  serviceType.addEventListener("change", function () {
    const selectedService = serviceType.value;

    if (selectedService && servicePrices[selectedService]) {
      selectedServiceText.textContent = selectedService;
      selectedPrice.textContent = `₹${servicePrices[selectedService]}`;
    } else {
      selectedServiceText.textContent = "Not selected";
      selectedPrice.textContent = "₹0";
    }
  });
}

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const bookingData = {
      fullName: document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      mobile: document.getElementById("mobile").value.trim(),
      dob: document.getElementById("dob").value,
      birthTime: document.getElementById("birthTime").value,
      birthPlace: document.getElementById("birthPlace").value.trim(),
      serviceType: document.getElementById("serviceType").value,
      sessionDate: document.getElementById("sessionDate").value,
      sessionTime: document.getElementById("sessionTime").value,
      consultationMode: document.getElementById("consultationMode").value,
      concern: document.getElementById("concern").value.trim(),
      price: servicePrices[document.getElementById("serviceType").value] || 0
    };

    if (
      !bookingData.fullName ||
      !bookingData.email ||
      !bookingData.mobile ||
      !bookingData.dob ||
      !bookingData.birthTime ||
      !bookingData.birthPlace ||
      !bookingData.serviceType ||
      !bookingData.sessionDate ||
      !bookingData.sessionTime ||
      !bookingData.consultationMode ||
      !bookingData.concern
    ) {
      bookingMessage.textContent = "Please fill all booking details.";
      bookingMessage.style.color = "#ff8f8f";
      return;
    }

    localStorage.setItem("chakraBooking", JSON.stringify(bookingData));

    bookingMessage.textContent =
      "Booking submitted successfully. Next we can connect this to payment or WhatsApp.";
    bookingMessage.style.color = "#7affae";

    bookingForm.reset();
    selectedServiceText.textContent = "Not selected";
    selectedPrice.textContent = "₹0";
  });
}
function generateDummyKundli() {
  const names = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  const nakshatras = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Pushya", "Magha", "Hasta", "Swati", "Anuradha", "Shravana", "Revati"];
  const careers = [
    "You are likely to grow steadily in career with strong leadership potential.",
    "Your chart shows success through communication, business, and networking.",
    "You may achieve recognition after consistent hard work and patience.",
    "Creative and spiritual fields may bring you strong opportunities."
  ];
  const marriage = [
    "Marriage life may be stable, but emotional understanding will be important.",
    "Your chart suggests a supportive partner and balanced relationship energy.",
    "There can be slight delays in marriage, but long-term stability is indicated.",
    "Partnerships look strong if communication remains open and honest."
  ];
  const health = [
    "Take care of stress, sleep cycle, and digestion.",
    "Your energy looks good, but mental peace is important.",
    "Regular routine and discipline will improve overall wellbeing.",
    "Avoid overthinking and maintain balance in food and rest."
  ];
  const money = [
    "Financial growth is gradual but stable.",
    "There are good chances of wealth through disciplined effort.",
    "Savings and long-term planning will benefit you greatly.",
    "Money flow looks positive, especially with patience and right decisions."
  ];
  const remedies = [
    "Chant 'Om Namah Shivaya' daily for peace and protection.",
    "Offer water to the Sun in the morning.",
    "Keep your living space clean and spiritually calm.",
    "Meditation and grounding practices will help remove negativity."
  ];

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const result = {
    lagna: randomItem(names),
    moonSign: randomItem(names),
    sunSign: randomItem(names),
    nakshatra: randomItem(nakshatras),
    mangalDosha: Math.random() > 0.5 ? "Present" : "Not Present",
    kaalSarp: Math.random() > 0.7 ? "Possible Indication" : "Not Present",
    career: randomItem(careers),
    marriage: randomItem(marriage),
    health: randomItem(health),
    money: randomItem(money),
    remedy: randomItem(remedies)
  };

  const resultBox = document.getElementById("kundliResult");

  resultBox.innerHTML = `
    <h2>Your Kundli Insights</h2>
    <div class="kundli-result-grid">
      <div class="result-card"><strong>Lagna:</strong><br>${result.lagna}</div>
      <div class="result-card"><strong>Moon Sign:</strong><br>${result.moonSign}</div>
      <div class="result-card"><strong>Sun Sign:</strong><br>${result.sunSign}</div>
      <div class="result-card"><strong>Nakshatra:</strong><br>${result.nakshatra}</div>
      <div class="result-card"><strong>Mangal Dosha:</strong><br>${result.mangalDosha}</div>
      <div class="result-card"><strong>Kaal Sarp Dosha:</strong><br>${result.kaalSarp}</div>
    </div>

    <div class="result-detail-card">
      <h3>Career</h3>
      <p>${result.career}</p>
    </div>

    <div class="result-detail-card">
      <h3>Marriage</h3>
      <p>${result.marriage}</p>
    </div>

    <div class="result-detail-card">
      <h3>Health</h3>
      <p>${result.health}</p>
    </div>

    <div class="result-detail-card">
      <h3>Money</h3>
      <p>${result.money}</p>
    </div>

    <div class="result-detail-card">
      <h3>Suggested Remedy</h3>
      <p>${result.remedy}</p>
    </div>
  `;

  resultBox.style.display = "block";
  resultBox.scrollIntoView({ behavior: "smooth" });
}