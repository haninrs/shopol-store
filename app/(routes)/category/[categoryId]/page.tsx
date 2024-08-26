import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Banner from "@/components/Banner";
import Container from "@/components/ui/Container";
import NoResult from "@/components/ui/No-Result";
import ProductCard from "@/components/ui/Product-Card";
import React from "react";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getProducts({ categoryId: params.categoryId });
  const category = await getCategory(params.categoryId);
  console.log("category data:", category);

  return (
    <div>
      <Container>
        <Banner data={category.banner} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="mt-6 lg:col-span-4 lg:mt-0">
                {products.length === 0 && <NoResult />}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {products.map((item) => (
                        <ProductCard key={item.id} data={item}/>
                    ))}
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
