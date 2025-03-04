
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

const checkoutBtn = document.getElementById('checkout-btn');

document.getElementById('add-to-cart').addEventListener('click', function () {

    const cartQtyElement = document.getElementById('cart-quantity');
    let currentCartQty = parseInt(cartQtyElement.innerText) || 0;
    let cartCount = 0;
    if (currentCartQty > 0) {
        checkoutBtn.classList.remove('hidden');
        cartCount = cartCount + currentCartQty;
    }

    document.getElementById('selected-qty').innerHTML = cartCount;

});

// Code for modal
const modalBox = document.getElementById('modal')

checkoutBtn.addEventListener('click', function () {
    modalBox.classList.remove('hidden')
})

const continueShopping = document.getElementById('continue-shopping');

continueShopping.addEventListener('click', function () {
    modalBox.classList.add('hidden')
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modalBox.classList.add('hidden')
    }
})

document.getElementById('checkout-final').addEventListener('click', function () {
    alert('Click on OK for redirecting to payment method...')
})


// Inserting Data to add to card dynamically;


const productsTable = document.getElementById('cart-table');

const productsDetails = document.createElement('tbody');
productsDetails.innerHTML = `
    <tr class="text-left">
        <td>Classy Modern Smart Watch</td>
        <td class="pl-8">Gray</td>
        <td class="pl-8 ">$<span>89</span></td>
        <td class="pl-8 text-center">01</td>
        <td class="pl-8 text-right">$<span>89</span></td>
    </tr>
`

productsTable.appendChild(productsDetails)













