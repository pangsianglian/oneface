document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('cart');
    const totalElement = document.getElementById('total');
	const addToCartButton = document.getElementById('add-to-cart');

    function calculateTotal() {
        let totalAmount = 0;
        const cartItems = document.querySelectorAll('.cart-item');

        cartItems.forEach(row => {
            const quantityInput = row.querySelector('.quantity');
            const price = parseFloat(row.querySelector('.price').textContent.replace('$', ''));
            const quantity = parseInt(quantityInput.value);
            
            const itemTotal = price * quantity;
            totalAmount += itemTotal;
        });

        totalElement.textContent = `$${totalAmount.toFixed(2)}`;
    }

    // Listen for quantity changes
    cart.addEventListener('input', function (event) {
        if (event.target.classList.contains('quantity')) {
            calculateTotal();
        }
    });

    // Remove item from cart
    cart.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-btn')) {
            event.target.closest('tr').remove();
            calculateTotal();
        }
	});
	   // Add to cart button alert
    addToCartButton.addEventListener('click', function () {
        const totalAmount = totalElement.textContent;
        alert(`Total Payment ${totalAmount} has been added to cart. Thank you.`);
    });
    

    // Initial total calculation
    calculateTotal();
});
