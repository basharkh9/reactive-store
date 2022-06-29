import Product from "../models/product";

class ProductServices {
  async getProducts(): Promise<Product[]> {
    return fetch("/products.json").then((resp) => resp.json());
  }

  async loadProductsByName(search: string): Promise<Product[]> {
    const lcSearch = search.toLowerCase();

    return fetch("/products.json")
      .then((resp) => resp.json())
      .then((pokemon: Product[]) =>
        pokemon.filter(({ name }) => name.toLowerCase().includes(lcSearch))
      );
  }
}

export default new ProductServices();
