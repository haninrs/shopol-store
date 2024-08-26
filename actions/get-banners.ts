import { Banner } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/banners`;

const getBanners = async (id :string): Promise<Banner> => {
    const res = await fetch(`${URL}/${id}`);
    const data = await res.json();
    return data;
};

export default getBanners;