import { Category } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/categories`;

const getCategory = async (id:string): Promise<Category> => {
   try {
     const res = await fetch(`${URL}/${id}`, {
        method: "GET",
     });
     const data = await res.json();    
     return data;
   } catch (error) {
       console.log("Error fetching category:", error);
       return {
      id: "",
      name: "",
      banner: {
        id: "",
        label: "",
        imgUrl: "",
      },
    }
   }
};

export default getCategory;