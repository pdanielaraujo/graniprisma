import { QUERY_KEYS } from '@/constants/frontEnd/tanstack';
import { useQuery } from '@tanstack/react-query';

const fetchCustomers = async () => {
  return await Promise.resolve();
};

export const useFetchCustomers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_CUSTOMERS],
    queryFn: fetchCustomers,
  });
};
