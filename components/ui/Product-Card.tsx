"use client";

import { Product } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import IconButton from "./Icon-Button";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import { ExpandIcon } from "lucide-react";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

  const router = useRouter()

  const previewModal = usePreviewModal()

  const handleClick = () => {
    router.push(`/product/${data.id}`)
  }

  const onPreview:MouseEventHandler<HTMLButtonElement> =  (event) =>{
    event.stopPropagation()

    previewModal.onOpen(data)
  }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Images and Action */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
        src={data.images?.[0].url}
        alt="Product Image" 
        fill 
        className="aspect-square object-cover rounded-md" />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
            onClick={onPreview} 
            icon={<ExpandIcon size={15} />} />
          </div>
        </div>
      </div>
      {/* Product Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
