import Product from "../models/product";

class ProductServices {
  async getProducts(): Promise<Product[]> {
    return fetch("/products.json").then((resp) => resp.json());
  }

  async searchProductsByName(search: string): Promise<Product[]> {
    const lcSearch = search.toLowerCase();

    return fetch("/products.json")
      .then((resp) => resp.json())
      .then((pokemon: Product[]) =>
        pokemon.filter(({ name }) => name.toLowerCase().includes(lcSearch))
      );
  }

  async getProduct(productId: number): Promise<Product> {
    return fetch("/products.json")
      .then((resp) => resp.json())
      .then(
        (pokemon: Product[]) => pokemon.filter(({ id }) => id === productId)[0]
      );
  }
}

export default new ProductServices();
