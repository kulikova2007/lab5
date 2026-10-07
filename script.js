window.addEventListener('DOMContentLoaded', function () {

  var quantityField = document.getElementById('quantity');
  var quantityError = document.getElementById('quantity-error');
  var productSelect = document.getElementById('product');
  var resultElement = document.getElementById('result');
  var calcButton = document.getElementById('calc-button');

  var quantityPattern = /^[1-9][0-9]*$/;

  calcButton.addEventListener('click', function () {

    var quantityValue = quantityField.value.trim();

    if (!quantityPattern.test(quantityValue)) {
      quantityError.hidden = false;
      resultElement.textContent = '';
      return;
    }

    quantityError.hidden = true;

    var quantity = parseInt(quantityValue, 10);
    var price = parseInt(productSelect.value, 10);
    var productName = productSelect.options[productSelect.selectedIndex].text;
    var total = price * quantity;

    resultElement.textContent = 'Стоимость заказа (' + productName + ', ' + quantity + ' шт.): ' + total + ' ₽';
  });

});
