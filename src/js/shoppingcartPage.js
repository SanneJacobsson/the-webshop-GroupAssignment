"use strict";
window.onload = () => {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    const updateTotal = () => {
        let total = 0;
        let quantityTotal = 0;
        cartProducts.forEach((product) => {
            total += product.quantity * Number(product.price);
            quantityTotal += product.quantity;
        });
        let totalButton = document.getElementById("total_button");
        if (totalButton) {
            totalButton.textContent = `Total: ${total} SEK`;
        }
        let cartTotalDiv = document.getElementById("cartTotal");
        if (cartTotalDiv) {
            cartTotalDiv.textContent = `${quantityTotal}`;
        }
    };
    updateTotal();
    const createInfoElement = (tag, text) => {
        const element = document.createElement(tag);
        element.textContent = text;
        return element;
    };
    const createButton = (className, action) => {
        const button = document.createElement("i");
        button.className = className;
        button.style.color = "#ffffff";
        button.style.cursor = "pointer";
        button.addEventListener("click", action);
        return button;
    };
    cartProducts.forEach((product, index) => {
        let quantity = product.quantity;
        const infoContainer = document.createElement("div");
        infoContainer.className = "info-container";
        infoContainer.appendChild(createInfoElement("h2", product.name));
        infoContainer.appendChild(createInfoElement("p", `Size: ${product.size}`));
        infoContainer.appendChild(createInfoElement("p", `Unit Price: ${product.price} SEK`));
        infoContainer.appendChild(createInfoElement("p", `Quantity: ${quantity}`));
        infoContainer.appendChild(createInfoElement("p", `Total Price: ${quantity * Number(product.price)} SEK`));
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "info-button-container";
        buttonContainer.appendChild(createButton("fa-solid fa-minus", () => {
            if (quantity > 1) {
                quantity--;
                infoContainer.children[3].textContent = `Quantity: ${quantity}`;
                infoContainer.children[4].textContent = `Total Price: ${quantity * Number(product.price)}`;
                product.quantity = quantity;
                product.totalPrice = quantity * Number(product.price);
                localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
                updateTotal();
            }
        }));
        buttonContainer.appendChild(createButton("fa-solid fa-plus", () => {
            quantity++;
            infoContainer.children[3].textContent = `Quantity: ${quantity}`;
            infoContainer.children[4].textContent = `Total Price: ${quantity * Number(product.price)}`;
            product.quantity = quantity;
            product.totalPrice = quantity * Number(product.price);
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            updateTotal();
        }));
        buttonContainer.appendChild(createButton("fa-solid fa-trash", () => {
            cartProducts.splice(index, 1);
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            window.location.reload();
        }));
        infoContainer.appendChild(buttonContainer);
        const productsContainer = index === 0
            ? document.querySelector(".shoppingcart_container__products-container")
            : document.createElement("div");
        if (index !== 0 && productsContainer) {
            productsContainer.className =
                "shoppingcart_container__products-container";
            document
                .getElementById("shoppingcart_container")
                ?.appendChild(productsContainer);
        }
        if (productsContainer) {
            const imageContainer = document.createElement("div");
            imageContainer.className = "image-container";
            const productImage = document.createElement("img");
            productImage.src = product.imageSrc;
            imageContainer.appendChild(productImage);
            productsContainer.appendChild(imageContainer);
            productsContainer.appendChild(infoContainer);
        }
        updateTotal();
    });
    document.getElementById("checkout_button")?.addEventListener("click", () => {
        localStorage.setItem("checkoutProducts", JSON.stringify(cartProducts));
        window.location.href = "checkoutPage.html";
    });
};
document.querySelector(".hambX")?.addEventListener("click", () => {
    const navElement = document.querySelector(".navX");
    navElement?.classList.toggle("show");
});
