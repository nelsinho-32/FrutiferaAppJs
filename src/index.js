import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { criarCardLanche } from './components/CardLanche.js';

const basePath = window.location.pathname.includes('/src/cardapio/')
    ? '../../'
    : './';

// Dados dos lanches para o index.html
const lanchesIndex = [
    {
        imagem: `${basePath}assets/images/allec-gomes-xnRg3xDcNnE-unsplash.jpg`,
        nome: 'Morango',
        nomeCientifico: '',
        producaoMedia: '',
        dataPlantio: '',
    },
    {
        imagem: `${basePath}assets/images/thought-catalog-9aOswReDKPo-unsplash.jpg`,
        nome: 'Abacate',
        nomeCientifico: '',
        producaoMedia: '',
        dataPlantio: '',
    },
    {
        imagem: `${basePath}assets/images/margot-pandone-asZvnGnpL7Q-unsplash.jpg`,
        nome: 'Pera',
        nomeCientifico: '',
        producaoMedia: '',
        dataPlantio: '',
    }
];

// Dados dos lanches exclusivos para o cadapio.html
const lanchesCardapio = [
    {
        id: 1,
        imagem: `${basePath}assets/images/allec-gomes-xnRg3xDcNnE-unsplash.jpg`,
        nome: 'Morango',
        nomeCientifico: '',
        producaoMedia: '',
        dataPlantio: '',
    },
    {
        id: 2,
        imagem: `${basePath}assets/images/thought-catalog-9aOswReDKPo-unsplash.jpg`,
        nome: 'Abacate',
        nomeCientifico: '',
        producaoMedia: '',
        dataPlantio: '',
    },
    {
        id: 3,
        imagem: `${basePath}assets/images/margot-pandone-asZvnGnpL7Q-unsplash.jpg`,
        nome: 'Pera',
        nomeCientifico: '',
        producaoMedia: '',
        dataPlantio: '',
    },
];

document.addEventListener('DOMContentLoaded', function () {
    renderHeader();
    renderFooter();

    const lanchesContainer = document.getElementById('lanches-container');
    if (lanchesContainer) {
        lanchesContainer.innerHTML = lanchesIndex.map(lanche => criarCardLanche(lanche)).join('');
    }

    // cards no cadapio.html
    const cardapioContainer = document.getElementById('cardapio-container');
    if (cardapioContainer) {
        // Recupera produtos cadastrados do localStorage e adiciona ao array
        const produtosSalvos = JSON.parse(localStorage.getItem('produtosCardapio')) || [];
        lanchesCardapio.push(...produtosSalvos);

        cardapioContainer.innerHTML = lanchesCardapio.map(lanche => criarCardLanche(lanche)).join('');
    }

    // Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    //adicionar itens ao carrinho
    const addButtons = document.querySelectorAll('.add-item');
    addButtons.forEach(button => {
        button.addEventListener('click', function () { // UTILIZAR ONCLICK
            const quantityBadge = this.closest('.d-flex').querySelector('.quantity');
            let quantity = parseInt(quantityBadge.textContent);
            quantity += 1;
            quantityBadge.textContent = quantity;
        });
    });

    //diminuir itens do carrinho
    const decreaseButtons = document.querySelectorAll('.decrease-item');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function () { // UTILIZAR ONCLICK
            const quantityBadge = this.closest('.d-flex').querySelector('.quantity');
            let quantity = parseInt(quantityBadge.textContent);
            if (quantity > 1) {
                quantity -= 1;
                quantityBadge.textContent = quantity;
            }
        });
    });

    //deletar itens do carrinho
    const deleteButtons = document.querySelectorAll('.delete-item');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.col');
            card.remove();
        });
    });

    // Modal
    const modalTrigger = document.querySelector('.modal-trigger');
    const modalElement = document.getElementById('myModal');
    if (modalTrigger && modalElement) {
        modalTrigger.addEventListener('click', function () {
            const myModal = new bootstrap.Modal(modalElement);
            myModal.show();
        });
    }

    // Adicionar itens ao carrinho
    const shoppingCartButtons = document.querySelectorAll('.btn-shopping-cart, .add-item');
    shoppingCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const card = this.closest('.card');
            const itemName = card.querySelector('.card-title').textContent;
            const itemPrice = parseFloat(card.querySelector('.fs-6, .fs-3').textContent.replace('R$', '').replace(',', '.'));
            const itemImgSrc = card.querySelector('img').getAttribute('src');
            const itemImg = itemImgSrc.split('/').pop(); // pega só o nome do arquivo, ex: 'combo1.jpg'
            // Salve o caminho relativo ao projeto, não o caminho absoluto do navegador
            const itemDesc = card.querySelector('.card-text')?.textContent || '';
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            // Verifica se já existe o item no carrinho
            const existing = cartItems.find(item => item.name === itemName);
            if (existing) {
                existing.quantity += 1;
            } else {
                cartItems.push({
                    name: itemName,
                    price: itemPrice,
                    quantity: 1,
                    img: itemImg, // Caminho relativo
                    desc: itemDesc
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert(`${itemName} foi adicionado ao carrinho!`);
        });
    });

    // Cadastrar produto no cardápio
    const cadastrarButton = document.getElementById('cadastrar-button');
    if (cadastrarButton) {
        cadastrarButton.addEventListener('click', function () {
            const productName = document.getElementById('recipient-name').value;
            const productDesc = document.getElementById('message-text').value;
            const productPrice = parseFloat(document.getElementById('product-price').value);
            const productImage = document.getElementById('product-image').files[0];
            if (!productName || !productDesc || isNaN(productPrice) || !productImage) {
                alert('Por favor, preencha todos os campos corretamente.');
                return;
            }   
            const reader = new FileReader();
            reader.onload = function (e) {
                const newProduct = {
                    imagem: e.target.result, // Caminho da imagem
                    nome: productName,
                    descricaoCurta: productDesc,
                    descricaoCompleta: productDesc, // Pode ser ajustado conforme necessário
                    preco: `R$ ${productPrice.toFixed(2)}`
                };
                lanchesCardapio.push(newProduct);
                let produtosSalvos = JSON.parse(localStorage.getItem('produtosCardapio')) || [];
                produtosSalvos.push(newProduct);
                localStorage.setItem('produtosCardapio', JSON.stringify(produtosSalvos));
                const cardapioContainer = document.getElementById('cardapio-container');
                cardapioContainer.innerHTML = lanchesCardapio.map(lanche => criarCardLanche(lanche)).join('');
                alert('Produto cadastrado com sucesso!');
            };
            reader.readAsDataURL(productImage); // Lê a imagem como URL
        });
    }
});