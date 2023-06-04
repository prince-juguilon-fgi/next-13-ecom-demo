import { type InferGetServerSidePropsType } from "next";
import { StoreFront } from "@/components/store-front";
import { Layout } from "@/components/layout";
import { getProducts } from "@/lib/products";

export const getServerSideProps = async () => {
  const products = await getProducts();
  return { props: { products } };
};

type HomeProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home = ({ products }: HomeProps) => {
  return (
    <Layout>
      <StoreFront products={products} prefix="/app-dir" />
    </Layout>
  );
};

export default Home;
