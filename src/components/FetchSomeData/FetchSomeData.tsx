import { DotProgress, Typography } from '@equinor/eds-core-react';
import { AllProducts } from './Types';
import useSWR from 'swr';

export const FetchSomeData = () => {
  async function fetcher(url: string) {
    const r = await fetch(url);
    return await r.json();
  }

  const { data, error, isValidating } = useSWR<AllProducts>(
    `https://dummyjson.com/products`,
    fetcher,
  );

  if (error) return <Typography color="white">Failed to load</Typography>;
  if (!data && isValidating) return <DotProgress size={48} />;

  return (
    <>
      {data?.products.map((product, index) => (
        <Typography key={index} color="white">
          Title: {product.title}
        </Typography>
      ))}
    </>
  );
};
