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
        productImage.src = `${productImageSrcStart}${color}.png`
    })


}

