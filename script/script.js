
// Brand Color
const ringButtons = document.querySelectorAll('.ring-button');
let productImageSrcStart = "../images/";
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









