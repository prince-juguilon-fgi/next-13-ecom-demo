/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { type GetProductsResponse } from "@/lib/products";

type StoreFrontProps = {
  products: GetProductsResponse;
  prefix: string;
};

export const StoreFront = ({ products, prefix }: StoreFrontProps) => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Products
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full aspect-square object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link href={`${prefix}/${product.slug}`}>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {product.description}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
