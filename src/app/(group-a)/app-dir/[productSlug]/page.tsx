import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { getProductBySlug } from "@/lib/products";

type ProductDetailPageProps = {
  params: {
    productSlug: string;
  };
};

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const product = await getProductBySlug(params.productSlug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
