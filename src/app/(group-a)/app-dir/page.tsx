import { StoreFront } from "@/components/store-front/app-dir-store-front";
import { getProducts } from "@/lib/products";

const Home = async () => {
  const products = await getProducts();
  return <StoreFront products={products} prefix="/app-dir" />;
};

export default Home;
