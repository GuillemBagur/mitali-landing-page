const nav = document.getElementById("nav");
const footer = document.getElementById("footer");

const navText = `
<div class="container">
  <div class="site-header-inner">
    <div class="brand header-brand">
      <a href="/">
        <img
          class="header-logo-image"
          src="dist/images/mitali-logo.webp"
          alt="Logo"
          style="height: 3rem;aspect-ratio: 1 / 1;"
        />
      </a>
    </div>
    <select class="lang-select" id="lang-select" onchange="setLang(this.value);">
      <option value="en">Language</option>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="ca">Català</option>
    </select>
  </div>
</div>
`;

const footerText = `
        <div class="container">
          <div class="site-footer-inner">
            <div class="brand footer-brand">
              <a href="/">
                <img
                  class="bottom-logo-image"
                  src="dist/images/mitali-logo.webp"
                  alt="Logo"
                />
              </a>
            </div>
            <ul class="footer-links list-reset">
              <li>
                <a
                  href="mailto:info@mitali.app"
                  data-role="footer_contact"
                  >Contact</a
                >
              </li>
              <li>
                <a href="/aboutus.html" data-role="footer_aboutus">About us</a>
              </li>
              <li>
                <a href="/faqs.html" data-role="footer_faqs">FAQ's</a>
              </li>
              <li>
                <a href="/legal.html" data-role="footer_legal">Legal</a>
              </li>
              <li>
                <a href="/privacy.html" data-role="footer_privacy">Privacy</a>
              </li>
            </ul>
            <ul class="footer-social-links list-reset">
              <li>
                <a target="_blank" href="https://www.instagram.com/mitali.app/">
                  <span class="screen-reader-text">Instagram</span>
                  <img
                        class="icon small-icon"
                        src="dist/icons/instagram.svg"
                      />
                </a>
              </li>
              <li>
              <a target="_blank" href="https://www.youtube.com/channel/UCyuvnBQdpNKbEfwXrnnOv0g">
                <span class="screen-reader-text">YouTube</span>
                <img
                      class="icon small-icon correction"
                      src="dist/icons/youtube.svg"
                    />
              </a>
              </li>
            </ul>
            <div class="footer-copyright">
              &copy; 2023 Guiem Uriel Bagur Moll, all rights reserved
            </div>
          </div>
        </div>
`;

function loadNav() {
  nav.innerHTML = navText;
}

function loadFooter() {
  footer.innerHTML = footerText;
}

document.addEventListener("DOMContentLoaded", () => {
  loadNav();
  loadFooter();
});
