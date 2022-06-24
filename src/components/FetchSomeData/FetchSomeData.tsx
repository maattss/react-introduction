import { CircularProgress, DotProgress, Typography } from '@equinor/eds-core-react';
import useSWR from 'swr';
import { AllProducts } from './Types';

export const FetchSomeDataComponent = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR<string, AllProducts>(
    'https://dummyjson.com/products',
    fetcher,
  );

  if (error) return <Typography color="white">Failed to load</Typography>;
  if (!data) return <DotProgress size={48} />;

  console.log('Data from dummyJson. 30 products', data);

  return <div>{/* TOOD: Insert products */}</div>;
};
