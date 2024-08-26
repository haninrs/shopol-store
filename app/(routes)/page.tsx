import getBanners from "@/actions/get-banners";
import getProducts from "@/actions/get-products";
import Banner from "@/components/Banner";
import ProductList from "@/components/Product-List";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanners("/f795c56e-25f0-4981-b6ce-63211d1c7758");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Top Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
