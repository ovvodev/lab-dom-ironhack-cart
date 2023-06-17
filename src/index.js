// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity input");
  let priceValue = price.innerText;
  let quantityValue = quantity.value;
  let subtotalValue = quantityValue * priceValue;
  const subtotalHolder = product.querySelector(".subtotal span");
  subtotalHolder.innerText = subtotalValue;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  let totalValue = 0;
  
  for (let index = 0; index < products.length; index++) {
     updateSubtotal(products[index]);
     const subtotal = products[index].querySelector(".subtotal span");
     totalValue += parseFloat(subtotal.textContent);
    }

  // ITERATION 3
  //... your code goes here
  const totalValueElement = document.getElementById("total-value");
  totalValueElement.textContent = `Total: $${totalValue.toFixed(2)}`;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const tr = target.closest('tr'); // Find the closest ancestor <tr> element
  tr.remove();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
  let tr = document.createElement("tr");
  tr.className = "product";
  
  let nameCell = document.createElement("td");
  nameCell.className = "name";
  let spanTag = document.createElement("span");
  spanTag.innerText = document.querySelector("#new-name").value;
  nameCell.appendChild(spanTag);
  tr.appendChild(nameCell);

  let priceCell = document.createElement("td");
  priceCell.className = "price";
  let priceSpan = document.createElement("span");
  priceSpan.innerText = document.querySelector("#new-price").value;
  priceCell.appendChild(document.createTextNode("$"));
  priceCell.appendChild(priceSpan);
  tr.appendChild(priceCell);

  let quantityCell = document.createElement("td");
  quantityCell.className = "quantity";
  let quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = "0";
  quantityInput.min = "0";
  quantityInput.placeholder = "quantity";
  quantityCell.appendChild(quantityInput);
  tr.appendChild(quantityCell);

  let subtotalCell = document.createElement("td");
  subtotalCell.className = "subtotal";
  let subtotalSpan = document.createElement("span");
  subtotalSpan.innerText = "0";
  subtotalCell.appendChild(document.createTextNode("$"));
  subtotalCell.appendChild(subtotalSpan);
  tr.appendChild(subtotalCell);


  let actionCell = document.createElement("td");
  actionCell.className = "action";
  let removeButton = document.createElement("button");
  removeButton.className = "btn btn-remove";
  removeButton.innerText = "Remove";
  actionCell.appendChild(removeButton);
  tr.appendChild(actionCell);
  
  
  
  let tableBody = document.getElementsByTagName("tbody")[0];
  tableBody.appendChild(tr);


  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
 let removeBtn = document.querySelectorAll(".btn.btn-remove");
  for (let index = 0; index < removeBtn.length; index++) {
    removeBtn[index].addEventListener("click" , removeProduct,);
    removeBtn[index].addEventListener("click" , calculateAll,);
  }
   
  
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
 let removeBtn = document.querySelectorAll(".btn.btn-remove");
  for (let index = 0; index < removeBtn.length; index++) {
    removeBtn[index].addEventListener("click" , removeProduct,);
    removeBtn[index].addEventListener("click" , calculateAll,);
  }



  const addButton = document.getElementById("create");
  addButton.addEventListener("click", createProduct);
  

});
