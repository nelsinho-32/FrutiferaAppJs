export function renderFooter() {
    const basePath = window.location.pathname.includes('/src/')
        ? '../../'
        : './';

    const footerHTML = `
      <div class="container">
          <div class="row text-start">
              <div class="col-md-3 mb-4 footer-logo">
                  <img src="${basePath}assets/images/frutLogo.jpg" alt="Logo" />
                  <p class="mt-3 small">
                      
                  </p>
              </div>
              <div class="col-md-3 mb-4 footer-section">
                  <h1>Atendimento via WhatsApp</h1>
                  <div class="footer-whatsapp d-flex align-items-center">
                      <a href="#" class="me-2 fs-3 text-dark"><i class="bi bi-whatsapp"></i></a>
                      <span class="ms-2">(83) 99999-9999</span>
                  </div>
              </div>
              <div class="col-md-3 mb-4 footer-section">
                  <h1>Termos</h1>
                  <div class="d-flex flex-column">
                      <a class="text-decoration-none text-dark mb-1" href="#">Política de privacidade</a>
                      <a class="text-decoration-none text-dark mb-1" href="#">Política de trocas e devoluções</a>
                      <a class="text-decoration-none text-dark mb-1" href="#">Quem somos</a>
                      <a class="text-decoration-none text-dark mb-1" href="#">Blog</a>
                  </div>
              </div>
              <div class="col-md-3 mb-4 footer-section footer-social">
                  <h1>Redes Sociais</h1>
                  <a href="#" class="me-2 fs-3 text-dark"><i class="bi bi-instagram"></i></a>
                  <a href="#" class="me-2 fs-3 text-dark"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="me-2 fs-3 text-dark"><i class="bi bi-telegram"></i></a>
                  <a href="#" class="me-2 fs-3 text-dark"><i class="bi bi-twitter-x"></i></a>
              </div>
          </div>
      </div>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}