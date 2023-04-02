import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type ExchangeRate = {
  currency: string;
  code: string;
  country: string;
  amount: number;
  rate: number;
};

export const useExchangeRates = () =>
  useQuery<ExchangeRate[]>(
    ['exchange-rates'],
    async () => {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/api/exchange-rates',
      });
      return response.data;
    },
    {
      staleTime: 1000 * 60 * 10,
      cacheTime: 1000 * 60 * 10,
    }
  );
