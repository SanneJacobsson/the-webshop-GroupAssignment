window.onload = (): void => {
  // Retrieves / collects the products added to the cart from the local storage
  const cartProducts = JSON.parse(
    localStorage.getItem("checkoutProducts") || "[]"
  );
  // Selects the shopping list div from the page
  const shoppingListDiv = document.querySelector(".checkout-form__shoppinglist");

  if (shoppingListDiv) {
    cartProducts.forEach((product: any) => {
      // Creates the image container and product image elements
      const imageContainer: HTMLElement = document.createElement("div");
      imageContainer.className = "image-container";

      const productImageElement: HTMLImageElement = document.createElement("img");
      productImageElement.src = product.imageSrc; 
      productImageElement.style.width = "200px"; 
      productImageElement.style.height = "200px"; 
      imageContainer.appendChild(productImageElement); 
      // Creates the info container and product details elements
      const infoContainer: HTMLElement = document.createElement("div");
      infoContainer.className = "info-container";

      const productNameElement: HTMLElement = document.createElement("h2");
      productNameElement.textContent = product.name; 
      infoContainer.appendChild(productNameElement); 

      const productSizeElement: HTMLElement = document.createElement("p");
      productSizeElement.textContent = `Size: ${product.size}`; 
      infoContainer.appendChild(productSizeElement); 

      const productPriceElement: HTMLElement = document.createElement("p");
      productPriceElement.textContent = `Unit Price: ${product.price} SEK`; 
      infoContainer.appendChild(productPriceElement); 

      const quantityElement: HTMLElement = document.createElement("p");
      quantityElement.textContent = `Quantity: ${product.quantity}`; 
      infoContainer.appendChild(quantityElement); 

      const totalPriceElement: HTMLElement = document.createElement("p");
      totalPriceElement.textContent = `Total Price: ${product.totalPrice} SEK`; 
      infoContainer.appendChild(totalPriceElement); 
      // Creates the actual product element and appends the image container and info container to it
      const productElement: HTMLElement = document.createElement("div");
      productElement.appendChild(imageContainer); 
      productElement.appendChild(infoContainer); 
      // Appends the product element to the shopping list div
      shoppingListDiv.appendChild(productElement); 
    });
  }
};

const confirmedPurchase__description = document.getElementById("confirmedPurchase__description");

if (confirmedPurchase__description) {
  const orderNumber = document.createElement("p");
  orderNumber.id = "orderNumber"; 
  orderNumber.innerHTML = "ORDER#: " + (Math.floor(Math.random() * 2000) + 1000).toString(); 

  confirmedPurchase__description.appendChild(orderNumber); 
}

console.log((Math.floor(Math.random() * 2000) + 1000).toString());
