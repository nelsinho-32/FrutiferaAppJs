import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { criarCardFruteira } from './components/CardLanche.js';

document.addEventListener('DOMContentLoaded', function () {
    renderHeader();
    renderFooter();

    const lanchesContainer = document.getElementById('lanches-container');
    const cardapioContainer = document.getElementById('cardapio-container');
    const cadastrarBtn = document.getElementById('cadastrar-fruteira-btn');
    const addFruitForm = document.getElementById('add-fruit-form');
    const modalElement = document.getElementById('addFruitModal');

    // Dados do LocalStorage e atualiza a tela
    const carregarFruteiras = () => {
        // Dados do LocalStorage
        const fruteiras = JSON.parse(localStorage.getItem('fruteiras')) || [];
        const fruteirasHtml = fruteiras.map(fruteira => criarCardFruteira(fruteira)).join('');

        // Atualiza a tela
        if (lanchesContainer) {
            lanchesContainer.innerHTML = fruteirasHtml; // principal
        }
        if (cardapioContainer) {
            cardapioContainer.innerHTML = fruteirasHtml; // Catálogo
        }
    };

    // clique do button de cadastro
    const handleCadastroClick = () => {
    // valores do form
    const nomeEspecie = document.getElementById('especie-name').value;
    const nomeCientifico = document.getElementById('cientifico-name').value;
    const producaoMedia = parseFloat(document.getElementById('producao-media').value);
    const dataPlantio = document.getElementById('data-plantio').value;
    const imageUrl = document.getElementById('fruit-image-url').value;

    // Validação
    if (!nomeEspecie || !nomeCientifico || isNaN(producaoMedia) || !dataPlantio || !imageUrl) {
        alert('Preencha todos os campos.');
        return;
    }

    // Nova fruteira com a URL da imagem
    const novaFruteira = {
        id: Date.now(),
        nome: nomeEspecie,
        nomeCientifico: nomeCientifico,
        producaoMedia: producaoMedia,
        dataPlantio: dataPlantio,
        imagem: imageUrl 
    };

    // Salvar no LocalStorage
    let fruteiras = JSON.parse(localStorage.getItem('fruteiras')) || [];
    fruteiras.push(novaFruteira);
    localStorage.setItem('fruteiras', JSON.stringify(fruteiras));
    alert('Fruteira cadastrada!');
    
    // Limpa o form
    if(addFruitForm) {
        addFruitForm.reset();
    }

    // Fecha o modal 
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }
    carregarFruteiras();
};


    // Ver se o button de cadastrar-fruteira-btn existe
    if (cadastrarBtn) {
        cadastrarBtn.addEventListener('click', handleCadastroClick);
    }
    
    carregarFruteiras();
});