export function criarCardFruteira(fruteira) {
    const dataPlantio = new Date(fruteira.dataPlantio);
    const hoje = new Date();
    
    // Converter idade de plantio para meses
    let meses = (hoje.getFullYear() - dataPlantio.getFullYear()) * 12; 
    meses -= dataPlantio.getMonth();
    meses += hoje.getMonth();
    const idadeEmMeses = meses <= 0 ? 0 : meses; // meses não ser negativo

    // ------ .toLocaleDateString('pt-BR', { timeZone: 'UTC' } Foi pesquisado por IA
    // O método `toLocaleDateString` é usado para formatar a data em uma string legível.
    // O parâmetro `'pt-BR'` define o idioma como português do Brasil.
    // A opção `{ timeZone: 'UTC' }` garante que a data seja interpretada no fuso horário UTC,  
    const dataFormatada = new Date(fruteira.dataPlantio).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    return `
      <div class="col">
          <div class="card h-100 shadow-sm">
              <img src="${fruteira.imagem}" class="card-img-top" alt="${fruteira.nome}">
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${fruteira.nome}</h5>
                  <p class="card-text mb-1"><strong>Nome Científico:</strong> ${fruteira.nomeCientifico}</p>
                  <p class="card-text mb-1"><strong>Produção Média:</strong> ${fruteira.producaoMedia} Kg/safra</p>
                  <p class="card-text mb-1"><strong>Data de Plantio:</strong> ${dataFormatada}</p>
                  <p class="card-text mb-1"><strong>Idade:</strong> ${idadeEmMeses} meses</p>
                  <p class="card-text mb-1"><strong>ID:</strong> ${fruteira.id}</p>
              </div>
          </div>
      </div>
    `;
}