export function renderHeader() {
    const basePath = window.location.pathname.includes('/src/')
        ? '../../'
        : './';

    const headerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm nav-bar">
          <div class="container">
              <a class="navbar-brand d-flex align-items-center" href="${basePath}index.html">
                  <img src="${basePath}assets/images/frutLogo.jpg" alt="logo" />
                  <span class="ms-2 fw-bold">Fruteira</span>
              </a>
              <div class="d-flex align-items-center">
                  <a class="nav-link text-dark" href="${basePath}index.html">Home</a>
                  <a class="nav-link text-dark ms-3" href="${basePath}src/cardapio/cadapio.html">Catálogo</a>
                  <div class="dropdown ms-3" onmouseover="(event)=>{console.log("testando");}">
                    <a href="#" class="modal-trigger" onmouseover="()">
                        <i class="bi bi-bell ms-2 text-primary"></i>
                    </a>
                  </div>
                  <a href="${basePath}src/cart/shoppingCart.html"><i class="bi bi-calendar-week"></i></a>
                  <div class="dropdown ms-3">
                      <a href="#" id="dropdownMenuCasa" data-bs-toggle="dropdown">
                          <i class="bi bi-house-fill fs-4"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end">
                          <li>
                              <a class="dropdown-item d-flex align-items-center" href="${basePath}src/profile/profile.html">
                                  <i class="bi bi-person-circle me-2"></i> Perfil
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item d-flex align-items-center" href="${basePath}src/perfilConfigs/perfilConfigs.html">
                                  <i class="bi bi-person-gear me-2"></i> Configurações
                              </a>
                          </li>
                              <hr class="dropdown-divider">
                          </li>
                          <li>
                              <a class="dropdown-item d-flex align-items-center" href="${basePath}src/login/login.html">
                                  <i class="bi bi-box-arrow-in-left me-2"></i> Entrar
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item d-flex align-items-center text-danger" href="${basePath}src/login/login.html">
                                  <i class="bi bi-box-arrow-right me-2"></i> Sair
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
      <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="myModalLabel">Notificações</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div class="modal-body">
                      Aqui estão suas notificações mais recentes.
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                  </div>
              </div>
          </div>
      </div>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;

    function exibirClickNotification(event) {
        console.log('Exibir notificação');
    }
}