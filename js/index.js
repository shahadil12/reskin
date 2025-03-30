(async function () {
  const [headerRes, footerRes] = await Promise.all([
    await fetch("header.html"),
    await fetch("footer.html"),
  ]);

  const [header, footer] = await Promise.all([
    headerRes.text(),
    footerRes.text(),
  ]);

  const headerEl = document.getElementById("header");
  const footerEl = document.getElementById('footer')

  headerEl.innerHTML = header;
  footerEl.innerHTML = footer;

  const mobileNavBtnEl = document.querySelector(".btn-mobile-nav");
  const termsAndConditionSpan = document.querySelector(".footer-terms");
  const privacyPolicySpan = document.querySelector(".footer-policy");

  mobileNavBtnEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });

  termsAndConditionSpan.addEventListener("click", () => {
    const baseUrl =
      window.location.origin +
      window.location.pathname.replace(/\/[^\/]*$/, "/");
    window.location.href = baseUrl + "terms-and-condition.html";
  });

  privacyPolicySpan.addEventListener("click", () => {
    const baseUrl =
      window.location.origin +
      window.location.pathname.replace(/\/[^\/]*$/, "/");
    window.location.href = baseUrl + "privacy-policy.html";
  });
})();

const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const addToCartModal = document.querySelector(".add-to-cart-modal");
const addToCartModalCloseBtn = document.querySelector(".close");

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    addToCartModal.showModal();
  });
});

if (addToCartModalCloseBtn) {
  addToCartModalCloseBtn.addEventListener("click", () => {
    addToCartModal.close();
  });
}

const forgotPasswordButton = document.querySelector(".btn-forgot-password");
const forgotPasswordModal = document.querySelector(".forgot-password-modal");
const forgotPasswordModalCloseBtn = document.querySelector(
  ".close-forgot-password"
);

if (forgotPasswordButton) {
  forgotPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();
    forgotPasswordModal.showModal();
  });
}

if (forgotPasswordModalCloseBtn) {
  forgotPasswordModalCloseBtn.addEventListener("click", (e) => {
    forgotPasswordModal.close();
  });
}
