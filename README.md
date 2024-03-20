# The Webshop - Team Hjältarna
## Developed by (Sanne Jacobsson, Andreas Wessel, Leon Sedvall)
## Students of Medieinstitutet (E-Commerce Webdevelopment WIE23S)

The Webshop is a responsive web application that allows users to browse products, view product details, add products to a shopping cart, and check out.

## Table of Contents

1. [HTML Files](#html-files)
2. [TypeScript Files](#typescript-files)
3. [SCSS Files](#scss-files)

## HTML Files

The HTML files define the structure of the web pages:

* **index.html**: This is the main page of the application. It displays the products available for purchase.
* **productPage.html**: This page displays the details of a selected product.
* **shoppingcartPage.html**: This page displays the products added to the shopping cart.
* **checkoutPage.html**: This page allows users to enter their shipping and payment details and place an order.

## TypeScript Files

The TypeScript files handle the functionality of the web pages:

* **main.ts**: This file dynamically generates product displays on the main page.
* **productPage.ts**: This file retrieves the details of a selected product from `localStorage` and displays them on the product page.
* **shoppingcartPage.ts**: This file retrieves the details of the products added to the cart from `localStorage` and displays them on the shopping cart page.
* **checkoutPage.ts**: This file retrieves the details of the products added to the cart from `localStorage` and displays them on the checkout page.

## SCSS Files

The SCSS files define the styles of the web pages:

* **_mixins.scss**: This file defines a `desktop` mixin that applies its content only if the screen width is 768px or larger.
* **_reset.scss**: This file resets certain CSS properties to ensure consistent styling across different browsers.
* **style.scss**: This file imports several other SCSS files using the `@use` rule.
* **_landingPage.scss**: This file contains styles for the landing page of the web application.
* **_productPage.scss**: This file contains styles for the product page of the web application.
* **_shoppingcartPage.scss**: This file contains styles for the shopping cart page of the web application.
* **_checkoutPage.scss**: This file contains styles for the checkout page of the web application.
* **_confirmed.scss**: This file contains styles for the confirmation page of the web application.

Each of these components plays a crucial role in the functionality and appearance of The Webshop. The application supports a variety of screen sizes and provides a consistent and visually appealing user experience.

REGARDS,
the Heroes!