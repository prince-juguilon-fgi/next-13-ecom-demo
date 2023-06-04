import { Layout } from "@/components/layout";
import { ProductDetail } from "@/components/product-detail";
import { getProductBySlug } from "@/lib/products";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async ({ params }: any) => {
  if (!params?.productSlug || typeof params?.productSlug !== "string")
    return {
      notFound: true,
    };

  const product = await getProductBySlug(params.productSlug);

  if (!product) return { notFound: true };

  return { props: { product } };
};

type ProductDetailPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  return (
    <Layout>
      <ProductDetail product={product} />
    </Layout>
  );
};

export default ProductDetailPage;
