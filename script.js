document.addEventListener('DOMContentLoaded', function() {
    const cart = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const addToCartButton = document.getElementById('add-to-cart');
    let totalAmount = 0;

    // Function to calculate the total price
    function calculateTotal() {
        totalAmount = 0;
        const rows = cart.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const quantity = row.querySelector('.quantity').value;
            const price = parseFloat(row.querySelector('.price').textContent.replace('$', ''));
            totalAmount += price * quantity;
        });
        totalElement.textContent = `$${totalAmount.toFixed(2)}`;
    }

    // Add event listeners to "remove" buttons
    removeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const row = e.target.closest('tr');
            row.remove();
            calculateTotal();
        });
    });

    // Example event listener for "Add to Cart" button
    addToCartButton.addEventListener('click', function() {
        alert('Product added to cart');
        // Implement actual cart logic here
    });

    // Call calculateTotal initially
    calculateTotal();
});
