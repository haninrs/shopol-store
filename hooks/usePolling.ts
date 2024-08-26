import { useEffect, useState } from 'react';
import getCategory from '@/actions/get-category';
import { Category } from '@/types';

export const usePolling = (categoryId: string, interval: number) => {
  const [data, setData] = useState<Category | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCategory(categoryId);
      setData(result);
    };

    fetchData(); // Initial fetch
    const id = setInterval(fetchData, interval);

    return () => clearInterval(id); // Clean up interval on unmount
  }, [categoryId, interval]);

  return data;
};
