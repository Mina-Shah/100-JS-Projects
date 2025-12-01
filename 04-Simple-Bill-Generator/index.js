const items = [];

const customerNameInput = document.querySelector(".customer-name-input");
const taxPercentInput = document.querySelector(".tax-percent-input");
const itemNameInput = document.querySelector(".item-name-input");
const quantityInput = document.querySelector(".quantity-input");
const priceInput = document.querySelector(".price-input");
const addItemButton = document.querySelector(".add-item");
const tableBody = document.querySelector(".table-body");
const subtotalEl = document.querySelector(".subtotal");
const taxAmountEl = document.querySelector(".tax-amount");
const finalTotalEl = document.querySelector(".final-total");
const printButton = document.querySelector(".print-bill");
const clearAllButton = document.querySelector(".clear-all");

addItemButton.addEventListener("click", function () {
  const itemName = itemNameInput.value;
  const quantity = quantityInput.value;
  const price = priceInput.value;
  console.log(itemName, quantity, price);

  if (!itemName || !quantity || !price) {
    alert("enter valid item details");
    return;
  }

  const totalPrice = Number(quantity) * Number(price);
  console.log(totalPrice);

  const item = {
    name: itemName,
    qty: quantity,
    price: price,
    total: totalPrice,
  };
  console.log(item.name);

  items.push(item);

  updateTable();
  updateSummary();

  itemNameInput.value = "";
  quantityInput.value = "";
  priceInput.value = "";
  taxPercentInput.value = ""
});

function updateTable() {
  tableBody.innerHTML = "";

  items.forEach((myItem, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${myItem.name}</td>
        <td>${myItem.qty}</td>
        <td>${myItem.price}</td>
        <td>${myItem.total}</td>
        <td><button class="delete-item" data-index="${index}">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

tableBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-item")) {
    const index = e.target.dataset.index;
    items.splice(index, 1);
    updateTable();
    updateSummary();
  }
});

function updateSummary() {
  let subtotal = 0;
  items.forEach((myItem) => {
    subtotal += myItem.total;
  });

  const taxPercent = Number(taxPercentInput.value) || 0;
  const taxAmount = (subtotal * taxPercent) / 100;
  const finalTotal = subtotal + taxAmount;
  console.log(finalTotal);

  subtotalEl.textContent = subtotal.toFixed(2);
  taxAmountEl.textContent = taxAmount.toFixed(2);
  finalTotalEl.textContent = finalTotal.toFixed(2);
}

printButton.addEventListener("click", function () {
  window.print();
});

clearAllButton.addEventListener("click", function () {
  items.length = 0;
  updateTable();
  updateSummary();
  customerNameInput.value = "";
  taxPercentInput.value = "";
  finalTotalEl.textContent = `0.00`;
  subtotalEl.textContent = `0.00`;
  taxAmountEl.textContent = `0.00`;
});
