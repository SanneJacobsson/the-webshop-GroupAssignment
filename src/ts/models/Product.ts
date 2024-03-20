export class Product {
  constructor(
    public imgLink: string,
    public productName: string,
    public productDescription: string,
    public productPrice: number,
    public productMaterial: string,
    public productColor: string,
    public productSize: ProductSize | null
  ) {}
}

export enum ProductSize {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}
