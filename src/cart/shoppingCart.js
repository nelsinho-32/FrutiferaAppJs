import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

document.addEventListener('DOMContentLoaded', function () {
    renderHeader();
    renderFooter();

    const cartContainer = document.querySelector('#cart-items');
    const subtotalSpan = document.getElementById('subtotal');
    const totalSpan = document.getElementById('total');
    const taxaEntrega = 5.00;

    function getImagePath(img) {
        if (!img) return '../../assets/images/placeholder.png'; // imagem padrão
        return `../../assets/images/${img}`;
    }

    function renderCart() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartContainer.innerHTML = '';
        let subtotal = 0;

        if (cartItems.length === 0) {
            cartContainer.innerHTML = `<div class="text-center text-muted my-4">Seu carrinho está vazio.</div>`;
        }

        cartItems.forEach((item, idx) => {
            subtotal += item.price * item.quantity;
            cartContainer.innerHTML += `
                <div class="col">
                    <div class="card shadow-sm mb-3">
                        <img src="${getImagePath(item.img)}" class="card-img-top" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text text-truncate" title="${item.desc || ''}">
                                ${item.desc || ''}
                            </p>
                            <span class="fs-6 d-block mb-2">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                            <div class="d-flex justify-content-between align-items-center">
                                <button class="btn btn-primary btn-sm add-item" data-idx="${idx}">Adicionar</button>
                                <span class="badge bg-secondary quantity">${item.quantity}</span>
                                <button class="btn btn-warning btn-sm decrease-item" data-idx="${idx}">Diminuir</button>
                                <button class="btn btn-danger btn-sm delete-item" data-idx="${idx}">Deletar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        // Cálculo do resumo
        subtotalSpan.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        totalSpan.textContent = `R$ ${(subtotal + taxaEntrega).toFixed(2).replace('.', ',')}`;

        // Eventos dos botões
        document.querySelectorAll('.add-item').forEach(btn => {
            btn.onclick = function () {
                let idx = this.dataset.idx;
                cartItems[idx].quantity += 1;
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                renderCart();
            };
        });
        document.querySelectorAll('.decrease-item').forEach(btn => {
            btn.onclick = function () {
                let idx = this.dataset.idx;
                if (cartItems[idx].quantity > 1) {
                    cartItems[idx].quantity -= 1;
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    renderCart();
                }
            };
        });
        document.querySelectorAll('.delete-item').forEach(btn => {
            btn.onclick = function () {
                let idx = this.dataset.idx;
                cartItems.splice(idx, 1);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                renderCart();
            };
        });
    }

    renderCart();
});