
// Brand Color
const ringButtons = document.querySelectorAll('.ring-button');
let productImageSrcStart = "./images/";
for (let i = 0; i < ringButtons.length; i++) {
    let ringButton = ringButtons[i]

    ringButton.addEventListener('click', function (event) {
        const color = event.target.id.replace('-color', '')
        for (let k = 0; k < ringButtons.length; k++) {
            ringButtons[k].classList.remove('border-purple-700');
            ringButtons[k].classList.add('border-gray-300');
        }

        ringButton.classList.add('border-purple-700');
        // ringButton.classList.remove('border-gray-300');

        const productImage = document.getElementById('productImage');

        // productImage.src = productImageSrcStart + color + '.png'

        productImage.src = productImageSrcStart + color + ".png";
        // productImage.src = `${productImageSrcStart}${color}.png`
    })

}

// Wrist Size
const wristSizeBtns = document.querySelectorAll('.wrist-size');

for (const btn of wristSizeBtns) {
    btn.addEventListener('click', function () {
        for (const button of wristSizeBtns) {
            button.classList.remove("border-purple-500")
            button.classList.add("border-gray-300")
        }
        btn.classList.add('border-purple-500')
    })
}

// Cart Quantity Calculate

document.getElementById('positive').addEventListener('click', function () {
    document.getElementById('cart-quantity').innerText++;
})
document.getElementById('negative').addEventListener('click', function () {
    const currentQty = parseInt(document.getElementById('cart-quantity').innerText);
    if (currentQty === 0) {
        return
    }
    else {
        document.getElementById('cart-quantity').innerText--;
    }
})


// Add to Cart
let cartCount = 0;
const checkoutBtn = document.getElementById('checkout-btn');

document.getElementById('add-to-cart').addEventListener('click', function () {

    const cartQtyElement = document.getElementById('cart-quantity');
    let currentCartQty = parseInt(cartQtyElement.innerText) || 0;

    if (currentCartQty > 0) {
        checkoutBtn.classList.remove('hidden');
        cartCount = cartCount + currentCartQty;
    }

    document.getElementById('selected-qty').innerHTML = cartCount;

});

// Code for modal

checkoutBtn.addEventListener('click', function () {
    my_modal_4.showModal()
})










