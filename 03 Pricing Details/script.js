document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-item');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalItems = 2;
    let totalPrice = 467.99;

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const listItem = button.closest('.list-item');
            const itemPrice = parseFloat(listItem.querySelector('.price').textContent.replace('$', ''));
            totalItems--;
            totalPrice -= itemPrice;
            totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
            totalItemsElement.textContent = `${totalItems} Item${totalItems !== 1 ? 's' : ''}`;
            listItem.remove();
        });
    });
});
