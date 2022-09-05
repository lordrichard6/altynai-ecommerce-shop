/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card bg-slate-100 overflow-hidden">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow h-96 h-md-80 w-full object-cover"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a className="text-lg w-4/5">
            <h2 className="text-lg truncate text-center">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="font-bold">${product.price}</p>
        <button type="button" className="primary-button" onClick={() => addToCartHandler(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
