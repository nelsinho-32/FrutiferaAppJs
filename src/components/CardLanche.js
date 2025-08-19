export function criarCardLanche(lanche) {
    return `
      <div class="col">
          <div class="card h-100 shadow-sm">
              <img src="${lanche.imagem}" class="card-img-top" alt="${lanche.nome}">
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${lanche.nome}</h5>
                  <p class="card-text text-truncate" title="${lanche.descricaoCompleta}">
                      ${lanche.descricaoCurta}
                  </p>
                  <span class="fs-3 d-block mb-3">${lanche.preco}</span>
                  <div class="mt-auto">
                      <a href="#" class="btn btn-shopping-cart">Adicionar <i class="bi bi-cart-plus"></i></a>
                      <a href="#" class="btn btn-buy">Comprar</a>
                  </div>
              </div>
          </div>
      </div>
    `;
}