import { Modal } from "@/components/modal/app-dir-modal";
import { ProductModal } from "@/components/product-modal";
import { getProductBySlug } from "@/lib/products";

type ProductDetailPageProps = {
  params: {
    productSlug: string;
  };
};

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const product = await getProductBySlug(params.productSlug);
  if (!product) return null

  return <Modal>
    <ProductModal product={product} prefix="app-dir" />
  </Modal>
};

export default ProductDetailPage;
