// Light mód dark mód

const colorModeChange = () => {
  const modeButton = document.querySelector(".color-mode");
  const body = document.querySelector("body");
  const music = document.querySelector(".music a");
  const books = document.querySelector(".books a");
  const movie = document.querySelector(".movie a");
  let colorMode = "light";

  modeButton.addEventListener("click", () => {
    if (colorMode === "dark") {
      body.style.backgroundColor = "rgb(219, 219, 195)";
      body.style.color = "black";
      music.style.color = "black";
      books.style.color = "black";
      movie.style.color = "black";
      modeButton.textContent = "DARK MODE";
      colorMode = "light";
    } else {
      body.style.backgroundColor = "rgb(19, 48, 74)";
      body.style.color = "white";
      music.style.color = "white";
      books.style.color = "white";
      movie.style.color = "white";
      modeButton.textContent = "LIGHT MODE";
      colorMode = "dark";
    }
  });
};

// Porovnání hodnoty hesel

const passwordComparison = () => {
  const form = document.querySelector("form");
  const password1 = document.querySelector(".password1");
  const password2 = document.querySelector(".password2");
  const notSamePassword = document.querySelector(".notificationPassword");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    notSamePassword.style.display =
      password1.value !== password2.value ? "block" : "none";
  });
};

// kontrola správnosti emailu

const emailVerification = () => {
  const form = document.querySelector("form");
  const email = document.querySelector(".email");
  const notEmail = document.querySelector(".notificationEmail");
  const emailValue = email.value;
  const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = email.value;

    notEmail.style.display = emailValue.match(pattern) ? "none" : "block";
  });
};

// Tlačítko na vyjetí na vršek stránky

const scrollToTopButton = () => {
  const scrollBtn = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      scrollBtn.style.visibility = "visible";
    } else {
      scrollBtn.style.visibility = "hidden";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

scrollToTopButton();
emailVerification();
passwordComparison();
colorModeChange();
