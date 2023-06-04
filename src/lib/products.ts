import products from "./products.json";

export const getProducts = async (delay: number = 1000) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return products;
};

export type GetProductsResponse = Awaited<ReturnType<typeof getProducts>>;

export const getProductBySlug = async (slug: string) => {
  return products.find((p) => p.slug === slug) ?? null;
};

export type GetProductBySlugResponse = Awaited<ReturnType<typeof getProductBySlug>>;
