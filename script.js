// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const cartButton = document.getElementById('cart-button');
//     const cartModal = document.getElementById('cart-modal');
//     const closeModal = document.querySelector('.modal .close');
//     const cartItemsContainer = document.querySelector('.cart-items');
//     const cartCount = document.getElementById('cart-count');

//     cartButton.addEventListener('click', () => {
//         cartModal.style.display = 'block';
//         renderCartItems();
//     });

//     closeModal.addEventListener('click', () => {
//         cartModal.style.display = 'none';
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === cartModal) {
//             cartModal.style.display = 'none';
//         }
//     });

//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', event => {
//             const product = event.target.closest('.product');
//             const productId = product.getAttribute('data-id');
//             const productName = product.querySelector('h2').innerText;
//             const quantity = parseInt(product.querySelector('.quantity').value);

//             addToCart(productId, productName, quantity);
//         });
//     });

//     function addToCart(id, name, quantity) {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];

//         const existingItem = cart.find(item => item.id === id);
//         if (existingItem) {
//             existingItem.quantity += quantity;
//         } else {
//             cart.push({ id, name, quantity });
//         }

//         localStorage.setItem('cart', JSON.stringify(cart));
//         alert(`Добавлено в корзину: ${quantity} x ${name}`);
//         updateCartCount();
//     }

//     function renderCartItems() {
//         cartItemsContainer.innerHTML = '';
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];

//         cart.forEach(item => {
//             const cartItem = document.createElement('div');
//             cartItem.classList.add('cart-item');
//             cartItem.innerHTML = `
//                 <span class="quantity-display">${item.quantity} x</span>
//                 <h3>${item.name}</h3>
//                 <input type="number" value="${item.quantity}" min="1" class="update-quantity" data-id="${item.id}">
//                 <button class="remove-from-cart" data-id="${item.id}">Удалить</button>
//             `;
//             cartItemsContainer.appendChild(cartItem);
//         });

//         document.querySelectorAll('.remove-from-cart').forEach(button => {
//             button.addEventListener('click', event => {
//                 const id = event.target.getAttribute('data-id');
//                 removeFromCart(id);
//             });
//         });

//         document.querySelectorAll('.update-quantity').forEach(input => {
//             input.addEventListener('change', event => {
//                 const id = event.target.getAttribute('data-id');
//                 const newQuantity = parseInt(event.target.value);
//                 updateCartItemQuantity(id, newQuantity);
//             });
//         });
//     }

//     function removeFromCart(id) {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cart = cart.filter(item => item.id !== id);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         renderCartItems();
//         updateCartCount();
//     }

//     function updateCartItemQuantity(id, newQuantity) {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         const item = cart.find(item => item.id === id);
//         if (item) {
//             item.quantity = newQuantity;
//             localStorage.setItem('cart', JSON.stringify(cart));
//             renderCartItems();
//             updateCartCount();
//         }
//     }

//     function updateCartCount() {
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
//         cartCount.innerText = totalCount;
//     }

//     // Загрузка количества товаров при инициализации
//     updateCartCount();
// });

// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.getElementById('search-input');
//     const productList = document.getElementById('product-list');

//     searchInput.addEventListener('input', () => {
//         const searchQuery = searchInput.value.toLowerCase();

//         document.querySelectorAll('.product').forEach(product => {
//             const productName = product.querySelector('h2').innerText.toLowerCase();
//             const productDescription = product.querySelector('.description').innerText.toLowerCase();

//             if (productName.includes(searchQuery) || productDescription.includes(searchQuery)) {
//                 product.classList.remove('hidden');
//             } else {
//                 product.classList.add('hidden');
//             }
//         });
//     });
// });

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const productList = document.getElementById('product-list');
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.modal .close');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.getElementById('cart-count');

    // Поиск товаров
    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value.toLowerCase();

        document.querySelectorAll('.product').forEach(product => {
            const productName = product.querySelector('h2').innerText.toLowerCase();
            const productDescription = product.querySelector('.description').innerText.toLowerCase();

            if (productName.includes(searchQuery) || productDescription.includes(searchQuery)) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    });

    // Открытие корзины
    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'block';
        renderCartItems();
    });

    // Закрытие корзины
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // window.addEventListener('click', (event) => {
    //     if (event.target === cartModal) {
    //         cartModal.style.display = 'none';
    //     }
    // });

    // Добавление в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.product');
            const productId = product.getAttribute('data-id');
            const productName = product.querySelector('h2').innerText;
            const quantity = parseInt(product.querySelector('.quantity').value);

            addToCart(productId, productName, quantity);
        });
    });

    function addToCart(id, name, quantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ id, name, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Добавлено в корзину: ${quantity} x ${name}`);
        updateCartCount();
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span class="quantity-display">${item.quantity} x</span>
                <h3>${item.name}</h3>
                <button class="remove-from-cart" data-id="${item.id}">Удалить</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', event => {
                const id = event.target.getAttribute('data-id');
                removeFromCart(id);
            });
        });

        document.querySelectorAll('.update-quantity').forEach(input => {
            input.addEventListener('change', event => {
                const id = event.target.getAttribute('data-id');
                const newQuantity = parseInt(event.target.value);
                updateCartItemQuantity(id, newQuantity);
            });
        });
    }

    function removeFromCart(id) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
    }

    function updateCartItemQuantity(id, newQuantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
            updateCartCount();
        }
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.innerText = totalCount;
    }

    // Загрузка количества товаров при инициализации
    updateCartCount();
});
