const products = [
    { name: "Bardak 1", price: 50, image: "https://via.placeholder.com/150" },
    { name: "Bardak 2", price: 70, image: "https://via.placeholder.com/150" },
    { name: "Bardak 3", price: 100, image: "https://via.placeholder.com/150" },
    { name: "Bardak 4", price: 120, image: "https://via.placeholder.com/150" },
    { name: "Bardak 5", price: 80, image: "https://via.placeholder.com/150" }
];

const productsContainer = document.getElementById('products');
const cartItems = document.getElementById('cart-items');
const totalEl = document.getElementById('total');

let cart = [];
let total = 0;

// Ürünleri sayfaya ekle
products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Fiyat: ${product.price}₺</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Sepete Ekle</button>
    `;
    productsContainer.appendChild(div);
});

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = ${item.name} - ${item.price}₺;
        cartItems.appendChild(li);
    });
    totalEl.textContent = Toplam: ${total}₺;
}