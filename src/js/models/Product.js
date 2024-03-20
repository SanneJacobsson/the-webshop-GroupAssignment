export class Product {
    constructor(imgLink, productName, productDescription, productPrice, productMaterial, productColor, productSize) {
        Object.defineProperty(this, "imgLink", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: imgLink
        });
        Object.defineProperty(this, "productName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: productName
        });
        Object.defineProperty(this, "productDescription", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: productDescription
        });
        Object.defineProperty(this, "productPrice", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: productPrice
        });
        Object.defineProperty(this, "productMaterial", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: productMaterial
        });
        Object.defineProperty(this, "productColor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: productColor
        });
        Object.defineProperty(this, "productSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: productSize
        });
    }
}
export var ProductSize;
(function (ProductSize) {
    ProductSize["XS"] = "XS";
    ProductSize["S"] = "S";
    ProductSize["M"] = "M";
    ProductSize["L"] = "L";
    ProductSize["XL"] = "XL";
})(ProductSize || (ProductSize = {}));
