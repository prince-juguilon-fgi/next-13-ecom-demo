import { StoreFront } from "@/components/store-front";
import { getProducts } from "@/lib/products";

const Home = async () => {
  const products = await getProducts();
  return (
    <div>
      <StoreFront products={products} />
    </div>
  );
};

export default Home;
