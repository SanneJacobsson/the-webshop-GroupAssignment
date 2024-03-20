window.onload = (): void => {
    // Retrieves the product content / details elements from the webpage
  const productImage: HTMLImageElement | null = document.getElementById(
    "productImage"
  ) as HTMLImageElement;
  const productPrice: HTMLElement | null =
    document.getElementById("productPrice");
  const productDescription: HTMLElement | null =
    document.getElementById("productDescription");
  const productMaterial: HTMLElement | null =
    document.getElementById("productMaterial");
  const productColor: HTMLElement | null =
    document.getElementById("productColor");
  const productName: HTMLElement | null =
    document.getElementById("productName");
  const buyButton: HTMLElement | null = document.getElementById("buy_btn");
  // Shows / displays the selected product details on the webpage
  if (productImage) {
    productImage.src = localStorage.getItem("selectedProductImage") || "";
  }
  if (productPrice) {
    productPrice.textContent =
      "Price: " + (localStorage.getItem("selectedProductPrice") || "");
  }
  if (productDescription) {
    productDescription.textContent =
      localStorage.getItem("selectedProductDescription") || "";
  }
  if (productMaterial) {
    productMaterial.textContent =
      "Material: " + (localStorage.getItem("selectedProductMaterial") || "");
  }
  if (productColor) {
    productColor.textContent =
      "Color: " + (localStorage.getItem("selectedProductColor") || "");
  }
  if (productName) {
    productName.textContent = localStorage.getItem("selectedProductName") || "";
  }

  if (buyButton && productImage && productPrice && productName) {
    buyButton.addEventListener("click", () => {
      const cartProducts = JSON.parse(
        localStorage.getItem("cartProducts") || "[]"
      );
      const selectedSize = (
        document.querySelector('input[name="size"]:checked') as HTMLInputElement
      ).value;
      const existingProduct = cartProducts.find(
        (product: any) => product.name === productName.textContent
      );
      // If the product is not already in the cart, add it to the cart. Just an exist check.
      if (!existingProduct) {
        cartProducts.push({
          imageSrc: productImage.src,
          name: productName.textContent,
          price: productPrice.textContent?.replace("Price: ", ""),
          size: selectedSize,  
          quantity: 1,
          totalPrice: productPrice.textContent?.replace("Price: ", ""),
        });

        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      }

      window.location.href = "shoppingcartPage.html";
    });
  }
};
