import products from "./products.json";

type GetProductsProps = {
  delay?: number;
};

export const getProducts = async (props?: GetProductsProps) => {
  await new Promise((resolve) => setTimeout(resolve, props?.delay ?? 1000));
  return products;
};

export type GetProductsResponse = Awaited<ReturnType<typeof getProducts>>;
