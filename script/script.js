const ringButtons = document.querySelectorAll('.ring-button');
const wristSizeBtns = document.querySelectorAll('.wrist-size');
const cartQuantity = document.getElementById('cart-quantity');
const addToCartBtn = document.getElementById('add-to-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const selectedQty = document.getElementById('selected-qty');
const cartTable = document.getElementById('cart-table');
const modalBox = document.getElementById('modal');
const modalDarkBg = document.getElementById('modal-dark-bg');
const continueShopping = document.getElementById('continue-shopping');
const checkoutFinal = document.getElementById('checkout-final');
let cart = [];
let productImageSrcStart = "./images/";
let selectedColor = "purple";
let selectedSize = "M";
let selectedPrice = 79;

// Handle color selection
for (const button of ringButtons) {
    button.addEventListener('click', function () {
        for (const btn of ringButtons) {
            btn.classList.replace('border-purple-700', 'border-gray-300');
        }
        button.classList.replace('border-gray-300', 'border-purple-700');
        selectedColor = button.id.replace('-color', '');
        document.getElementById('productImage').src = productImageSrcStart + selectedColor + ".png";
    });
}

// Handle size selection and update price
for (const button of wristSizeBtns) {
    button.addEventListener('click', function () {
        for (const btn of wristSizeBtns) {
            btn.classList.replace('border-purple-500', 'border-gray-300');
        }
        button.classList.replace('border-gray-300', 'border-purple-500');
        selectedSize = button.id.split('-')[1];
        selectedPrice = parseInt(button.textContent.match(/\d+/)[0]);
    });
}

// Cart Quantity Management
document.getElementById('positive').addEventListener('click', () => cartQuantity.innerText++);
document.getElementById('negative').addEventListener('click', () => {
    if (cartQuantity.innerText > 0) cartQuantity.innerText--;
});

// Add to Cart
addToCartBtn.addEventListener('click', () => {
    let quantity = parseInt(cartQuantity.innerText);
    if (quantity > 0) {
        checkoutBtn.classList.remove('hidden');
        let total = quantity * selectedPrice;
        cart.push({
            name: "Classy Modern Smart Watch",
            color: selectedColor,
            size: selectedSize,
            price: selectedPrice,
            quantity, total
        });
        updateCartTable();
        // selectedQty.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
        let totalQty = 0;
        for (const item of cart) {
            totalQty += item.quantity;
        }
        selectedQty.innerText = totalQty;
    }
});

// Update Cart Table
function updateCartTable() {
    let tbody = cartTable.querySelector('tbody');
    if (!tbody) {
        tbody = document.createElement('tbody');
        cartTable.appendChild(tbody);
    }

    // Clear the existing content of the tbody
    tbody.innerHTML = '';

    // Add rows for each item in the cart
    tbody.innerHTML = cart.map(item => `
        <tr class="text-left">
            <td>${item.name}</td>
            <td class="pl-8">${item.color}</td>
            <td class="pl-8">$${item.price}</td>
            <td class="pl-8 text-center">${item.quantity}</td>
            <td class="pl-8 text-right">$${item.total}</td>
        </tr>`).join('');

    // Calculate the total amount
    let totalAmount = cart.reduce((sum, item) => sum + item.total, 0);

    // Add the total row only once
    tbody.innerHTML += `
        <tr class="text-left font-bold">
            <td colspan="4" class="pl-8 text-right">Total:</td>
            <td class="pl-8 text-right">$${totalAmount}</td>
        </tr>`;
}

// Modal Handling
checkoutBtn.addEventListener('click', () => modalBox.classList.remove('hidden'));
continueShopping.addEventListener('click', () => modalBox.classList.add('hidden'));
checkoutFinal.addEventListener('click', () => alert('Click OK to proceed to payment...'));

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') modalBox.classList.add('hidden');
});

modalDarkBg.addEventListener('click', () => modalBox.classList.add('hidden'));