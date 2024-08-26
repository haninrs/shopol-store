"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import React from "react";
import Modal from "./ui/modal";
import Info from "./Info";
import Gallery from "./Gallery";

const PreviewModal = () => {
  const PreviewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <Modal open={PreviewModal.isOpen} onClose={PreviewModal.onClose}>
      <div className="grid w-full grid-cols-3 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col space-x-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
