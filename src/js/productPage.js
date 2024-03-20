"use strict";
window.onload = () => {
    // Retrieves the product content / details elements from the webpage
    const productImage = document.getElementById("productImage");
    const productPrice = document.getElementById("productPrice");
    const productDescription = document.getElementById("productDescription");
    const productMaterial = document.getElementById("productMaterial");
    const productColor = document.getElementById("productColor");
    const productName = document.getElementById("productName");
    const buyButton = document.getElementById("buy_btn");
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
            const cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
            const selectedSize = document.querySelector('input[name="size"]:checked').value;
            const existingProduct = cartProducts.find((product) => product.name === productName.textContent);
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
